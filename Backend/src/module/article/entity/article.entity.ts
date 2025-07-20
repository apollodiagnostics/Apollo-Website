import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('article')
export class Article extends Model<Article> {
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
    slug: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    meta_title: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    meta_keyword: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    meta_description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    body: string;
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    view: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    category_id: number;
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    thumbnail_base_url: string;
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    thumbnail_path: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    status: number;
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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    updated_by: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    published_at: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    card_data: string;
}
