import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import { ContentContainer, Content, ImageSwiper } from '@components'
import { palette } from '@theme'

const SwiperContainer = styled.div`
  width: 100%;
  height: 74vh;
`
const Title = styled(Typography)`
  font-size: 32px;
  margin: 32px 0 4px;
  color: ${palette.primary.main};
`
const SubTitle = styled(Typography)`
  font-size: 18px;
  font-style: italic;
`
const SubContent = styled(Content)`
  padding: 32px;
  justify-content: center;
  max-width: 900px;
`
const BrownSubTitle = styled(SubTitle)`
  margin-bottom: 24px;
  color: ${palette.primary.main};
`

const ThaiSubTitle = styled(Typography)`
  font-weight: 500;
  text-align: center;
`

export const HomeContent = () => {
  return (
    <>
      <SwiperContainer>
        <ImageSwiper />
      </SwiperContainer>
      <ContentContainer bgColor={palette.banner}>
        <SubContent>
          <BrownSubTitle children="The FloralReef floral design store is an online flower shop based in Bangkok, Thailand." />
          <ThaiSubTitle children="The FloralReef คือร้านดอกไม้ รับออกแบบดอกไม้ในรูปแบบต่างๆเช่น ช่อดอกไม้ แจกัน ดอกไม้สด ดอกไม้แห้ง กล่องดอกไม้ และงานนิทรรศการ ทางร้านเป็นร้านบริการออนไลน์ จัดส่งภายในกรุงเทพมหานครและปริมณฑล" />
        </SubContent>
      </ContentContainer>
      <ContentContainer bgColor={palette.secondary.light}>
        <Content>
          <Title children="Flowers" />
          <SubTitle children="Designed by The Floral Reef" />
        </Content>
      </ContentContainer>
    </>
  )
}
