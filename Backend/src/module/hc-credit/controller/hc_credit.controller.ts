import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { HcCreditService } from '../service/hc_credit.service';
import { ParamDto } from '../dto/hc_credit_param.dto';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
import { SendOtpBodyDto } from '../dto/send_otp_body.dto';
import { validateOtpBodyDto } from '../dto/validate_otp_body.dto';

@Controller()
export class HcCreditController {
    constructor(private hcCreditService: HcCreditService) {}
    @ResponseCustom(responseName.OTP_SEND)
    @Post('send-otp')
    async sendOtp(@Body() body: SendOtpBodyDto) {
        return await this.hcCreditService.sendOtp(body);
    }

    @Get()
    @ResponseCustom(responseName.RECORD_FETCHED)
    async getHcCredit(@Query() query: ParamDto) {
        return await this.hcCreditService.getHcCredit(query.mobileNumber);
    }

    @Post('validate-otp')
    @ResponseCustom(responseName.OTP_VALIDATE)
    async verifyOtp(@Body() body: validateOtpBodyDto) {
        return await this.hcCreditService.validateOtp(body);
    }
}
