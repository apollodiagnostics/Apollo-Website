export interface IHCApolloDiagnosticsConfig {
    url: string;
    username: string;
    password: string;
    client: string;
}

export interface IBookHomeCollectionInfo {
    HomeCollectionData: object[];
    HomeCollectionChargeData?: object[];
    CouponData?: object[];
}
