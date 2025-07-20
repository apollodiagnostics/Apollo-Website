import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('reviews', { timestamps: false })
export class Reviews extends Model<Reviews> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.STRING(100), allowNull: true })
    name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    description: string;

    @Column({ type: DataType.DECIMAL, allowNull: true })
    rating: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    centreId: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    state_id: number;

    @Column({ type: DataType.STRING(200), allowNull: true })
    state: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    city_id: number;

    @Column({ type: DataType.STRING(200), allowNull: true })
    city: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    centre_name: string;
}
