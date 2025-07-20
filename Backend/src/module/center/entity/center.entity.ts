import { Column, DataType, Model } from 'sequelize-typescript';
import { ADDED_IN_XML } from '../constants/center.constants';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('centre_details')
export class Center extends Model<Center> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.STRING(100), allowNull: true })
    centre_type: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    centre_code: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    centre_name: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    mobile_no: number;

    @Column({ type: DataType.STRING, allowNull: true })
    business_zone: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    state_id: number;

    @Column({ type: DataType.STRING(60), allowNull: true })
    state: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    city_id: number;

    @Column({ type: DataType.STRING(60), allowNull: true })
    city: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    zone: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    locality: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    isNabl: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    isCap: string;

    @Column({ type: DataType.STRING, allowNull: true })
    address: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    latitude: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    longitude: string;

    @Column({ type: DataType.STRING(250), allowNull: true })
    slug: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    meta_title: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    meta_keyword: string;

    @Column({ type: DataType.STRING, allowNull: true })
    meta_description: string;

    @Column({ type: DataType.STRING(250), allowNull: true })
    iframe_url: string;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;

    @Column({
        type: DataType.ENUM(...Object.values(ADDED_IN_XML)),
        allowNull: true,
    })
    added_in_xml: ADDED_IN_XML;
}
