import {
    AutoIncrement,
    Column,
    DataType,
    HasMany,
    Model,
} from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
import { DEFAULT_ADDRESS } from '../constants/uhid_profile.constants';
import { OrderEntity } from 'src/module/home-collection/entity/order.entity';

@CustomTable('address', { timestamps: false })
export class Address extends Model<Address> {
    @AutoIncrement
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    address_id: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    profileId: number;

    @Column({ type: DataType.STRING(200), allowNull: true })
    access_token: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    uhid: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    firstname: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    lastname: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    mobile: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    state: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    country: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    city: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    pincode: string;

    @Column({ type: DataType.STRING, allowNull: true })
    address: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    type: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    countryName: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    stateName: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    cityName: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    areaId: number;

    @Column({ type: DataType.STRING(200), allowNull: true })
    areaName: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    name: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    age: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    gender: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    dateofbirth: string;

    @Column({
        type: DataType.ENUM(...Object.values(DEFAULT_ADDRESS)),
        allowNull: true,
    })
    defaultAddress: DEFAULT_ADDRESS;

    @Column({ type: DataType.STRING(200), allowNull: true })
    lat: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    lng: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    street: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    landmark: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    existance: string;

    @HasMany(() => OrderEntity)
    orders: OrderEntity[];
}
