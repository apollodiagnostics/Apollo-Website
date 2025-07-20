import { LocateNearCentersData } from '@components/entities/LocateNearCenters'
import {
  CentreForYouProps,
  PageBannerData,
} from '@components/feature/FindNearestCentre'

export type NearestCentre = {
  banner: PageBannerData
  locateNearCentres: LocateNearCentersData
  centres: CentreForYouProps
}
