import axios from 'axios'
import { dataClient } from '@libs/data-client'
import {
  SearchParamsData,
  EnquireFormData,
  FindNearestCentreSearchParams,
} from '@models'
import { getUserFromCookies } from '@utils/auth'
import { ForceAny } from '@utils/typescript'
import {
  QueryAboutUsData,
  QueryAllCentersData,
  QueryAllConditionsData,
  QueryAllItemsData,
  QueryBlogsByCategoriesData,
  QueryBlogsCategoriesData,
  QueryBlogsData,
  QueryConditionDetailPageData,
  QueryDepartmentsData,
  QueryFaqsData,
  QueryFindAConditionData,
  QueryFilterCategories,
  QuerySingleBlogPageData,
  QueryProfileData,
  QuerySingleItemData,
  QuerySingleTestData,
  QueryTestData,
  QueryTestimonialCardsData,
  QueryAllConditionsDataById,
  QueryCareerCardData,
  QueryAllProfilesData,
  QueryAllTestsByOrgans,
  QueryMostBookedItemsData,
  QueryAllCities,
  QueryAllStates,
  QuerySingleCenterDetail,
  QueryAllCartItems,
  QueryUhidProfileData,
  QueryAllAddress,
  QuerySlotsResponse,
  QueryGetHomeCollectionData,
  QueryBannerData,
  QueryMyOrdersHistoryData,
  QuerySendOtpReportResponse,
  QueryHcCreditResponse,
  QueryVerifyOtpResponse,
  QueryDownloadReportResponse,
  QueryItemInclusionData,
  QueryUploadFile,
  QueryGetGlobalDiscount,
  QueryGetAllSlotsData,
} from 'src/models/query.models'
import { ROUTES } from '../routes'

export const getAllItems = async (
  {
    condition,
    category,
    limit,
    offset,
    search,
    conditionName,
  }: SearchParamsData,
  item_type: string,
  cityId?: string
) => {
  const allTestsEndPoint = `${ROUTES.AllItems}`
  const allTests = await dataClient.get<QueryAllItemsData>(allTestsEndPoint, {
    params: {
      type: item_type,
      popularCategoryId: condition,
      category,
      limit,
      offset,
      search,
      cityId,
      conditionName,
    },
  })
  return allTests.data
}

export const getMostBookedItems = async (
  { search, limit, offset, cityId }: SearchParamsData,
  item_type: string
) => {
  const allItemsEndPoint = `top-items`
  const allItems = await dataClient.get<QueryMostBookedItemsData>(
    allItemsEndPoint,
    {
      params: {
        type: item_type,
        limit,
        offset,
        search,
        cityId,
      },
    }
  )
  return allItems.data
}

export const getAllCities = async () => {
  const headerLocationEndPoint = ROUTES.AllCities
  const allCities = await dataClient.get<QueryAllCities>(
    headerLocationEndPoint,
    {
      params: {
        limit: 1000,
      },
    }
  )
  return allCities.data
}

export const getAllStates = async () => {
  const headerLocationEndPoint = ROUTES.AllStates
  const allStates = await dataClient.get<QueryAllStates>(
    headerLocationEndPoint,
    {
      params: {
        limit: 100,
      },
    }
  )
  return allStates.data
}

export const getAllCategories = async () => {
  const headerLocationEndPoint = ROUTES.AllCategories
  const allLocations = await dataClient.get<QueryAllConditionsData>(
    headerLocationEndPoint
  )
  return allLocations.data
}

export const getItemBySlug = async (slug: string, cityId: string) => {
  const endPoint = `${ROUTES.AllItems}`
  const itemsById = await dataClient.get<QuerySingleItemData>(endPoint, {
    params: {
      slug,
      cityId,
    },
  })
  return itemsById.data
}

export const getItemById = async (itemId: string) => {
  const { cityId } = await getUserFromCookies()

  const endPoint = `items`
  const itemsById = await dataClient.get<QuerySingleItemData>(endPoint, {
    params: { cityId, itemId },
  })
  return itemsById.data
}

export const getFaqData = async () => {
  const endPoint = ROUTES.Faqs
  const faqs = await dataClient.get<QueryFaqsData>(endPoint)
  return faqs.data
}

