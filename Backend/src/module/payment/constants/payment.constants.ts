// export enum PAYMENT_CONSTANTS {
//     TEST = 'TEST',
//     LIVE = 'LIVE',
//     KEY = 'UUqHuw',
//     SALT = '6ACqA2htLm6C38edzn4xVkPMDDIf3owB',
// }

export type HomeCollectionChargeDataType = {
    Amount: number;
    DiscAmt: number;
    NetAmount: number;
    ItemID: number;
    ItemName: string;
    Coupon_DiscAmt_247: number;
    GroupPlan_DiscAmt_247: number;
    GroupPlan_247: string;
};

export enum PAYMENT_TYPE {
    ONLINE = 'ONLINE',
    COD = 'COD',
}

export enum PAYMENT_STATUS {
    SUCCESS = 'success',
    PENDING = 'pending',
    FAILED = 'failed',
}

export enum SESSION {
    SESSION_ID = 'xbrqze',
}

export enum DEVICE {
    DEVICE_ID = 'device@123',
}
export interface Address {
    address_id: number; // Auto-incremented Primary Key
    profileId: number; // Foreign key or identifier for the user profile
    access_token: string; // Token for authentication
    uhid: string; // Unique health ID
    firstname: string; // First name of the user
    lastname: string; // Last name of the user
    mobile: string; // Mobile number
    state: string; // State identifier (could be state code)
    country: string; // Country identifier (could be country code)
    city: string; // City identifier
    pincode: string; // Postal code
    address: string; // Full address
    type: string; // Address type (e.g., home, office)
    countryName: string; // Full country name
    stateName: string; // Full state name
    cityName: string; // Full city name
    areaId: number; // Area identifier
    areaName: string; // Area name
    name: string; // Name associated with the address
    age: string; // Age of the individual
    gender: string; // Gender of the individual
    dateofbirth: string; // Date of birth
    defaultAddress: '0' | '1'; // Enum to indicate if it's the default address ('0' for no, '1' for yes)
    lat: string; // Latitude
    lng: string; // Longitude
    street: string; // Street name
    landmark: string; // Landmark near the address
    existance: string; // Existence status (potentially for soft deletes or record status)
}

export interface UserProfile {
    profileId: number; // Auto-incremented Primary Key
    userId: number; // Foreign key or identifier for the user
    title: string; // Title (e.g., Mr., Mrs., etc.)
    access_token: string; // Token for authentication
    uhid: string; // Unique health ID
    firstname: string; // First name of the user
    lastname: string; // Last name of the user
    email: string; // Email address of the user
    dob: string; // Date of birth
    age: string; // Age of the user
    gender: string; // Gender of the user
    mobilenumber: string; // Mobile number
    relationship: string; // Relationship to the user (e.g., self, spouse, child)
    address: string; // Full address
    defaultUser: number; // Indicates if it's the default user (0 or 1)
    alternatemobile: string; // Alternate mobile number
}

export interface BookSlots {
    address: string;
    sessionId: string;
    preBookingId: string;
}
