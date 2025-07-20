import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('test_has_conditions', { timestamps: false })
export class TestHasConditions extends Model<TestHasConditions> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    test_id: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    condition_id: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    state_id: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    city_id: number;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;
}