export const getDepartmentPagesData = async (slug: string) => {
  const endPoint = ROUTES.Department
  const department = await dataClient.get<QueryDepartmentsData>(endPoint, {
    params: {
      slug,
    },
  })
  return department.data
}

export const getAboutUsPagesData = async (slug: string) => {
  const endPoint = `articles/`
  const department = await dataClient.get<QueryAboutUsData>(endPoint, {
    params: {
      slug,
    },
  })
  return department.data
}

export const getBlogsData = async ({
  category,
  limit,
  offset,
}: SearchParamsData) => {
  const endPoint = `blogs`
  const blogs = await dataClient.get<QueryBlogsData>(endPoint, {
    params: {
      category,
      limit,
      offset,
    },
  })
  return blogs.data
}

export const getBlogsSinglePagesData = async (slug: number) => {
  const endPoint = `blogs/${slug}`
  const blogsPage = await dataClient.get<QuerySingleBlogPageData>(endPoint)
  return blogsPage.data
}

export const getBlogsCategory = async () => {
  const endPoint = `blogs/categories`
  const categories = await dataClient.get<QueryBlogsCategoriesData>(endPoint)
  return categories.data
}

export const getBlogsByCategory = async (id: number) => {
  const endPoint = `blogs?category=${id}`
  const categories = await dataClient.get<QueryBlogsByCategoriesData>(endPoint)
  return categories.data
}

export const getFindTestData = async () => {
  const endPoint = `tests/`
  const tests = await dataClient.get<QueryTestData>(endPoint)
  return tests.data
}

export const getFindSingleTestData = async (slug: number) => {
  const endPoint = `tests/${slug}`
  const tests = await dataClient.get<QuerySingleTestData>(endPoint)
  return tests.data
}

export const getFindAConditionData = async () => {
  const endPoint = ROUTES.FindACondition
  const conditions = await dataClient.get<QueryFindAConditionData>(endPoint)
  return conditions.data
}

export const getConditionDetailData = async (
  slug: number
): Promise<QueryConditionDetailPageData> => {
  const endPoint = `master/condition/${slug}`
  const conditions =
    await dataClient.get<QueryConditionDetailPageData>(endPoint)
  return conditions.data
}

export const getFilterCategoriesData = async () => {
  const endPoint = `master/category`
  const tests = await dataClient.get<QueryFilterCategories>(endPoint)
  return tests.data
}

export const getTestimonialsData = async () => {
  const endPoint = ROUTES.Testimonials
  const department = await dataClient.get<QueryTestimonialCardsData>(endPoint)
  return department.data
}

export const submitEnquireData = async (formData: EnquireFormData) => {
  const endPoint = ROUTES.Enquire
  const department = await dataClient.post(endPoint, formData)
  return department.data
}

export const getProfileById = async (id: string) => {
  const endPoint = `${ROUTES.Profile}/${id}`
  const profileData = await dataClient.get<QueryProfileData>(endPoint)
  return profileData.data
}
export const getNearestCenters = async (
  searchParamsData: FindNearestCentreSearchParams
) => {
  const endPoint = `${ROUTES.NearestCentre}`
  const profileData = await dataClient.get<QueryAllCentersData>(endPoint, {
    params: searchParamsData,
  })
  return profileData.data
}

export const getLifeStylePackagesCardsData = async (
  conditionId: string,
  item_type?: string
): Promise<QueryAllItemsData> => {
  const endPoint = `items`
  const response = await dataClient.get<QueryAllItemsData>(endPoint, {
    params: {
      type: item_type,
      popularCategoryId: conditionId,
    },
  })
  return response.data
}

export const getLifeStylePackagesPageData = async (
  itemId: string
): Promise<QueryAllConditionsDataById> => {
  const endPoint = `master/category/${itemId}`
  const response = await dataClient.get<QueryAllConditionsDataById>(endPoint)
  return response.data
}

export const getCareerCardData = async (): Promise<QueryCareerCardData> => {
  const endPoint = 'career/'
  const responseData = await dataClient.get<QueryCareerCardData>(endPoint)
  return responseData.data
}

export const addUhidProfile = async (formData: QueryUhidProfileData) => {
  const { phoneNumber } = await getUserFromCookies()

  const endPoint = ROUTES.Profile
  const uhidProfileData = await dataClient.post(endPoint, {
    ...formData,
    mobilenumber: phoneNumber,
  })
  return uhidProfileData.data
}

