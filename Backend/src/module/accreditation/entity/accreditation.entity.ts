import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
@CustomTable('accreditations')
export class Accreditation extends Model<Accreditation> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.STRING(255), allowNull: true })
    name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    image: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    frontend_enable: number;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;
}
