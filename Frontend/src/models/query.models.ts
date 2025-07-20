import { NullableProperties } from '@utils/typescript'

export type ApiResponse = {
  statusCode: number
  message: string
}

export type QueryLocation = {
  id: number
  StateID: number
  State: string
  CityID: number
  City: string
  AreaID: number
  Area: string
  DropLocationID: number
  DropLocationCode: string
  DropLocationName: string
}

export type QueryCities = {
  CityID: number
  City: string
}

export type QueryStates = {
  id: number
  state: string
}

export type QueryAboutUsCards = {
  cardtype: string
  nametitle: string
  description: string
  imageUrl: string
  cardImage: string[]
}

export type QueryMostBookedData = {
  id: number
  itemid: number
  itemname: string
  itemcode: string
  item_alias_name: string | null
  from_agein_days: number
  to_agein_days: number
  gender: string
  labname: string
  labcode: string
  lab_id: number
  rate: number
  schedule_rate: number
  from_date: string | null
  to_date: string | null
  item_type: string
  test_in_package: number
  nabl_cap: string | null
  item_remarks: string | null
  discounted: string | null
  state_id: number
  city_id: number
  package_in_clussion: string | null
  pre_test_information: string
  report_delivery: string
  test_type: string
  components: string
  information_for_doctor: string
  item_description: string
  test_description: string
  location_page_content: string
  panel_id: number
  slug: string
  SubCategoryID: string
  synonyms_for_test: string
  keywords: string
  title: string
  meta_description: string
  is_active: string
  created_at: string | null
  updated_at: string
  added_in_xml: string
  discount: number
}

export type QueryItemCardData = {
  question: string
  answer: string
}

export type QueryItem = {
  id: number
  itemid: number
  itemname: string
  itemcode: string
  item_alias_name: string | null
  from_agein_days: number
  to_agein_days: number
  gender: string
  labname: string
  labcode: string
  lab_id: number
  rate: number
  schedule_rate: number
  from_date: string | null
  to_date: string | null
  item_type: string
  test_in_package: number
  nabl_cap: string | null
  item_remarks: string | null
  discounted: number | null
  state_id: number
  city_id: number
  package_in_clussion: string | null
  pre_test_information: string
  report_delivery: string
  test_type: string
  components: string | null
  information_for_doctor: string | null
  item_description: string | null
  test_description: string | null
  location_page_content: string | null
  panel_id: number
  slug: string
  SubCategoryID: string
  synonyms_for_test: string | null
  keywords: string | null
  title: string | null
  meta_description: string | null
  is_active: string
  created_at: string | null
  updated_at: string
  added_in_xml: string
  discount: number
  card_data: QueryItemCardData[]
}

export type QueryCondition = {
  id: number
  name: string
  description: string
  frontend_enable: number
  image: string
  slug: string
  keywords: string
  title: string
  meta_description: string
  most_common: number
  condition_type: number
  state_id: number
  categorytype: string
  city_id: number
}

export type QueryDepartment = {
  id: string
  slug: string
  meta_title: string
  meta_keyword: string
  meta_description: string
  title: string
  body: string
  view: string
  category_id: string
  thumbnail_base_url: string
  thumbnail_path: string
  status: number
}

export type QueryBlogs = {
  id: number
  cat_id: number
  name: string
  description: string
  frontend_enable: number
  image: string
  slug: string
  keywords: string
  title: string
  meta_description: string
  most_common: number
  created_at: string
  updated_at: string
  added_in_xml: string
  short_description: string
}

export type QueryFaqData = {
  id: string
  title: string
  text: string
  category: string
  created_at: string
  updated_at: string
}

export type QueryAboutUsSinglePageData = {
  dataValues: {
    id: number
    slug: string
    meta_title: string
    meta_description: string
    title: string
    body: string
    view: string
    category_id: number
    thumbnail_base_url: string
    thumbnail_path: string
    status: string
  }
  card_data: QueryAboutUsCards[]
}

export type QuerySingleBlogData = {
  id: number
  cat_id: number
  name: string
  description: string
  frontend_enable: number
  image: string
  slug: string
  keywords: string
  title: string
  meta_description: string
  most_common: number
  created_at: string
  updated_at: string
  added_in_xml: number
}