export const updateUhidProfile = async (
  formData: QueryUhidProfileData,
  userId: string
) => {
  const endPoint = `${ROUTES.Profile}/${userId}`
  const uhidProfileData = await dataClient.put(endPoint, formData)
  return uhidProfileData.data
}

export const getUhidProfilesByPhoneNumber = async (
  phoneNumber: string
): Promise<QueryAllProfilesData> => {
  const endPoint = `${ROUTES.Profile}`
  const response = await dataClient.get<QueryAllProfilesData>(endPoint, {
    params: {
      mobileNumber: phoneNumber,
    },
  })
  return response.data
}

export const getAllConditionByCityData = async (cityId: string) => {
  const endPoint = `master/condition`
  const conditions = await dataClient.get<QueryAllTestsByOrgans>(endPoint, {
    params: {
      cityId,
    },
  })
  return conditions.data
}

export const getAllItemsByCondition = async (
  { condition, limit, offset, search, cityId, conditionName }: SearchParamsData,
  item_type: string
) => {
  const allTestsEndPoint = `items`
  const allTests = await dataClient.get<QueryAllItemsData>(allTestsEndPoint, {
    params: {
      type: item_type,
      conditionId: condition,
      limit,
      offset,
      search,
      cityId,
      conditionName,
    },
  })
  return allTests.data
}

export async function getFindAllCentres() {
  const endPoint = 'center/'
  const centerData = await dataClient.get<QueryAllCentersData>(endPoint)
  return centerData.data
}

export async function getSingleCenterDetails(slug: string) {
  const endPoint = `center`
  const centerData = await dataClient.get<QuerySingleCenterDetail>(endPoint, {
    params: {
      slug,
    },
  })
  return centerData.data
}

export async function getNearCitiesDetails(city: string) {
  const endPoint = `center`
  const centerData = await dataClient.get<QueryAllCentersData>(endPoint, {
    params: {
      city,
    },
  })
  return centerData.data
}

export async function getAllCartsItem(mobileNumber: string) {
  const centerData = await dataClient.get<QueryAllCartItems>(ROUTES.Cart, {
    params: {
      mobileNumber,
    },
  })
  return centerData.data
}

export const addItemsToCart = async (items: string[]) => {
  const { phoneNumber, cityId } = await getUserFromCookies()
  const itemList = items.map((item) => ({
    item_id: item,
    city_id: parseInt(cityId, 10),
  }))
  const uhidProfileData = await dataClient.post(ROUTES.Cart, {
    // profile_id: parseInt(profileId, 10),
    mobile_number: phoneNumber,
    item_list: itemList,
  })

  return uhidProfileData.data
}

export const removeItemFromCart = async (
  itemId: string,
  cityId: number,
  labId: number
) => {
  const { phoneNumber } = await getUserFromCookies()
  const endPoint = ROUTES.Cart
  const cartData = await dataClient.delete(endPoint, {
    params: {
      itemId,
      cityId,
      mobileNumber: phoneNumber,
      labId,
    },
  })
  return cartData.data
}

export const deleteAddress = async (itemId: string) => {
  const endPoint = `${ROUTES.Address}/${itemId}`
  const addressResponse = await dataClient.delete(endPoint)
  return addressResponse.data
}

export const getPersonalizedPackagesData = async (type: string) => {
  const endPoint = `master/category`
  const tests = await dataClient.get<QueryFilterCategories>(endPoint, {
    params: {
      categoryType: type,
    },
  })
  return tests.data
}

export const getAllAddressByPhoneNumber = async (phoneNumber: string) => {
  const endPoint = ROUTES.Address
  const addresses = await dataClient.get<QueryAllAddress>(endPoint, {
    params: {
      mobileNumber: phoneNumber,
    },
  })
  return addresses.data
}

export const getAllItemsData = async (params: SearchParamsData) => {
  const allTestsEndPoint = `${ROUTES.AllItems}`
  const allTests = await dataClient.get<QueryAllItemsData>(allTestsEndPoint, {
    params,
  })
  return allTests.data
}

export const getAllSlotsWrtDate = async (data: QueryGetAllSlotsData) => {
  const endPoint = ROUTES.Slots
  const uhidProfileData = await dataClient.post<
    QueryGetAllSlotsData,
    QuerySlotsResponse
  >(endPoint, data)
  return uhidProfileData.data
}

