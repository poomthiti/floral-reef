import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import {
  ContentContainer,
  Content,
  ImageSwiper,
  LineAccountButton
} from '@components'
import { palette } from '@theme'

const SwiperContainer = styled.div`
  width: 100%;
  height: 74vh;
`
const SwiperInfoDiv = styled.div`
  height: 74vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
`
const SwiperInfoHeader = styled(Typography)`
  font-size: 42px;
  color: ${palette.primary.main};
  text-align: center;
`
const SwiperInfoSubtitle = styled(Typography)`
  font-size: 18px;
  color: ${palette.secondary.light};
  font-weight: bold;
  text-align: center;
`
const InquireText = styled(Typography)`
  color: white;
  text-align: center;
  margin-bottom: 18px;
`
const Title = styled(SwiperInfoHeader)`
  font-size: 32px;
  margin: 32px 0 4px;
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
        <SwiperInfoDiv>
          <div>
            <SwiperInfoHeader children="The Floral Reef" />
            <SwiperInfoSubtitle children="Online Floral Design Store - Bouquet - Decoration - Wedding" />
          </div>
          <div>
            <InquireText>สอบถามหรือสั่งซื้อดอกไม้ได้ที่</InquireText>
            <LineAccountButton theme="secondary" />
          </div>
        </SwiperInfoDiv>
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