export type QueryTestimonialCard = {
  id: number
  title: string
  description: string
  author: string
  category: string
  location: string
  image: string
  is_active: number
  youtube_code: string
}

export type QueryBlogsCategories = {
  id: number
  name: string
  slug: string
  description: string | null
  image: string | null
  meta_title: string
  meta_keyword: string
  meta_description: string | null
  created_at: string
  updated_at: string
}

export type QueryTest = {
  id: number
  name: string
  description: string
  image: string | null
  slug: string
  keywords: string | null
  title: string | null
  meta_description: string | null
  frontend_enable: boolean
  added_in_xml: string
}

export type QueryAllConditions = {
  id: number
  name: string
  description: string
  frontend_enable: boolean
  image: string
  slug: string
  keywords: string | null
  title: string | null
  meta_description: string | null
  most_common: number
  condition_type: number
  state_id: number
  city_id: number
  created_at: string
  updated_at: string
}

export type QueryAllItemsData = ApiResponse & {
  data: {
    count: number
    rows: QueryItem[]
  }
}

export type QueryMostBookedItemsData = ApiResponse & {
  data: QueryMostBookedData[]
}

export type QueryLocationData = ApiResponse & {
  data: {
    count: number
    rows: QueryLocation[]
  }
}

export type QueryAllCities = ApiResponse & {
  data: {
    count: number
    rows: QueryCities[]
  }
}

export type QueryAllStates = ApiResponse & {
  data: {
    count: number
    rows: QueryStates[]
  }
}

export type QueryAllConditionsData = ApiResponse & {
  data: QueryCondition[]
}

export type QuerySingleItemData = ApiResponse & {
  data: {
    count: number
    rows: QueryItem[]
  }
}

export type QueryDepartmentsData = ApiResponse & { data: QueryDepartment[] }
export type QueryFaqsData = ApiResponse & {
  data: {
    count: number
    rows: QueryFaqData[]
  }
}

export type QueryAboutUsData = ApiResponse & {
  data: QueryAboutUsSinglePageData[]
}

export type QueryBlogsData = ApiResponse & {
  data: {
    count: number
    rows: QueryBlogs[]
  }
}

export type QuerySingleBlogPageData = ApiResponse & {
  data: {
    dataValues: QuerySingleBlogData
    _previousDataValues: QuerySingleBlogData
    _options: {
      isNewRecord: boolean
      _schema: string
      _schemaDelimiter: string
      raw: boolean
      attributes: string[]
    }
  }
}

export type QueryTestimonialCardsData = ApiResponse & {
  data: {
    count: number
    rows: QueryTestimonialCard[]
  }
}

export type QueryBlogsCategoriesData = ApiResponse & {
  data: {
    count: number
    rows: QueryBlogsCategories[]
  }
}

export type QueryBlogsByCategoriesData = ApiResponse & {
  data: {
    count: number
    rows: QueryBlogs[]
  }
}

export type QueryTestData = ApiResponse & {
  data: QueryTest[]
}

export type QuerySingleTestData = ApiResponse & {
  data: {
    test: {
      test: QueryTest
    }
  }
}

export type QueryFindAConditionData = ApiResponse & {
  data: {
    id: string
    name: string
    description: string
    frontend_enable: true
    image: string | null
    slug: string
    keywords: string | null
    title: string | null
    meta_description: string | null
    most_common: number
    condition_type: number
    state_id: number | null
    city_id: number | null
  }[]
}

export type QuerySingleConditionDetail = {
  id: number
  name: string
  description: string
  frontend_enable: string
  image: string
  slug: string
  keyword: string
  title: string
  meta_description: string
  most_common: number
  condition_type: number
  state_id: string
  city_id: string | null
  created_at: string | null
  updated_at: string
}

export type QueryBanner = {
  id: number
  baner_name: string
  website_url: string
  baner_image: string
  status: number
  priority: number
  created_at: string
  updated_at: string
}

export type QueryConditionDetailPageData = ApiResponse & {
  data: {
    dataValues: QuerySingleConditionDetail
    _previousDataValues: QuerySingleConditionDetail
    uniqno: number
    _options: {
      isNewRecord: boolean
      _schema: string
      _schemaDelimiter: string
      raw: boolean
      attributes: string[]
    }
    isNewRecord: boolean
  }
}

