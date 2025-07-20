import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('career')
export class Career extends Model<Career> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.STRING(255), allowNull: true })
    job_title: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    qualification: string;

    @Column({ type: DataType.STRING, allowNull: true })
    description: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    experience: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    state: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    city: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    location: string;

    @Column({ allowNull: true, type: DataType.DATE })
    valid_date: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;
}
