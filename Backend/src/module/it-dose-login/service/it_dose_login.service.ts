import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ItDoseDto } from '../dto/it_dose_login.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ItDoseLoginService {
    constructor(private readonly configService: ConfigService) {}
    async login(body: ItDoseDto) {
        try {
            const domain = this.configService.get(
                'itdose.hcApolloDiagonisticsUrl',
            );
            const url = `${domain}/HomeCollectionDynamic/API/LoginAPIDynamic`;
            const formData = new FormData();
            formData.append('Username', body.Username);
            formData.append('Password', body.Password);
            formData.append('Client', body.Client);
            const res = await axios.post(url, formData);
            const resData = res.data;

            if (resData.status == false) {
                throw new resData.message();
            }

            return resData;
        } catch (err) {
            throw new BadRequestException(err);
        }
    }
}
