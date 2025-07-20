export interface IApolloDynamicRoasterConfig {
    url: string;
    username: string;
    password: string;
    grantType: string;
    source: string;
}

export interface QueryGetAllSlotsData {
    lat: string;
    lng: string;
    date?: string;
    minMaxRadius?: string;
    noOfSlots?: string;
}