export type QueryFilterCategories = ApiResponse & {
  data: QueryCondition[]
}

export type QuerySingleProfileData = NullableProperties<{
  profileId: number
  userId: number
  title: string
  access_token: string
  uhid: string
  firstname: string
  lastname: string
  email: string
  dob: string
  age: string
  gender: string
  mobilenumber: string
  relationship: string
  address: string
  defaultUser: string
  alternatemobile: string
}>

export type QueryAllProfilesData = ApiResponse & {
  data: {
    count: number
    rows: QuerySingleProfileData[]
  }
}
export type QueryProfileData = ApiResponse & {
  data: QuerySingleProfileData
}

export type QueryCenterData = {
  id: number
  centre_type: string
  centre_code: string
  centre_name: string
  mobile_no: number
  business_zone: string
  state_id: number
  state: string
  city_id: number
  city: string
  zone: string
  locality: string
  isNabl: string
  isCap: string
  address: string
  latitude: string
  longitude: string
  slug: string
  meta_title: string | null
  meta_keyword: string | null
  meta_description: string | null
  iframe_url: string
  created_at: string
  updated_at: string
  added_in_xml: string
}

export type QueryAllCentersData = ApiResponse & {
  data: {
    count: number
    rows: QueryCenterData[]
  }
}

export type QueryAllCartItems = ApiResponse & {
  data: QueryItem[]
}

export type QueryAllConditionsDataById = ApiResponse & {
  data: {
    dataValues: QuerySingleConditionDetail
  }
}

export type QuerySingleCareerData = {
  id: number
  job_title: string
  qualification: string
  description: string
  experience: string
  state: string
  city: string
  location: string
  valid_date: string
  created_at: string
  updated_at: string
}
export type QueryCareerCardData = ApiResponse & {
  data: {
    count: number
    rows: QuerySingleCareerData[]
  }
}
export type QueryAllTestsByOrgans = ApiResponse & {
  data: QueryAllConditions[]
}

export type QuerySingleCenterData = {
  id: number
  centre_type: string
  centre_code: string
  centre_name: string
  mobile_no: number
  business_zone: string
  state_id: number
  state: string
  city_id: number
  city: string
  zone: string
  locality: string
  isNabl: string
  isCap: string
  address: string
  latitude: number | null
  longitude: number | null
  slug: string
  meta_title: string | null
  meta_keyword: string | null
  meta_description: string | null
  iframe_url: string | null
  created_at: string
  updated_at: string
  added_in_xml: string
  name: string
  description: string
  rating: string
  centreId: number
}

export type QuerySingleCenterDetail = ApiResponse & {
  data: {
    count: number
    rows: QuerySingleCenterData[]
  }
}

export type QueryUhidProfileData = {
  firstname: string
  lastname: string
  email: string
  dob: string
  age: string
  gender: string
  relationship: string
  address: string
  mobilenumber: string
}

export type QueryUploadPrescription = ApiResponse & {
  data: {
    id: number
    name: string
    mobile_number: string
    updated_at: string
    created_at: string
  }
}

export type QuerySingleAddress = {
  address_id: number
  profileId: number
  access_token: string
  uhid: string | null
  firstname: string | null
  lastname: string | null
  mobile: string
  state: string
  country: string
  city: string
  pincode: string
  address: string
  type: string
  countryName: string
  stateName: string
  cityName: string
  areaId: number
  areaName: string
  name: string | null
  age: number | null
  gender: string | null
  dateofbirth: string | null
  defaultAddress: string
  lat: number | null
  lng: number | null
  street: string | null
  landmark: string | null
  existance: string | null
}

export type QueryAllAddress = ApiResponse & {
  count: number
  rows: QuerySingleAddress[]
}

export type QuerySlot = {
  slotId: number
  slotTime: string
  slotDate: string
  bookingStatus: number
  phleboId: number
}

export type QuerySlotsResponse = ApiResponse & {
  data: {
    status: string
    message: string
    responseCode: number
    morning: QuerySlot[]
    noon: QuerySlot[]
    evening: QuerySlot[]
    multiSlots: null
  }
}

export type QueryCheckServiceability = ApiResponse & {
  data: {
    status: string
    message: string
    responseCode: number
    cityId: number
    isServiceable: boolean
    stateId: number
  }
}

