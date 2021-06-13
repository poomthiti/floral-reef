import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import {
  ContentContainer,
  Content,
  CustomTabs,
  HomeContent
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

export default function Home() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <>
      <CustomTabs
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
      />
      <HomeContent />
    </>
  )
}
