import { AutoIncrement, Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
import { STATUS } from '../constants/slots.constants';

@CustomTable('slots_booking')
export class BookingSlots extends Model<BookingSlots> {
    @AutoIncrement
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ allowNull: true, type: DataType.STRING(250) })
    name: string;

    @Column({ allowNull: true, type: DataType.STRING(100) })
    email: string;

    @Column({ allowNull: true, type: DataType.STRING(20) })
    mobile_number: string;

    @Column({ allowNull: true, type: DataType.STRING(250) })
    city: string;

    @Column({ allowNull: true, type: DataType.STRING(250) })
    lab_center: string;

    @Column({ allowNull: true, type: DataType.DATE })
    booked_date: string;

    @Column({ allowNull: true, type: DataType.STRING(250) })
    slot_time: string;

    @Column({ allowNull: true, type: DataType.STRING(250) })
    test_name: string;

    @Column({ allowNull: true, type: DataType.STRING })
    presription: string;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;

    @Column({
        type: DataType.ENUM(...Object.values(STATUS)),
        allowNull: true,
    })
    status: STATUS;
}