export type QueryRescheduleHomeCollectionData = {
  statusCode: number
  message: string
  data: string
}

export type QueryLoginResponse = ApiResponse & {
  data: {
    profileId: number
    userExist: boolean
    mobileNumber: string
  }
}

export type QueryGetAllSlotsData = {
  lat: string
  lng: string
  date: string
  minMaxRadius: string
  noOfSlots: string
}

type QueryHomeCollectionTestData = {
  DiscAmt: number
  itemid: number
  ItemName: string
  Itemtype: string
  NetAmt: string
  PaidAmt: string
  Rate: number
  SubCategoryID: number
  TestCode: string
  Coupon_DiscAmt_247: string
  GroupPlan_DiscAmt_247: string
  GroupPlan_247: string
}

export type QuerySingleHomeCollectionBookingData = {
  Patient_ID: string
  Title: string
  PName: string
  Gender: string
  DOB: string
  Mobile: string
  Alternatemobileno: string
  Email: string
  Pincode: number
  House_No: string
  Landmark: string
  Appdatetime: string
  Client: string
  Paymentmode: string
  Latitude: string
  Longitude: string
  ReferedDoctor: string
  DoctorID: number
  TestDetail: QueryHomeCollectionTestData[]
  IsPaid: number
  CouponCode_247: string
  Iscorporate: number
  IsCircle: string
  PrebookingID_Digital: string
  LocalityID_Serviceable: number
  SubOrderID: string
}

export type QueryMultipleHomeCollectionBookingData = {
  HomeCollectionData: QuerySingleHomeCollectionBookingData[]
  HomeCollectionChargeData: [
    {
      Amount: number
      DiscAmt: number
      NetAmount: number
      ItemID: number
      ItemName: string
      Coupon_DiscAmt_247: number
      GroupPlan_DiscAmt_247: number
      GroupPlan_247: string
    },
  ]
}

export type QueryItDoseTokenResponse = {
  statusCode: number
  message: string
  data: [
    {
      Token: string
      TokenExpiry: string
    },
  ]
}
export type QueryReportTokenResponse = {
  statusCode: string
  message: string
  data: [
    {
      Token: string
      TokenExpiry: string
    },
  ]
}

export type QueryGetHomeCollectionData = {
  status: string
  message: string
  data: [
    {
      ItemID: string
      Amount: string
      Name: string
      TestCode: string
    },
  ]
}

export type QueryBannerData = ApiResponse & {
  data: {
    count: number
    rows: QueryBanner[]
  }
}

export type QueryRescheduleFormData = {
  PrebookingID: string
  Client: string
  NewAppDate: string
  PrebookingID_Digital: string
}

type QueryCancelItemDetail = {
  ItemID: string
  ItemCode: string
  ItemName: string
  Rate: number
  DiscAmt: number
  NetAmt: number
}

type UpdatedPrimaryPreBookingDetails = {
  primaryPreBookingID: string
  dependentPreBookingIDs: string[]
  ItemDetail: QueryCancelItemDetail[]
}

export type PrebookingCancellationResponse = {
  statusCode: number
  message: string
  data: string
  isPrimaryPreBooking: boolean
  updatedPrimaryPreBookingDetails: UpdatedPrimaryPreBookingDetails
}

export type QueryCancelBookingFormData = {
  prebookingID: string
  client: string
  cancelRemarks: string
  cancelAllUhids: string
  preBookingIdDigital?: string
}

export type QuerySendOtpReportResponse = {
  statusCode: number
  message: string
}

export type QueryVerifyOtpResponse = {
  statusCode: number
  message: string
  data: {
    url: string
  }
}

export type QueryDownloadReportResponse = {
  statusCode: number
  message: string
  data: {
    status: boolean
    message: string
  }
}

export type CustomerData = {
  Name: string
  MobileNumber: string
  Email: string
  Gender: string
  EmailCommunication: boolean
  FamilyId: string
  FamilyRelation: string
  Age: number
  SourceBusinessUnit: string
  SourceStore: string
  Tier: string
  TierChangeDate: string
  EarnedCredits: number
  AvailableCredits: number
  BurnedCredits: number
  ExpiredCredits: number
  BlockedCredits: number
  MigratedCredits: number
  Address: string
  City: string
  Region: string
  State: string
  Country: string
  Pincode: string
  CanBurnCredits: boolean
  TotalAvailableHCs: number
  PromotionalHCs: number
  TotalSpent: number
  TierBenefits: string
  Individuals: string
  CustomerStatus: string
  LCIN: string
  DOB: string
  SMSCommunication: boolean
}

