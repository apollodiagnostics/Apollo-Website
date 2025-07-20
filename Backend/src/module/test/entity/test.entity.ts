import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('find_test')
export class Test extends Model<Test> {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        allowNull: false,
    })
    id: number;

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
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    frontend_enable: number;
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    added_in_xml: number;
}
