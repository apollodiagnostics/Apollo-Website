import { AutoIncrement, Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('prescription')
export class Prescription extends Model<Prescription> {
    @AutoIncrement
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        allowNull: false,
    })
    id: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    name: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    mobile_number: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    image_url: string;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;
}
