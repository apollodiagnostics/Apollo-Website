import { TeamListSectionData } from '@components/feature/ManagementTeam'
import { getAboutUsPagesData } from '@utils/api/dashboard'
import {
  QueryAboutUsCards,
  QueryAboutUsSinglePageData,
} from 'src/models/query.models'
import { ManagementTeamData } from './management-team.model'

const managementTeamData: ManagementTeamData = {
  metaTitle: 'metatile',
  metaDescription: 'description',
  banner: {
    label: 'Management Team',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Management Team  ',
  },
  overviewSection: {
    images: [
      {
        src: '/images/managementTeam/managementImage2.png',
        alt: 'overview',
      },
      { src: '/images/managementTeam/managementImage3.png', alt: 'overview' },
      { src: '/images/managementTeam/managementImage1.png', alt: 'overview' },
    ],
  },
  featureSection: {
    heading: 'Lab Tests & Health Checkups',
    featureCards: [
      {
        icon: {
          src: '/images/feature2.png',
          alt: '',
        },
        heading: 'Have a Prescription? ',
        description: 'Upload and book your tests',
        link: '',
      },
      {
        icon: {
          src: '/images/feature3.png',
          alt: '',
        },
        heading: 'Call us to book your tests',
        description: 'Our team of experts will guide you.',
        link: '',
      },
      {
        icon: {
          src: '/images/feature1.png',
          alt: '',
        },
        heading: 'WhatsApp Booking',
        description: 'Text us on WhatsApp to book a test',
        link: '',
      },
    ],
  },
  teamSection: {
    team: [
      {
        image: {
          src: '/images/team1.png',
          alt: 'executive',
        },
        name: 'Mr. Sriram Iyer',
        designation: 'Chief Executive Officer	',
        emailId: 'ceo@apollohl.com',
      },
      {
        image: {
          src: '/images/team2.png',
          alt: 'executive',
        },
        name: 'Mr. Sriram Iyer',
        designation: 'Chief Executive Officer	',
        emailId: 'ceo@apollohl.com',
      },
      {
        image: {
          src: '/images/team3.png',
          alt: 'executive',
        },
        name: 'Mr. Sriram Iyer',
        designation: 'Chief Executive Officer	',
        emailId: 'ceo@apollohl.com',
      },
    ],
  },
  mangementTeam: {
    sectionHeading: 'Management Team',
    mainHeading: 'Meet the Powerhouses Driving Our Healthcare Revolution',
    description:
      'Feugiat velit condimentum arcu nisl laoreet sit purus. Diam consectetur consectetur leo et. Faucibus diam ornare sapien porttitor id metus hac vel sit. Pellentesque lectus hac risus volutpat hendrerit convallis.Orci rhoncus enim vestibulum mattis augue nunc. Lorem tortor rutrum pretium nec dolor sit varius laoreet congue. Risus faucibus pellentesque id sed pellentesque augue. Adipiscing mollis lectus pharetra duis pharetra id. Cursus pulvinar dictum facilisis lorem bibendum semper. Pulvinar feugiat volutpat urna dui nam mi at.',
  },
}

function extractTeamMembersCards(
  data: QueryAboutUsCards[]
): TeamListSectionData {
  const images = ['/images/team1.png', '/images/team2.png', '/images/team3.jpg']
  const allCards: TeamListSectionData['team'] = data.map((item, index) => {
    const [designation, emailId] = item.description.split('|')
    return {
      designation,
      emailId,
      image: {
        src: images[index],
        alt: 'executive',
      },
      name: item.nametitle,
    }
  })
  return {
    team: allCards,
  }
}

function extractComponent(
  data: QueryAboutUsSinglePageData
): ManagementTeamData {
  const indicesOfTeam = [0, 1, 2]
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: managementTeamData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    featureSection: managementTeamData.featureSection,
    mangementTeam: {
      sectionHeading: 'Management Team',
      description: data.card_data[3].description,
      mainHeading: data.card_data[3].nametitle,
    },
    overviewSection: managementTeamData.overviewSection,
    teamSection: {
      team: extractTeamMembersCards(
        data.card_data.filter((_, index) => indicesOfTeam.includes(index))
      ).team,
    },
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
  }
}

export const getManagementTeamData = async (): Promise<ManagementTeamData> => {
  const responseData = await getAboutUsPagesData('management-team')
  const p = extractComponent(responseData.data[0])
  return p
}
