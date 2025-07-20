import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('testimonial')
export class Testimonial extends Model<Testimonial> {
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    author: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    category: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    image: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    is_active: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    youtube_code: number;
}
