import { InputData } from '@models'
import {
  PackageInfoCardData,
  SelectionCardData,
  SidePanelMenuData,
} from '@components/common'
import {
  QueryCities,
  QueryCondition,
  QueryItem,
  QueryMostBookedData,
  QueryStates,
} from 'src/models/query.models'

export const extractCityInfoFromQuery = (
  cities: QueryCities[]
): InputData[] => {
  return cities.map((item) => ({
    label: item.City,
    value: item.CityID.toString(),
  }))
}

export const extractStatesInfoFromQuery = (
  states: QueryStates[]
): InputData[] => {
  return states.map((item) => ({
    label: item.state,
    value: item.id.toString(),
  }))
}

export const extractTestsFromQueryItem = (
  queryTests: QueryItem[],
  cityName: string
): PackageInfoCardData[] => {
  return queryTests
    .map((test) => ({
      labId: test.lab_id,
      heading: test.itemname,
      tag: 'Home Collection Available',
      price: test.rate,
      discount: test.discount,
      delivery: test.report_delivery || 'Speak to our customer care',
      id: test.id,
      itemId: test.itemid,
      button2: {
        label: 'View Details',
        link:
          test.item_type === 'Test'
            ? `/test-details/${cityName}/${test.slug}`
            : `/package-details/${cityName}/${test.slug}`,
      },
      icon: {
        src:
          test.item_type === 'Test'
            ? '/images/defaultTestIcon.png'
            : '/images/defaultPackageIcon.png',
        alt: 'icon',
      },
      button1: {
        label: 'Add to Cart',
      },
      cityId: test.city_id,
    }))
    .filter((item) => item.price !== 0)
}

export const extractPackagesFromQueryItem = (
  queryTests: QueryItem[],
  cityName: string
): PackageInfoCardData[] => {
  return queryTests
    .map((test) => ({
      labId: test.lab_id,
      heading: test.itemname,
      tag: 'Home Collection Available',
      price: test.rate,
      discount: test.discount,
      delivery: test.report_delivery || 'Speak to our customer care',
      id: test.id,
      itemId: test.itemid,
      button2: {
        label: 'View Details',
        link:
          test.item_type === 'Test'
            ? `/test-details/${cityName}/${test.slug}`
            : `/package-details/${cityName}/${test.slug}`,
      },
      icon: {
        src:
          test.item_type === 'Test'
            ? '/images/defaultTestIcon.png'
            : '/images/defaultPackageIcon.png',
        alt: 'icon',
      },
      button1: {
        label: 'Add to Cart',
      },
      cityId: test.city_id,
    }))
    .filter((item) => item.price !== 0)
}

export const extractPackagesFromMostBookedItems = (
  queryTests: QueryMostBookedData[],
  cityName: string
): PackageInfoCardData[] => {
  return queryTests
    .map((test) => ({
      labId: test.lab_id,
      heading: test.itemname,
      tag: 'Home Collection Available',
      price: test.rate,
      discount: test.discount,
      delivery: test.report_delivery || 'Speak to our customer care',
      id: test.id,
      itemId: test.itemid,
      button2: {
        label: 'View Details',
        link:
          test.item_type === 'Test'
            ? `/test-details/${cityName}/${test.slug}`
            : `/package-details/${cityName}/${test.slug}`,
      },
      icon: {
        src:
          test.item_type === 'Test'
            ? '/images/defaultTestIcon.png'
            : '/images/defaultPackageIcon.png',
        alt: 'icon',
      },
      button1: {
        label: 'Add to Cart',
      },
      cityId: test.city_id,
    }))
    .filter((item) => item.price !== 0)
}

export const extractSelectionFromQueryCategory = (
  queryCondition: QueryCondition[]
): SelectionCardData[] => {
  return queryCondition.map((test) => ({
    image: {
      src: `${process.env.NEXT_PUBLIC_CATEGORIES_IMAGES_HOST}${test.image}`,
      alt: 'Placeholder image',
    },
    label: test.name,
    link: `/lifestyle-packages/${test.slug}-${test.id}`,
  }))
}

export function getFilterCategories(data: QueryCondition[]): SidePanelMenuData {
  const filters: InputData[] = data.map((item) => {
    return {
      label: item.name,
      value: `${item.slug}-${item.id}`,
    }
  })

  return {
    heading: 'Disease Type',
    options: filters,
  }
}

export const extractMensHealthFromQueryCategory = (
  queryCondition: QueryCondition[]
): SelectionCardData[] => {
  return queryCondition.map((test) => ({
    image: {
      src: `${process.env.NEXT_PUBLIC_CATEGORIES_IMAGES_HOST}${test.image}`,
      alt: 'Placeholder image',
    },
    label: test.name,
    link: `/mens-health/${test.slug}-${test.id}`,
  }))
}

export const extractWomenHealthPackageFromQueryCategory = (
  queryCondition: QueryCondition[]
): SelectionCardData[] => {
  return queryCondition.map((test) => ({
    image: {
      src: `${process.env.NEXT_PUBLIC_CATEGORIES_IMAGES_HOST}${test.image}`,
      alt: 'Placeholder image',
    },
    label: test.name,
    link: `/womens-health/${test.slug}-${test.id}`,
  }))
}

export const extractWomenPackageFromQueryCategory = (
  queryCondition: QueryCondition[]
): SelectionCardData[] => {
  return queryCondition.map((test) => ({
    image: {
      src: `${process.env.NEXT_PUBLIC_CATEGORIES_IMAGES_HOST}${test.image}`,
      alt: 'Placeholder image',
    },
    label: test.name,
    link: `/womens-health-packages/${test.slug}-${test.id}`,
  }))
}