export type QueryHcCreditPointsData = {
  Success: boolean
  CustomerData: NullableProperties<CustomerData>
}

export type QueryHcCreditResponse = ApiResponse & {
  data: QueryHcCreditPointsData
}

type TestDetailEntity = {
  id: number
  order_patient_id: number
  item_id: number
  itemDetails: QueryItem
}

type OrderPatient = {
  id: number
  order_id: number
  patient_id: number
  prebooking_id: number
  appointment_time: string
  is_canceled: boolean
  uhidProfile: QuerySingleProfileData
  testDetailEntity: TestDetailEntity[]
}

export type QueryMyOrdersHistoryData = {
  statusCode: number
  message: string
  data: {
    count: number
    rows: QuerySingleHistoryOrderData[]
  }
}
export type QuerySingleTestHistory = {
  id: number
  disc_amt: string
  itemid: number
  item_name: string
  item_type: string
  net_amt: string
  paid_amt: string
  rate: string
  subcategory_id: number
  test_code: string
  coupon_disc_amt_247: string
  group_plan_disc_amt_247: string
  group_plan_247: string
  order_id: number
}

export type QuerySingleHistoryOrderData = {
  id: number
  address_id: number
  payment_status: string
  mobile_number: string
  created_at: string | null
  updated_at: string | null
  unique_id: string
  coupon_code?: string
  hc_redeem: number
  home_collection_charges: number
  total_amount: string
  payment_type: string
  prebooking_id_digital: string
  address: QuerySingleAddress
  orderPatients: OrderPatient[]
}

export type QueryHcSendOtpData = ApiResponse & {
  data: {
    Message: string
    Success: boolean
    AvailablePoints: number
    BalancePoints: number
    RedeemedPoints: number
    PointsValue: number
    RequestNumber: string
  }
}

export type QueryHcOtpVerificationResponse = ApiResponse & {
  data: {
    Message: string
    Success: boolean
    AvailablePoints: number
    BalancePoints: number
    RedeemedPoints: number
    PointsValue: number
    RequestNumber: string
  }
}

export type QueryTestParametersObj = {
  ParameterID: string
  ParameterName: string
  ResultRequired: string
  DuplicateAllowed: string
  IsHeader: string
  PrintOrder: string
  ISBold: string
  ISCommentField: string
}

export type QueryItemInclusionData = ApiResponse & {
  data: {
    ItemType: string
    itemid: string
    TestName: string
    SampleRemarks: string
    SampleTypeName: string
    FromAge: string
    ToAge: string
    Gender: string
    Requiredfields: string
    TestParameters: string[]
    RequiredAttachment: string
    PackageID: string
    TestParametersObj: QueryTestParametersObj[]
  }[]
}

export type QueryUploadFile = ApiResponse & {
  data: {
    uploadedFiles: {
      fileUrl: string
      type: string
    }[]
  }
}

export type QueryBookHomeCollectionData = ApiResponse & {
  data: {
    id: number
    address_id: number
    payment_status: string
    mobile_number: string
    created_at: string
    updated_at: string
    hc_redeem: number
    home_collection_charges: number
    total_amount: string
    payment_type: string
    form: string
  }
}
export type QueryCouponDiscountItemWithMappingData = {
  itemid: string
  itemName: string
  rate: number
  discamount: number
}[]

export type QueryCouponValidateResponseData = {
  status: boolean
  message: string
  uniqueid: string
  couponcode: string
  data: {
    tests: QueryCouponDiscountItemWithMappingData
  }
}

export type QueryCouponValidateData = {
  Coupons: [
    {
      CouponCode: string
    },
  ]
  MobileNo: string
  patientInfo: {
    patientId: number
    testDetails: {
      itemId: number
      cityId: number
    }[]
  }[]
}

export type QueryGetGlobalDiscount = ApiResponse & {
  data: {
    discount: number
  }[]
}
