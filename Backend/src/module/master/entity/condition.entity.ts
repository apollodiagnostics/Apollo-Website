import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('condition')
export class Condition extends Model<Condition> {
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
    description: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    frontend_enable: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    slug: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    keywords: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    meta_description: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    most_common: number;
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    condition_type: number;
    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    state_id: number;
    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    city_id: number;
}
