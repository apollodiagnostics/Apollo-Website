import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { Response } from 'express';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async userLogin(mobileNumber: string, otp: string, res: Response) {
        const token = await this.userRepository.userLogin(mobileNumber, otp);

        const { 'x-access-token': accessToken, userInfo } = token;
        res.set('x-access-token', accessToken);
        return userInfo;
    }

    async sendOtp(mobileNumber: string) {
        return await this.userRepository.sendOtp(mobileNumber);
    }
}
