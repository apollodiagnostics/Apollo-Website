import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
} from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
import { OrderPatientEntity } from './order_patient.entity';
import { ItemDetails } from 'src/module/item/entity/item_details.entity';

@CustomTable('test_detail2', { timestamps: false })
export class TestDetailEntity extends Model<TestDetailEntity> {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number;

    @ForeignKey(() => OrderPatientEntity)
    @Column({ type: DataType.NUMBER, allowNull: false })
    order_patient_id: number;

    @BelongsTo(() => OrderPatientEntity)
    orderPatient: OrderPatientEntity;

    @ForeignKey(() => ItemDetails)
    @Column({ type: DataType.NUMBER, allowNull: false })
    item_id: number;

    @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
    disc_amt: number;

    @BelongsTo(() => ItemDetails)
    itemDetails: ItemDetails;
}
