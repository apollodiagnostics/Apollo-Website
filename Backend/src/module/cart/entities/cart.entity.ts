import { AutoIncrement, Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('cart_v2', { timestamps: false })
export class Cart extends Model<Cart> {
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    })
    id: number;

    @Column({
        type: DataType.NUMBER,
        allowNull: true,
    })
    profile_id: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    mobile_number: string;
}
