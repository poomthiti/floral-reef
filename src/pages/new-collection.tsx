import React from 'react'
import styled from '@emotion/styled'
import {
  ContentContainer,
  LineAccountButton,
  FlowerCollection,
  Content,
} from '@components'
import { palette } from '@theme'
import { allProductData } from '@data'
import { PrimaryTitle } from '../components/CustomText'

const TextDiv = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${palette.primary.main};
  font-size: 14px;
  line-height: 24px;
`
const InquireContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  margin-top: 24px;
`
const InquireText = styled.div`
  font-size: 18px;
  color: ${palette.primary.main};
`
const Title = styled(PrimaryTitle)`
  margin: 24px 0 8px;
  font-size: 40px;
`
const Collection = styled(Content)`
  margin-top: 24px;
`

const NewCollection = () => {
  return (
    <ContentContainer bgColor={palette.white}>
      <Title children="New Collections" />
      <TextDiv>
        ดอกไม้รูปแบบใหม่ที่ทางร้านได้จัดทำขึ้น ด้วยแนวคิดการออกแบบใหม่  แต่ยังคงรูปแบบที่เป็นเอกลักษณ์ของร้านThe FloralReef  แต่ละช่วงพันธุ์และสีของดอกไม้อาจจะแตกต่างกัน  ทางเราจะปรับเปลี่ยนให้เหมาะสมจากวัตถุดิบที่มี  โดยที่โทนสีจะคงความใกล้เคียงเดิม
      </TextDiv>
      <InquireContainer>
        <InquireText>
          สอบถามรายละเอียดเพิ่มเติมทาง
        </InquireText>
        <LineAccountButton />
      </InquireContainer>
      <Collection>
        <FlowerCollection
          category=''
          products={allProductData}
          pageSize={8}
        />
      </Collection>
    </ContentContainer>
  )
}

export default NewCollection;