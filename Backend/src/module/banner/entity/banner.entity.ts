import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('baner')
export class Banner extends Model<Banner> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.STRING, allowNull: true })
    baner_name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    website_url: string;

    @Column({ type: DataType.STRING, allowNull: true })
    baner_image: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    status: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    priority: number;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;
}
