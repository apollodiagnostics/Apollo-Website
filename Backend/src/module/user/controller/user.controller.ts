import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserDto } from '../dto/user_login.dto';
import { UserService } from '../service/user.service';
import { Response } from 'express';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
import { SendOtpDto } from '../dto/send_otp.dto';
import { Throttle } from '@nestjs/throttler';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}
    @Post('/login')
    @ResponseCustom(responseName.USER_LOGIN)
    async userLogin(
        @Body() info: UserDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { mobileNumber, otp } = info;
        return await this.userService.userLogin(mobileNumber, otp, res);
    }

    @Throttle(3, 60)
    @Post('/send-otp')
    @ResponseCustom(responseName.OTP_SEND)
    async sendOtp(@Body() info: SendOtpDto) {
        const { mobileNumber } = info;
        return await this.userService.sendOtp(mobileNumber);
    }
}
