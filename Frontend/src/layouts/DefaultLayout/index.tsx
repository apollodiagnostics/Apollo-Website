import { Box } from '@mui/material'
import {
  SnackbarProvider,
  DrawerStateProvider,
  LoginStateProvider,
  GlobalDiscountProvider,
  CheckoutStateProvider,
  CheckGeoLocationProvider,
} from '@providers'
import { FooterData, getFooter } from '@query/footer'
import { getHeader } from '@query/header'
import { getQuickLinks } from '@query/quick-links'
import {
  Cart,
  Footer,
  Header,
  Drawer,
  LoginDrawer,
  OtpDrawer,
  PatientSelection,
  QuickLinks,
  ProfileAuthValidator,
} from '@components/entities'
import { PhoneTabs } from '@components/entities/Tabs'
import { CustomFab } from '@components/entities/fab'
import { getGlobalDiscount } from '@utils/api/dashboard'
import { getStyles } from '@utils/styles'
import { CartProvider } from 'src/providers/cart-management'
import defaultStyles from './styles'

type Props = {
  children: React.ReactNode
}

export async function DefaultLayout({ children }: Props) {
  const quickLinks = await getQuickLinks()
  const [headerData, footerData, globalDiscount] = await Promise.all([
    getHeader(),
    getFooter(),
    getGlobalDiscount(),
  ])
  const styles = getStyles(defaultStyles)

  return (
    <LoginStateProvider>
      <CheckoutStateProvider>
        <SnackbarProvider>
          <DrawerStateProvider>
            <GlobalDiscountProvider
              globalDiscount={globalDiscount.data[0]?.discount}
            >
              <CartProvider>
                <Header {...headerData} />
                <CheckGeoLocationProvider>
                  <Box {...styles('wrapper')}>{children}</Box>
                </CheckGeoLocationProvider>
                <Drawer>
                  <Cart />
                  <LoginDrawer />
                  <OtpDrawer />
                  <PatientSelection />
                </Drawer>
                <ProfileAuthValidator />
                <QuickLinks {...quickLinks} />
                <Footer {...(footerData as FooterData)} />
                <CustomFab />
                <PhoneTabs />
              </CartProvider>
            </GlobalDiscountProvider>
          </DrawerStateProvider>
        </SnackbarProvider>
      </CheckoutStateProvider>
    </LoginStateProvider>
  )
}
