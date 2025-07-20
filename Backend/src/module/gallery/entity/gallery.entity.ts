import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('gallery')
export class Gallery extends Model<Gallery> {
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
    image_title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image_path: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image_date: string;
}
