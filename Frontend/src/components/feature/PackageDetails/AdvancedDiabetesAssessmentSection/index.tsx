/* eslint-disable complexity */

'use client'

import React, { useRef, useState } from 'react'
import { Box, Collapse, Typography } from '@mui/material'
import { ImageType } from '@models'
import {
  Accordion,
  AccordionData,
  Button,
  FinalPriceCard,
  FinalPriceCardData,
  HtmlPurifier,
  Image,
  LeftTabsPanel,
  LeftTabsPanelData,
} from '@components/common'
import { ImageViewer, ImageViewerData } from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type AdvancedDiabetesAssessmentSectionData = Partial<{
  itemType: string
  testDetailsData: Partial<{
    title: string
    itemDescription: string
  }>
  testOverviewData: Partial<{
    title: string
    testDescription: string
  }>
  testInclusionData: Partial<{
    title: string
    testIncludes: (AccordionData & { tests: string[] })[]
  }>
  faqSectionData: Partial<{
    title: string
    faqsData: AccordionData[]
  }>
  infoSectionData: Partial<{
    title: string
    description: string
  }>
  guaranteeCards: ImageType[]
  accreditationCertificateImage: ImageType
  advertisementBanner: ImageViewerData
  finalPriceCardData: FinalPriceCardData
}>

const tabConfig = {
  DETAILS_WRAPPER: 'detailsWrapper',
  OVERVIEW_WRAPPER: 'overviewWrapper',
  TEST_INCLUSIONS: 'testInclusions',
  FAQ_SECTIONS: 'faqSection',
  INFO_SECTION: 'infoSection',
} as const

type AdvancedDiabetesAssessmentSectionProps =
  AdvancedDiabetesAssessmentSectionData

const tabs: Record<string, LeftTabsPanelData['tabs']> = {
  Package: [
    {
      label: 'Package Details',
      value: tabConfig.DETAILS_WRAPPER,
    },
    {
      label: 'Package Overview',
      value: tabConfig.OVERVIEW_WRAPPER,
    },
    {
      label: 'Package Inclusions',
      value: tabConfig.TEST_INCLUSIONS,
    },
    {
      label: `FAQ's`,
      value: tabConfig.FAQ_SECTIONS,
    },
    {
      label: 'Why Apollo Diagnostics',
      value: tabConfig.INFO_SECTION,
    },
  ],
  Test: [
    {
      label: 'Test Details',
      value: tabConfig.DETAILS_WRAPPER,
    },
    {
      label: 'Test Overview',
      value: tabConfig.OVERVIEW_WRAPPER,
    },
    {
      label: 'Test Inclusions',
      value: tabConfig.TEST_INCLUSIONS,
    },
    {
      label: `FAQ's`,
      value: tabConfig.FAQ_SECTIONS,
    },
    {
      label: 'Why Apollo Diagnostics',
      value: tabConfig.INFO_SECTION,
    },
  ],
}

