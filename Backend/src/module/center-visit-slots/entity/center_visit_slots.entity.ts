import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
import { STATUS } from '../constants/center_visit_slots.constants';

@CustomTable('centre_visit_slots')
export class CenterVisitSlot extends Model<CenterVisitSlot> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.STRING(250), allowNull: true })
    state: string;

    @Column({ type: DataType.STRING(250), allowNull: true })
    tagged_lab: string;

    @Column({ type: DataType.STRING(259), allowNull: true })
    store_name: string;

    @Column({ type: DataType.STRING(259), allowNull: true })
    store_email: string;

    @Column({ type: DataType.STRING(250), allowNull: true })
    mon_sat_first_timings: string;

    @Column({ type: DataType.STRING(250), allowNull: true })
    mon_sat_second_timings: string;

    @Column({ type: DataType.STRING(250), allowNull: true })
    time_interval: string;

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
