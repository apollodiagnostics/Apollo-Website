import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('state', { timestamps: false })
export class State extends Model<State> {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        allowNull: false,
    })
    id: number;

    @Column({ type: DataType.STRING(50), allowNull: true })
    state: string;
}