export function AdvancedDiabetesAssessmentSection({
  faqSectionData,
  accreditationCertificateImage,
  advertisementBanner,
  finalPriceCardData,
  testDetailsData,
  guaranteeCards,
  testOverviewData,
  testInclusionData,
  infoSectionData,
  itemType,
}: AdvancedDiabetesAssessmentSectionProps) {
  const styles = getStyles(defaultStyles)
  const [checked, setChecked] = useState(false)
  const faqSectionRef = useRef<HTMLDivElement>(null)
  const infoSectionRef = useRef<HTMLDivElement>(null)
  const testInclusionsRef = useRef<HTMLDivElement>(null)
  const detailsWrapperRef = useRef<HTMLDivElement>(null)
  const overviewWrapperRef = useRef<HTMLDivElement>(null)
  const [openAccordion, setOpenAccordion] = useState<string | null>('')

  const handleAccordionChange = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label)
  }

  const handleCollapse = () => {
    setChecked(!checked)
  }

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    const topDistance = ref.current?.offsetTop
    if (topDistance) {
      document.body.scrollTo({
        top: topDistance - 160,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  const handleTabChange = (tabName: string) => {
    switch (tabName) {
      case tabConfig.DETAILS_WRAPPER: {
        handleScrollTo(detailsWrapperRef)
        break
      }
      case tabConfig.OVERVIEW_WRAPPER: {
        handleScrollTo(overviewWrapperRef)
        break
      }
      case tabConfig.TEST_INCLUSIONS: {
        handleScrollTo(testInclusionsRef)
        break
      }
      case tabConfig.FAQ_SECTIONS: {
        handleScrollTo(faqSectionRef)
        break
      }
      case tabConfig.INFO_SECTION: {
        handleScrollTo(infoSectionRef)
        break
      }
      default: {
        break
      }
    }
  }

  function filterTabs(itemType: string) {
    const leftPanelTabs = tabs[itemType].filter((item) => {
      if (
        item.value === tabConfig.OVERVIEW_WRAPPER &&
        !testOverviewData?.testDescription
      )
        return false
      if (
        item.value === tabConfig.TEST_INCLUSIONS &&
        !testInclusionData?.testIncludes
      )
        return false
      if (
        item.value === tabConfig.FAQ_SECTIONS &&
        !faqSectionData?.faqsData?.length
      )
        return false
      if (
        item.value === tabConfig.INFO_SECTION &&
        !infoSectionData?.description
      )
        return false
      return true
    })
    return leftPanelTabs
  }

  return (
    <Box {...styles('headWrapper')}>
      <Box {...styles('leftContainer')}>
        {itemType && (
          <LeftTabsPanel
            tabs={filterTabs(itemType)}
            onChange={handleTabChange}
            customStyles={{ wrapper: styles('leftTab').sx }}
          />
        )}
        {advertisementBanner && (
          <ImageViewer
            {...advertisementBanner}
            customStyles={{ wrapper: styles('advertisementWrapper').sx }}
          />
        )}
      </Box>
      <Box {...styles('middleContainer')}>
        <Box
          {...styles(['testDetailsWrapper', 'cardWrapper'])}
          ref={detailsWrapperRef}
        >
          <Typography variant="h4" {...styles('heading')}>
            {testDetailsData?.title}
          </Typography>
          <Typography variant="h4" {...styles('description')}>
            {testDetailsData?.itemDescription}
          </Typography>
        </Box>
        {guaranteeCards && (
          <Box {...styles('guaranteeSection')}>
            {guaranteeCards.map((image) => (
              <Image
                {...image}
                fill
                key={image.src}
                customStyles={{ wrapper: styles('guaranteeTagImage').sx }}
              />
            ))}
          </Box>
        )}
        {testOverviewData?.testDescription && (
          <Box
            {...styles(['descriptionWrapper', 'cardWrapper'])}
            ref={overviewWrapperRef}
          >
            <Typography variant="h4" {...styles('heading')}>
              {testOverviewData.title}
            </Typography>
            <Collapse in={checked} collapsedSize={180}>
              <HtmlPurifier
                html={testOverviewData.testDescription}
                customStyles={{ wrapper: styles('description').sx }}
              />
            </Collapse>
            <Button
              variant="text"
              label={checked ? 'Read less' : 'Read more'}
              onClick={handleCollapse}
            />
          </Box>
        )}

        {testInclusionData?.testIncludes && (
          <Box
            {...styles(['testInclusionsWrapper', 'cardWrapper'])}
            ref={testInclusionsRef}
          >
            <Typography variant="h4" {...styles('heading')}>
              {testInclusionData.title}
            </Typography>
            {testInclusionData.testIncludes.map((accordion) => (
              <Accordion
                label={`${accordion.label} (${accordion.tests.length})`}
                key={accordion.label}
                isOpen={openAccordion === accordion.label}
                onChange={() => handleAccordionChange(accordion.label)}
                customStyles={{
                  toggleWrapper: { boxShadow: 'none', height: '48px' },
                }}
              >
                <Box component="ul">
                  {accordion.tests.map((test) => {
                    return (
                      <Box component="li" key={test}>
                        {test}
                      </Box>
                    )
                  })}
                </Box>
              </Accordion>
            ))}
          </Box>
        )}

        {faqSectionData && !!faqSectionData.faqsData?.length && (
          <Box
            {...styles(['faqAccordionsWrapper', 'cardWrapper'])}
            ref={faqSectionRef}
          >
            <Typography variant="h4" {...styles('heading')}>
              {faqSectionData.title}
            </Typography>
            {faqSectionData.faqsData.map(
              (faq) =>
                faq.document && (
                  <Accordion
                    {...faq}
                    key={faq.label}
                    isOpen={openAccordion === faq.label}
                    onChange={() => handleAccordionChange(faq.label)}
                  />
                )
            )}
          </Box>
        )}

        {infoSectionData && infoSectionData.description && (
          <Box
            {...styles(['testDetailsWrapper', 'cardWrapper'])}
            ref={infoSectionRef}
          >
            <Typography variant="h4" {...styles('heading')}>
              {infoSectionData.title}
            </Typography>
            <Typography variant="h4" {...styles('description')}>
              {infoSectionData.description}
            </Typography>
          </Box>
        )}
      </Box>
      <Box {...styles('rightContainer')}>
        {finalPriceCardData && (
          <FinalPriceCard
            {...finalPriceCardData}
            customStyles={{ wrapper: styles('card').sx }}
          />
        )}
        {accreditationCertificateImage && (
          <Image
            {...accreditationCertificateImage}
            fill
            customStyles={{ wrapper: styles('accreditationCertify').sx }}
          />
        )}
      </Box>
    </Box>
  )
}
