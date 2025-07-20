import {
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    UpdatedAt,
} from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
import { Address } from 'src/module/user-uhid-profile/entity/address.entity';
import { OrderPatientEntity } from './order_patient.entity';

@CustomTable('orders', { timestamps: true })
export class OrderEntity extends Model<OrderEntity> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number;
    @ForeignKey(() => Address)
    @Column({ type: DataType.INTEGER, allowNull: false })
    address_id: number;

    @BelongsTo(() => Address)
    address: Address;

    @Column({ type: DataType.STRING, allowNull: false })
    payment_status: string;

    @Column({ type: DataType.STRING, allowNull: false })
    mobile_number: string;

    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    coupon_code: string;

    @Column({
        type: DataType.UUID,
        allowNull: true,
        defaultValue: DataType.UUIDV4,
    })
    unique_id: string;

    @HasMany(() => OrderPatientEntity)
    orderPatients: OrderPatientEntity[];

    @CreatedAt
    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @UpdatedAt
    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;

    @Column({ type: DataType.INTEGER, allowNull: true })
    hc_redeem: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    home_collection_charges: number;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: true,
    })
    total_amount: number;

    @Column({ type: DataType.STRING, allowNull: true })
    payment_type: string;

    @Column({ type: DataType.STRING, allowNull: true })
    prebooking_id_digital: string;
}
