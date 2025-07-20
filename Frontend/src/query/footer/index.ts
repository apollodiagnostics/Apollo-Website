import { citySlugPlaceholder } from '@models'
import { FooterData } from './footer.model'

export type { FooterData }

const footerData: FooterData = {
  backgroundImageSrc: '/images/backGround.webp',
  disclaimer:
    'Copyright © 2024 Apollo Diagnostics (Apollo Health and Lifestyle Limited), All Rights Reserved',
  contactInfo: {
    heading: 'For bulk test bookings, Reach out to us at:',
    email: ['customer.care@apollodiagnostics.in'],
  },
  partners: {
    heading: 'Partner with us',
    description:
      'Partnering with us offers entrepreneurs valuable mentoring, marketing guidance, and administrative support, paving the way for success.',
    button: {
      label: 'Know More',
      link: '/franchise',
    },
  },
  actionLinks: [
    {
      heading: 'QUICK LINKS',
      action: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'FAQ’s',
          link: '/faqs',
        },
        {
          label: 'Blogs',
          link: '/blogs',
        },
        {
          label: 'Testimonials',
          link: '/testimonials',
        },
        {
          label: 'Career',
          link: '/careers',
        },
        {
          label: 'Book Walk-In Slots',
          link: '/book-walk-in-slots',
        },
        {
          label: 'Term & Conditions',
          link: '/terms-and-conditions',
        },
        {
          label: 'Covid-19 RTPCR Disclaimer',
          link: '/covid-19-rt-pcr-disclaimer',
        },
        {
          label: 'Patient Consent',
          link: '/patient-consent',
        },
        {
          label: 'Doctor’s Corner',
          link: '/doctors-corner',
        },
        {
          label: 'Home Sample Collection',
          link: `/for-patients/home-sample-collection/${citySlugPlaceholder}`,
        },
      ],
    },
    {
      heading: 'ABOUT US',
      action: [
        {
          label: 'Apollo Diagnostics',
          link: '/about-us',
        },
        {
          label: 'About AHLL',
          link: '/about-ahll',
        },
        {
          label: 'About Apollo Group',
          link: '/about-apollo-group',
        },
        {
          label: 'Our Chairman’s Profile',
          link: '/our-chairmans-profile',
        },
        {
          label: 'Management Team',
          link: '/management-team',
        },
        {
          label: 'Contact Us',
          link: '/contact-us',
        },
      ],
    },
    {
      heading: 'FOLLOW US',
      action: [
        {
          label: 'Instagram',
          image: {
            src: '/images/instagram.png',
            alt: 'Instagram',
          },
          link: 'https://www.instagram.com/apollodiagnosticofficial',
        },
        {
          label: 'LinkedIn',
          image: {
            src: '/images/linkedin.png',
            alt: 'LinkedIn',
          },
          link: 'https://in.linkedin.com/company/apollo-diagnostics',
        },
        {
          label: 'Facebook',
          image: {
            src: '/images/fb.png',
            alt: 'Facebook',
          },
          link: 'https://www.facebook.com/apollodiagnosticsindia/',
        },
        {
          label: 'X (Twitter)',
          image: {
            src: '/images/twitter.png',
            alt: 'Twitter',
          },
          link: 'https://twitter.com/x/migrate?tok=7b2265223a222f61706f6c6c6f64696167222c2274223a313732323030303130327d0e62d711ed58c7d2521cbe3540dbf03c',
        },
        {
          label: 'Youtube',
          image: {
            src: '/images/youtube.png',
            alt: 'Youtube',
          },
          link: 'https://www.youtube.com/@ApolloDiagnosticsIndia',
        },
      ],
    },
  ],
}

export const getFooter = async (): Promise<FooterData> => {
  const p = new Promise<FooterData>((resolve) => {
    resolve(footerData)
  })
  return p
}
