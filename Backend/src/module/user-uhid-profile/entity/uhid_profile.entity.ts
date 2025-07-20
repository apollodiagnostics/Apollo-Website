import {
    AutoIncrement,
    Column,
    DataType,
    DeletedAt,
    HasMany,
    Model,
} from 'sequelize-typescript';
import { OrderPatientEntity } from 'src/module/home-collection/entity/order_patient.entity';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('user_uhid_profile', { timestamps: true, paranoid: true })
export class UhidProfile extends Model<UhidProfile> {
    @AutoIncrement
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    profileId: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    userId: number;

    @Column({ type: DataType.STRING(200), allowNull: true })
    title: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    access_token: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    uhid: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    firstname: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    lastname: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    email: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    dob: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    age: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    gender: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    mobilenumber: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    relationship: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    address: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    defaultUser: number;

    @Column({ type: DataType.STRING(200), allowNull: true })
    alternatemobile: string;

    @DeletedAt
    @Column({ type: DataType.DATE, allowNull: true })
    deletedAt: Date;

    @HasMany(() => OrderPatientEntity)
    orderPatient: OrderPatientEntity[];
}
