import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('enquire_now')
export class Enquire extends Model<Enquire> {
    @Column({ type: DataType.STRING(250), allowNull: false })
    name: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    lastname: string;

    @Column({ type: DataType.STRING(1000), allowNull: true })
    email: string;

    @Column({ type: DataType.STRING(10), allowNull: false })
    mobile_number: string;

    @Column({ type: DataType.STRING(250), allowNull: true })
    gender: string;

    @Column({ type: DataType.DATE, allowNull: true })
    dob: Date;

    @Column({ type: DataType.STRING(50), allowNull: false })
    state: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    city: string;

    @Column({ type: DataType.STRING(250), allowNull: true })
    locality: string;

    @Column({ allowNull: true, type: DataType.DATE })
    prefered_date: Date;

    @Column({ type: DataType.STRING(250), allowNull: true })
    slot_time: string;

    @Column({ allowNull: true, type: DataType.FLOAT })
    price: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    state_id: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    city_id: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    areaid: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    pin_code: number;

    @Column({ type: DataType.STRING(255), allowNull: true })
    test_name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    comment: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    status: number;

    @Column({ type: DataType.STRING(255), allowNull: true })
    prescription: string;

    @Column({ type: DataType.DATE, allowNull: true })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;

    @Column({ type: DataType.STRING(200), allowNull: true })
    address: string;

    @Column({ type: DataType.STRING, allowNull: true })
    customer_address: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    lat: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    lang: string;
}
