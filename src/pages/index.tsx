import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import {
  ContentContainer,
  Content,
  CustomTabs,
  HomeContent,
  AboutUsContent,
  NewCollectionContent
} from '@components'
import { palette } from '@theme'

const Title = styled(Typography)`
  font-size: 32px;
  margin: 32px 0 4px;
  color: ${palette.primary.main};
`
const SubTitle = styled(Typography)`
  font-size: 18px;
  font-style: italic;
`

const TabContent = (tabIndex: number) => {
  switch (tabIndex) {
    case 0:
      return <HomeContent />
    case 1:
      return <NewCollectionContent />
    case 2:
      return <></>
    case 3:
      return <AboutUsContent />
    case 4:
      return <></>
  }
}

export default function Home() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <>
      <CustomTabs
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
      />
      {TabContent(tabIndex)}
    </>
  )
}
