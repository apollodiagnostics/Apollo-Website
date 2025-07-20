import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('google_rating')
export class Google extends Model<Google> {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    readonly id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    google_location: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    google_rating: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    google_review: number;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    is_active: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    created_at: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    updated_at: string;
}
