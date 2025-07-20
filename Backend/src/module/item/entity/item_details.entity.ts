import {
    Column,
    CreatedAt,
    DataType,
    HasMany,
    Model,
    UpdatedAt,
} from 'sequelize-typescript';
import { ADDED_IN_XML, IS_ACTIVE } from '../constants/item.constants';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
import { TestDetailEntity } from 'src/module/home-collection/entity/test_detail.entity';

@CustomTable('item_details', {
    timestamps: true,
})
export class ItemDetails extends Model<ItemDetails> {
    @Column({ primaryKey: true, allowNull: false, type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    itemid: number;

    @Column({ type: DataType.STRING(100), allowNull: true })
    itemname: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    itemcode: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    item_alias_name: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    from_agein_days: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    to_agein_days: number;

    @Column({ type: DataType.STRING(50), allowNull: true })
    gender: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    labname: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    labcode: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    lab_id: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    rate: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    schedule_rate: number;

    @Column({ type: DataType.DATE, allowNull: true })
    from_date: Date;

    @Column({ type: DataType.DATE, allowNull: true })
    to_date: Date;

    @Column({ type: DataType.STRING(50), allowNull: true })
    item_type: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    test_in_package: number;

    @Column({ type: DataType.STRING(50), allowNull: true })
    nabl_cap: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    item_remarks: string;

    @Column({ type: DataType.STRING(10), allowNull: true })
    discounted: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    state_id: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    city_id: number;

    @Column({ type: DataType.TEXT, allowNull: true })
    package_in_clussion: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    pre_test_information: string;

    @Column({ type: DataType.STRING, allowNull: true })
    report_delivery: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    test_type: string;

    @Column({ type: DataType.STRING, allowNull: true })
    components: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    information_for_doctor: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    item_description: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    test_description: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    location_page_content: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    panel_id: number;

    @Column({ type: DataType.STRING(100), allowNull: true })
    slug: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    card_data: string;

    @Column({ type: DataType.STRING(15), allowNull: true })
    SubCategoryID: string;

    @Column({ type: DataType.STRING(250), allowNull: true })
    synonyms_for_test: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    keywords: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    title: string;

    @Column({ type: DataType.STRING, allowNull: true })
    meta_description: string;

    @Column({
        type: DataType.ENUM(...Object.values(IS_ACTIVE)),
        allowNull: true,
    })
    is_active: IS_ACTIVE;

    @CreatedAt
    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @UpdatedAt
    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;

    @Column({
        type: DataType.ENUM(...Object.values(ADDED_IN_XML)),
        allowNull: true,
    })
    added_in_xml: ADDED_IN_XML;

    @Column({ type: DataType.INTEGER, allowNull: true })
    discount: number;

    @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 1 })
    priority: number;

    @HasMany(() => TestDetailEntity)
    testDetail: TestDetailEntity;
}
