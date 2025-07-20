import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('faq')
export class Faq extends Model<Faq> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.STRING(250), allowNull: true })
    title: string;

    @Column({ type: DataType.STRING(500), allowNull: true })
    text: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    category: string;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;
}
