import { AutoIncrement, Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('otp', { timestamps: false })
export class Otp extends Model<Otp> {
    @AutoIncrement
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        allowNull: false,
    })
    id: number;

    @Column({ type: DataType.STRING(10), allowNull: true })
    otp: string;

    @Column({ type: DataType.STRING(15), allowNull: true })
    mobile_number: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    expire_time: Date;
}
