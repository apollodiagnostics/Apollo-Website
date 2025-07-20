import { Injectable } from '@nestjs/common';
import { PrescriptionRepository } from '../repository/prescription.repository';
import { CreateUserDto } from '../dto/create_user.dto';

@Injectable()
export class PrescriptionService {
    constructor(private prescriptionRepository: PrescriptionRepository) {}
    async getAllUser(limit: number, offset: number, mobileNumber: string) {
        return await this.prescriptionRepository.getAllUser(
            limit,
            offset,
            mobileNumber,
        );
    }

    async getUserById(id: number) {
        return await this.prescriptionRepository.getUserById(id);
    }

    async createUser(obj: CreateUserDto) {
        return await this.prescriptionRepository.createUser(obj);
    }
}
