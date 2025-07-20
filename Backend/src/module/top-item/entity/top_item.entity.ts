import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('top_package_items', { timestamps: false })
export class TopPackage extends Model<TopPackage> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    city_id: number;

    @Column({ type: DataType.STRING, allowNull: true })
    city: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    item_id: number;

    @Column({ type: DataType.STRING, allowNull: true })
    item_code: string;

    @Column({ type: DataType.STRING, allowNull: true })
    item_name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    item_type: string;

    @Column({ type: DataType.STRING, allowNull: true })
    icon: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    test_included: number;
}
