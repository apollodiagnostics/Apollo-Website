import { Column, DataType, Model } from 'sequelize-typescript';
import { ADDED_IN_XML } from '../constants.ts/blogs.constants';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
@CustomTable('blogs')
export class Blogs extends Model<Blogs> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.BIGINT })
    id: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    cat_id: number;

    @Column({ type: DataType.STRING(255), allowNull: true })
    name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    description: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    frontend_enable: number;

    @Column({ type: DataType.STRING(255), allowNull: true })
    image: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    slug: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    keywords: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    title: string;

    @Column({ type: DataType.STRING, allowNull: true })
    meta_description: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    most_common: number;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at: Date;

    @Column({
        type: DataType.ENUM(...Object.values(ADDED_IN_XML)),
        allowNull: true,
    })
    added_in_xml: ADDED_IN_XML;

    @Column({ type: DataType.STRING, allowNull: true })
    short_description: string;
}
