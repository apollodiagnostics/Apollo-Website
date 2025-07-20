import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UhidProfile } from 'src/module/user-uhid-profile/entity/uhid_profile.entity';
import { Otp } from '../entity/otp';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { OTP_ERROR } from 'src/constants/error';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class UserRepository {
    constructor(
        private jwtService: JwtService,
        private readonly configService: ConfigService,
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger,
    ) {}

    async userLogin(mobileNumber: string, otp: string) {
        const secretKey = this.configService.get('auth.JwtSecretKey');
        const expiryTime = this.configService.get('auth.JwtExpireIn');
        let checkUserExist;
        const number = await Otp.findOne({
            where: { mobile_number: mobileNumber },
        });

        if (!number) {
            throw new HttpExceptionWrapper(OTP_ERROR.INVALID_NUMBER);
        }

        const otpVerify = await Otp.findOne({
            where: { otp: otp, mobile_number: mobileNumber },
        });
        if (!otpVerify) {
            throw new HttpExceptionWrapper(OTP_ERROR.INVALID_OTP);
        }

        const expireTime = otpVerify.expire_time;
        const currentTime = new Date();

        if (expireTime >= currentTime) {
            const payload = { mobilenumber: mobileNumber };
            const accessToken = this.jwtService.sign(payload, {
                secret: secretKey,
                expiresIn: expiryTime,
            });

            let user = await UhidProfile.findOne({
                where: { mobilenumber: mobileNumber },
            });

            if (!user) {
                checkUserExist = false;
                const newUser = {
                    mobilenumber: mobileNumber,
                    access_token: accessToken,
                };

                user = await UhidProfile.create(newUser);
            } else {
                checkUserExist = !!user.firstname;
                await UhidProfile.update(
                    { access_token: accessToken },
                    {
                        where: { mobilenumber: mobileNumber },
                    },
                );
            }

            const userInfo = {
                profileId: user.profileId,
                userExist: checkUserExist,
                mobileNumber: mobileNumber,
            };

            return {
                'x-access-token': accessToken,
                userInfo,
            };
        } else {
            throw new HttpExceptionWrapper(OTP_ERROR.TIME_EXPIRE);
        }
    }

    async sendOtp(mobileNumber: string) {
        const currentTimestamp = new Date();
        const expireTime = new Date(currentTimestamp.getTime() + 300 * 1000);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const url = `https://api.oot.bz/api/v1/send?username=ahnlsldiagnosticotp.trans&password=FQeVt&unicode=false&from=APOLAB&to=${mobileNumber}&text=Your%20OTP%20is%20${otp}%20for%20Apollo%20diagnostics%20login.&templateId=83658004&dltContentId=1007743791128338788`;

        try {
            const res = await axios.get(url);
            this.logger.info({ res });

            const data = {
                otp: otp,
                mobile_number: mobileNumber,
                expire_time: expireTime,
            };

            const instance = await Otp.findOne({
                where: { mobile_number: mobileNumber },
            });

            if (instance) {
                const newExpireTime = new Date(
                    currentTimestamp.getTime() + 300 * 1000,
                );
                await Otp.update(
                    { otp: otp, expire_time: newExpireTime },
                    { where: { mobile_number: mobileNumber } },
                );
            } else await Otp.create(data);
        } catch (err) {
            this.logger.error('Printing error in send otp', err);
            throw new HttpExceptionWrapper(OTP_ERROR.OTP_ERROR);
        }
    }
}
