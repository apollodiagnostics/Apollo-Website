import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';

@CustomTable('cart', { timestamps: false })
export class OldCart extends Model<OldCart> {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number;

    @Column({ type: DataType.NUMBER, allowNull: true })
    cart_id: number;

    @Column({ type: DataType.STRING(255), allowNull: true })
    order_id: string;

    @Column({ type: DataType.NUMBER, allowNull: true })
    user_id: number;

    @Column({ type: DataType.NUMBER, allowNull: true })
    sub_user_id: number;

    @Column({ type: DataType.NUMBER, allowNull: true })
    collection_type: number;

    @Column({ type: DataType.STRING(50), allowNull: true })
    title: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    patient_first_name: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    patient_last_name: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    gender: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    age: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    email: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    date_of_birth: string;

    @Column({ type: DataType.STRING(15), allowNull: true })
    mobile_number: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    preferred_date: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    available_slots: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    house_number: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    street: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    locality: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    city: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    type: string;

    @Column({ type: DataType.NUMBER, allowNull: true })
    pin_code: number;

    @Column({ type: DataType.STRING(100), allowNull: true })
    pre_booking_id: string;

    @Column({ type: DataType.NUMBER, allowNull: true })
    total_quantity: number;

    @Column({
        type: DataType.DECIMAL(12, 2),
        allowNull: true,
    })
    total_amount: number;

    @Column({
        type: DataType.DECIMAL(12, 2),
        allowNull: true,
    })
    total_discount: number;

    @Column({ type: DataType.TEXT, allowNull: true })
    transaction_id: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    payment_response: string;

    @Column({ type: DataType.NUMBER, allowNull: true })
    payment_status: number;

    @Column({ type: DataType.STRING(15), allowNull: true })
    Alternatemobileno: string;

    @Column({ type: DataType.NUMBER, allowNull: true })
    LocalityID: number;

    @Column({ type: DataType.STRING(255), allowNull: true })
    Landmark: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    Appdatetime: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    Client: string;

    @Column({ type: DataType.NUMBER, allowNull: true })
    DoctorID: number;

    @Column({ type: DataType.STRING(255), allowNull: true })
    ReferedDoctor: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    Paymentmode: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    Remarks: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    Latitude: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    Longitude: string;

    @Column({ type: DataType.STRING(10), allowNull: true })
    StateID: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    state: string;

    @Column({ type: DataType.STRING(100), allowNull: true })
    SlotID: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    slotTime: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    PayUPaymentId: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    PushStatus: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    UnmappedStatus: string;

    @Column({ type: DataType.STRING(255), allowNull: true })
    txnkey: string;

    @Column({
        type: DataType.DECIMAL(12, 2),
        allowNull: true,
    })
    transaction_fee: number;

    @Column({ type: DataType.STRING(60), allowNull: true })
    PushMode: string;

    @Column({ type: DataType.NUMBER, allowNull: true })
    cityID: number;

    @Column({ allowNull: true, type: DataType.DATE })
    created_at?: Date;

    @Column({ allowNull: true, type: DataType.DATE })
    updated_at?: Date;

    @Column({ type: DataType.STRING(200), allowNull: true })
    uhid: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    source: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    lat: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    lng: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    sessionId: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    deviceId: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    DigitalpreBookingId: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    DigitalbookingId: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    preBookingId: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    phleboName: string;

    @Column({ type: DataType.STRING(11), allowNull: true })
    phleboId: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    subOrderId: string;

    @Column({ type: DataType.NUMBER, allowNull: true })
    IsPrimaryMember: number;

    @Column({ type: DataType.NUMBER, allowNull: true })
    minMaxRadius: number;

    @Column({ type: DataType.STRING(200), allowNull: true })
    newtransaction_id: string;

    @Column({ type: DataType.STRING(200), allowNull: true })
    newPaymentmode: string;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
    newAmount: string;
}
