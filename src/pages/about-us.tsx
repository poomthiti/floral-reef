import React from 'react';
import styled from '@emotion/styled';
import {
  ContentContainer,
  Content,
  AboutPageSwiper,
  LineAccountButton,
  SocialIcons
} from '@components'
import { palette } from '@theme';
import { PrimaryTitle, PrimarySubtitle } from '../components/CustomText'

const Title = styled(PrimaryTitle)`
  margin-top: 32px;
  font-size: 36px;
`
const Subtitle = styled(PrimarySubtitle)`
  color: #D1551F;
  font-size: 18px;
  margin: 16px 0;
`
const CustomParagraph = styled.p`
  line-height: 26px;
  margin-bottom: 20px;
  align-self: flex-start;
`
const ContentDiv = styled(Content)`
  max-width: 780px;
  margin-bottom: 24px;
`
const SocialSection = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 28px;
`
const WaterMark = styled.div`
  line-height: 1.79em;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  padding: 52px 0 32px 0;
`
const SwiperContainer = styled.div`
  width: 100%;
  height: 62vh;
`

const AboutUs = () => {
  return (
    <>
      <ContentContainer bgColor={palette.secondary.light}>
        <ContentDiv>
          <Title>
            About us
          </Title>
          <Subtitle>
            We create a piece of art, inspried by Coral reef.
          </Subtitle>
          <CustomParagraph>
            ร้าน The Floral Reef คือร้านขายดอกไม้ รับออกแบบดอกไม้ในรูปแบบต่างๆเช่น ช่อดอกไม้ แจกัน ดอกไม้สด ดอกไม้แห้ง กล่องดอกไม้ และงานแต่งงาน ทางร้านเป็นร้านบริการออนไลน์ จัดส่งภายในกรุงเทพมหานครและปริมณฑล ร้านเริ่มจากไอเดียออกแบบที่มีแรงบัลดาลใจมากจาก ปะการังทะเล (Coral reef) ซึ่งมีสีสันและรูปทรงที่เป็นอิสระไปตามทางธรรมชาติ ประการังทะเลมีสีสันสดใสที่เปล่งประกายเมื่อแสงแดดกระทบ หรือเป็นสีโทนเดียวกันในหลากหลายความเข้มที่กลมกลืนกันอยู่ในประการังต้นหนึ่ง ดังนั้นลักษณะการออกแบบดอกไม้จึงเป็นไปตามสีสันของปะการังและรูปทรงที่เป็นธรรมชาติ การเลือกจัดเรียงดอกไม้และใบไม้สึ่งเป็นองค์ประกอบทางธรรมชาติเช่นกันจึงมีลักษณะที่หลากหลาย แปลกใหม่ แหวกจากรูปแบบเดิม
          </CustomParagraph>
          <CustomParagraph>
            ไอเดียการออกแบบของดอกไม้ร้านThe FloralReef เรามองว่าเป็นสร้างผลงานศิลปะชิ้นหนึ่งที่ต้องการทั้งความปราณีตในการเลือกองค์ประกอบและสีที่เข้ากัน ทุกชิ้นจึงมีความเป็นเอกลักษณ์ของตัวเอง ไม่ซ้ำกับชิ้นอื่นๆ แนวคิดการสร้างสรรค์จึงส่งไปถึงการเลือกโทนสีของดอกไม้ ที่จะเป็นสีออกเข้ม หรือสีผสมที่แปลกใหม่ การจัดเรียงของดอกไม้เป็นไปตามทรงธรรมชาติจากความหลากหลายของพันธุ์ไม้ ลักษณะของดอกไม้ร้าน The Floralreefมีเอกลักษณ์ในตัวเอง มีความเรียบหรู และสามารถออกแบบให้เหมาะกับทุกเพศ
          </CustomParagraph>
          <CustomParagraph>
            The FloralReef floral design store is a floral service online store based in Bangkok, Thailand. Services are included by floral bouquets, floral vases, fresh flowers, dried flowers, flower boxes and event decoration. We start design concept idea with Coral reef which has various color palettes and organic forms. The coral reefs have a colorful type and monotone type at the same times. So we design the flowers in the coral reef color tones and organic bouquet form. We choose flower stems and leaf by the idea of nature of the coral reef form, so the bouquet style is new and unique.
          </CustomParagraph>
          <CustomParagraph>
            Our terms of floral design is to create a piece of art that need delicate attention while choosing elements and colors. Every The FloralReef’s products have their own identity. Our design concept appears in how we choose flower color palette which are smoky tones and how we arrange flower to be in natural form. By using unique colors of flower combining together, we create not the same typical styles of flower bouquet. The FloralReef’s flower styles are unique by themselves. They are elegant, fabulous and they are designed to suit every gender. Our products are fresh, high quality and lasting value.
          </CustomParagraph>
          <CustomParagraph>
            Please feel free to contact us for an information and additional request.
          </CustomParagraph>
        </ContentDiv>
        <LineAccountButton theme="primary" />
        <SocialSection>
          <SocialIcons />
        </SocialSection>
      </ContentContainer>
      <SwiperContainer>
        <AboutPageSwiper />
      </SwiperContainer>
      <WaterMark>
        ©2021 by The Floralreef.
      </WaterMark>
    </>
  )
}

export default AboutUs;