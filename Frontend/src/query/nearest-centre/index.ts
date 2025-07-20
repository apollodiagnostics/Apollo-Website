import { FindNearestCentreSearchParams } from '@models'
import { NearestCentreCardData } from '@components/common/Cards/NearestCentreCard'
import {
  getAllCities,
  getAllStates,
  getNearestCenters,
} from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import {
  capitalizeWords,
  convertCentreDataToDetailsFormat,
  extractSlugDataFromString,
} from '@utils/common'
import {
  extractCityInfoFromQuery,
  extractStatesInfoFromQuery,
} from '@utils/query'
import { QueryCenterData } from 'src/models/query.models'
import { NearestCentre } from './nearest-centre.model'

export type { NearestCentre }

const nearestCentre: NearestCentre = {
  banner: {
    label: 'Locate us around you',
    path: 'Home > Find Nearest Centre',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: 'banner',
    },
  },
  centres: {
    heading: 'Apollo Diagnostics Centres Near You',
    results: '',
    totalCenters: 100,
    centres: [],
  },
  locateNearCentres: {
    heading: 'Locate Nearest Centres',
    inputBarProps: {
      name: 'search',
      placeholder: 'Search nearby centres by locality',
    },
    localities: [{ value: 'Asansol', label: 'Asansol' }],
    cities: [],
    states: [],
  },
}
const nearestCentreByCity: NearestCentre = {
  banner: {
    label: 'Find Nearest Centres',
    path: 'Home > Find Nearest Centre',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: 'banner',
    },
  },

  centres: {
    heading: `Apollo Diagnostics Centres`,
    results: '',
    totalCenters: 100,
    centres: [],
  },

  locateNearCentres: {
    heading: 'Locate Nearest Centres',
    inputBarProps: {
      name: 'search',
      placeholder: 'Search nearby centres by locality',
    },
    localities: [{ value: 'Asansol', label: 'Asansol' }],
    cities: [],
    states: [],
  },
}
export function extractNearestCentreData(
  data: QueryCenterData[]
): NearestCentreCardData[] {
  return data.map((centre) => convertCentreDataToDetailsFormat(centre))
}

export const getNearestCentreDetails = async (
  searchParams: FindNearestCentreSearchParams
): Promise<NearestCentre> => {
  nearestCentre.locateNearCentres.cities = extractCityInfoFromQuery(
    (await getAllCities()).data.rows
  )
  nearestCentre.locateNearCentres.states = extractStatesInfoFromQuery(
    (await getAllStates()).data.rows
  )
  const userDetails = await getUserFromCookies()
  const data = await getNearestCenters({
    city: userDetails?.cityId || '9',
    ...searchParams,
  })
  nearestCentre.centres.centres = extractNearestCentreData(data.data.rows)
  nearestCentre.centres.totalCenters = data.data.count
  // nearestCentre.centres.results = `Showing ${data.data.count} results`
  const p = new Promise<NearestCentre>((resolve) => {
    resolve(nearestCentre)
  })
  return p
}

export const getNearestCentreDetailsByCity = async (
  searchParams: FindNearestCentreSearchParams,
  citySlug: string
): Promise<NearestCentre> => {
  const { id: cityId, name: cityName } = extractSlugDataFromString(citySlug)
  const data = await getNearestCenters({
    city: cityId || '9',
    ...searchParams,
  })
  nearestCentreByCity.centres.centres = extractNearestCentreData(data.data.rows)
  nearestCentreByCity.centres.totalCenters = data.data.count
  nearestCentreByCity.centres.heading = `Apollo Diagnostics Centres in ${capitalizeWords(cityName)}`
  const p = new Promise<NearestCentre>((resolve) => {
    resolve(nearestCentreByCity)
  })
  return p
}
