import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('blogs_category')
export class BlogsCategory extends Model<BlogsCategory> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.BIGINT })
    id: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    slug: string;

    @Column({ allowNull: true, type: DataType.STRING })
    description: string;

    @Column({ allowNull: true, type: DataType.STRING(255) })
    image: string;

    @Column({ allowNull: true, type: DataType.STRING })
    meta_title: string;

    @Column({ allowNull: true, type: DataType.STRING })
    meta_keyword: string;

    @Column({ allowNull: true, type: DataType.STRING })
    meta_description: string;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;
}
