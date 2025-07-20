import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('location')
export class Location extends Model<Location> {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    readonly id: number;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    StateID: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    State: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    CityID: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    City: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    AreaID: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Area: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    DropLocationID: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    DropLocationCode: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    DropLocationName: string;
}