export async function deleteAddressById(id: string): Promise<void> {
  const endPoint = `${ROUTES.Address}/${id}`
  try {
    await dataClient.delete(endPoint)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiMessage =
        error.response?.data?.message ||
        'An error occurred while deleting the address'
      throw new Error(apiMessage)
    }

    throw new Error('An unexpected error occurred')
  }
}

export const getHomeCollectionCharges = async (
  data: ForceAny
): Promise<QueryGetHomeCollectionData> => {
  const endPoint = ROUTES.GetHomeCollectionCharges
  const response = await dataClient.post(endPoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 10000,
  })
  return response.data as QueryGetHomeCollectionData
}

export async function getAllBanners() {
  const endPoint = ROUTES.Banner
  const response = await dataClient.get<QueryBannerData>(endPoint)
  return response.data
}

export const getHcCreditPoints = async (
  mobileNumber: string
): Promise<QueryHcCreditResponse> => {
  const endPoint = ROUTES.GetHCCreditPoints
  const response = await dataClient.get(endPoint, {
    params: {
      mobileNumber,
    },
    headers: {
      'x-apollo247-apigee-api-key':
        process.env.NEXT_PUBLIC_APOLLO247_HCCREDIT_API_KEY,
      APIKey: process.env.NEXT_PUBLIC_HC_CREDIT_API_KEY,
      AccessToken: process.env.NEXT_PUBLIC_HC_CREDIT_ACCESS_TOKEN,
    },
  })
  return response.data as QueryHcCreditResponse
}

export const getMyOrdersHistory = async (mobileNumber: string) => {
  const allCities = await dataClient.get<QueryMyOrdersHistoryData>(
    ROUTES.MyOrdersHistory,
    {
      params: {
        mobileNumber,
      },
    }
  )
  return allCities.data
}

// export const getReportGenerationToken =
//   async (): Promise<QueryItDoseTokenResponse> => {
//     const endPoint = ROUTES.GenerateReportToken
//     const data = {
//       userName: process.env.NEXT_PUBLIC_REPORTS_USER_NAME,
//       password: process.env.NEXT_PUBLIC_REPORTS_PASSWORD,
//       client: process.env.NEXT_PUBLIC_REPORT_CLIENT,
//     }
//     const responseData = await axios({
//       method: 'post',
//       url: endPoint,
//       data,
//       headers: { 'Content-Type': 'multipart/form-data' },
//     })
//     return responseData.data
//   }

export const sendReportOtp = async (
  mobileNumber: string
): Promise<QuerySendOtpReportResponse> => {
  const data = new FormData()
  data.append('mobileNumber', mobileNumber)
  const endPoint = ROUTES.SendOtpForReport
  const response = await dataClient.post(endPoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data as QuerySendOtpReportResponse
}

export const verifyReportOtp = async (
  mobileNumber: string,
  otp: string
): Promise<QueryVerifyOtpResponse> => {
  const data = new FormData()
  data.append('mobileNumber', mobileNumber)
  data.append('otp', otp)
  const endPoint = ROUTES.VerifyOtpForReport
  const response = await dataClient.post(endPoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data as QueryVerifyOtpResponse
}

export const downloadReport = async (
  userName: string,
  password: string
): Promise<QueryDownloadReportResponse> => {
  const data = new FormData()
  data.append('userName', userName)
  data.append('password', password)
  const endPoint = ROUTES.DownloadReport
  const response = await dataClient.post(endPoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data as QueryDownloadReportResponse
}

export const getItemInclusions = async (ItemIDList: number) => {
  const endPoint = `dynamic-roaster/item-inclusion`
  const response = await dataClient.get<QueryItemInclusionData>(endPoint, {
    params: { ItemIDList },
  })
  return response.data
}

export const uploadPrescriptionFile = async (
  file: File
): Promise<QueryUploadFile> => {
  const data = new FormData()
  data.append('files', file)
  const response = await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_API_HEADER}v1/${ROUTES.UploadFile}`,
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

export const getGlobalDiscount = async () => {
  const endPoint = ROUTES.GlobalDiscount
  const response = await dataClient.get<QueryGetGlobalDiscount>(endPoint)
  return response.data
}
