import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('news_and_media')
export class News extends Model<News> {
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
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    view: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    date: string;
}
