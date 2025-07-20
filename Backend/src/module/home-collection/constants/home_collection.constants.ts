export interface RescheduleSlots {
    preBookingId: number | string; // Can be number or string depending on the type of preBookingId
    reason: string; // Reason for rescheduling
    slotTime: string[]; // Time of the slot
    slotDate: string; // Date of the slot in "YYYY-MM-DD" format
}

export interface CancelSlots {
    preBookingId: string;
    remarks: string;
}
