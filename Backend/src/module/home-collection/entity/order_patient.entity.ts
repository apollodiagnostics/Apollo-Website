import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
} from 'sequelize-typescript';
import { UhidProfile } from 'src/module/user-uhid-profile/entity/uhid_profile.entity';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
import { OrderEntity } from './order.entity';
import { TestDetailEntity } from './test_detail.entity';

@CustomTable('order_patient', { timestamps: false })
export class OrderPatientEntity extends Model<OrderPatientEntity> {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number;

    @ForeignKey(() => OrderEntity)
    @Column({ type: DataType.NUMBER, allowNull: false })
    order_id: number;

    @BelongsTo(() => OrderEntity)
    orders: OrderEntity;

    @ForeignKey(() => UhidProfile)
    @Column({ type: DataType.NUMBER, allowNull: false })
    patient_id: number;

    @Column({ type: DataType.NUMBER, allowNull: true })
    prebooking_id: number;

    @Column({ type: DataType.DATE, allowNull: true })
    appointment_time: Date;

    @Column({ type: DataType.BOOLEAN, allowNull: true })
    is_canceled: boolean;

    @Column({ type: DataType.STRING, allowNull: true })
    sub_order_id: string;

    @BelongsTo(() => UhidProfile)
    uhidProfile: UhidProfile;

    @HasMany(() => TestDetailEntity)
    testDetailEntity: TestDetailEntity[];
}
