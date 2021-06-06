import React from 'react'
import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import { ContentContainer, Content } from '@components'
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
  return (
    <ContentContainer bgColor={palette.secondary.light}>
      <Content>
        <Title children="Flowers" />
        <SubTitle children="Designed by The Floral Reef" />
      </Content>
    </ContentContainer>
  )
}
