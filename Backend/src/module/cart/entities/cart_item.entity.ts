import {
    AutoIncrement,
    Column,
    DataType,
    ForeignKey,
    Model,
} from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
import { Cart } from './cart.entity';

@CustomTable('cart_item_v2', { timestamps: false })
export class CartItem extends Model<CartItem> {
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number;

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    cart_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    item_id: number;

    @Column({
        type: DataType.DECIMAL(12, 2),
        allowNull: true,
    })
    item_price: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    item_quantity: number;
}
