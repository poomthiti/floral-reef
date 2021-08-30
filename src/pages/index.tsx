import React from 'react'
import { Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import {
  ContentContainer,
  Content,
  ImageSwiper,
  LineAccountButton,
  FlowerCollection,
  SocialIcons
} from '@components'
import { palette } from '@theme'
import { flowerData } from '@data'
import { Slide10 } from '@images/logoAndBanner'
import { PrimaryTitle } from '../components/CustomText'

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
const SwiperInfoHeader = styled(PrimaryTitle)`
  font-size: 42px;
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
const InquireAboutUs = styled(InquireText)`
  color: ${palette.primary.main};
  margin-top: 12px;
`
const Title = styled(PrimaryTitle)`
  margin: 32px 0 4px;
`
const SubTitle = styled(Typography)`
  font-size: 18px;
  font-style: italic;
`
const AboutUsSubtitle = styled(SubTitle)`
  font-weight: 600;
  color: ${palette.primary.light};
  margin: 16px 0 48px;
`
const SubContent = styled(Content)`
  padding: 32px;
  justify-content: center;
  max-width: 900px;
  `
const BrownSubTitle = styled(SubTitle)`
  color: ${palette.primary.main};
  margin-bottom: 24px;
`

const ThaiSubTitle = styled(Typography)`
  font-weight: 500;
  text-align: center;
`
const LessPaddingContent = styled(ContentContainer)`
  padding-bottom: 12px;
`
const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${palette.secondary.light};
`
const HalfContent = styled.div`
  width: 50%;
  display: inline-flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px 0 64px;
`
const PicHalfContent = styled(HalfContent)`
  background-image: url(${Slide10});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
`
const ParagraphContainer = styled.div`
  width: 70%;
`;
const CustomParagraph = styled.p`
  line-height: 26px;
  margin-bottom: 24px;
`
const ContactUsText = styled(Typography)`
  color: #645546;
  line-height: 36px;
  margin-top: 6px;
`
const VerticalGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0 24px;
`
const SocialSection = styled.div`
  margin-top: 16px;
`

const Home = () => {
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
      <ContentContainer bgColor={palette.secondary.light}>
        <FlowerCollection
          category={flowerData[0].category}
          products={flowerData[0].products}
          pageSize={8}
        />
      </ContentContainer>
      <LessPaddingContent bgColor={palette.white}>
        <FlowerCollection
          category={flowerData[1].category}
          products={flowerData[1].products}
          pageSize={4}
        />
      </LessPaddingContent>
      <LessPaddingContent bgColor={palette.white}>
        <FlowerCollection
          category={flowerData[2].category}
          products={flowerData[2].products}
          pageSize={4}
        />
      </LessPaddingContent>
      <ContentContainer bgColor={palette.white}>
        <FlowerCollection
          category={flowerData[3].category}
          products={flowerData[3].products}
          pageSize={4}
        />
      </ContentContainer>
      <AboutUsContainer>
        <HalfContent>
          <Title>
            About Us
          </Title>
          <AboutUsSubtitle>
            Every flower is a soul blooming in nature.
          </AboutUsSubtitle>
          <ParagraphContainer>
            <CustomParagraph>
              The FloralReef floral design store is a floral service online store based in Bangkok, Thailand. Services are included by floral bouquets, floral vases, fresh flowers, dried flowers, flower boxes and event decoration. We start design concept idea with Coral reef which has various color palettes and organic forms. The coral reefs have a colorful type and monotone type at the same times. So we design the flowers in the coral reef color tones and organic bouquet form. Also we choose flower stems and leaves based on organic form of coral reef, the bouquet styles are new and unique.
            </CustomParagraph>
            <CustomParagraph>
              เราเริ่มแรกด้วยแรงปรารถนาของเรา ที่อยากจะเป็นส่วนหนึ่งในการสร้างบรรยากาศ สร้างความประทับใจ ในโอกาสสำคัญต่างๆ ในช่วงชีวิตต่างๆของผู้คน จึงเกิดไอเดียที่จะสร้างร้านดอกไม้ขึ้นมา เพราะดอกไม้สามารถเป็นสิ่งที่สามารถสื่อความและก่อให้เกิดผลลัพธ์เหล่านั้นได้ ทั้งในโอกาสการแสดงความยินดี การแสดงความรัก และการให้กำลังใจ
            </CustomParagraph>
            <CustomParagraph>
              <span style={{ color: '#D1551F' }}>ไอเดียแรกเริ่มในออกแบบออกแบบดอกไม้ของร้าน The FloralReef มีแรงบัลดาลใจมากจาก ปะการังทะเล(Coral reef) </span>
              ซึ่งมีสีสันและรูปทรงที่เป็นอิสระไปตามทางธรรมชาติ ประการังทะเลมีสีสันสดใสที่เปล่งประกายเมื่อแสงแดดกระทบ หรือเป็นสีโทนเดียวกันในหลากหลายความเข้มที่กลมกลืนกันอยู่ในประการังต้นหนึ่ง ดังนั้นลักษณะการออกแบบดอกไม้จึงเป็นไปตามสีสันของปะการังและรูปทรงที่เป็นธรรมชาติ การเลือกจัดเรียงดอกไม้และใบไม้ซึ่งเป็นองค์ประกอบทางธรรมชาติเช่นกันจึงมีลักษณะที่หลากหลาย แปลกใหม่ แหวกจากรูปแบบเดิม
            </CustomParagraph>
            <CustomParagraph>
              ไอเดียการออกแบบของดอกไม้ร้าน The FloralReef เรามองว่าเป็นสร้างผลงานศิลปะชิ้นหนึ่งที่ต้องการความปราณีตในการเลือกองค์ประกอบและสีที่เข้ากัน ทุกชิ้นจึงมีความเป็นเอกลักษณ์ของตัวเอง ไม่ซ้ำกับชิ้นอื่นๆ แนวคิดการสร้างสรรค์จึงส่งไปถึงการเลือกโทนสีของดอกไม้ ที่จะเป็นสีออกเข้ม หรือสีผสมที่แปลกใหม่ การจัดเรียงของดอกไม้เป็นไปตามทรงธรรมชาติจากความหลากหลายของพันธุ์ไม้ ลักษณะของดอกไม้ร้านThe Floralreefมีเอกลักษณ์ในตัวเอง สามารถออกแบบให้เหมาะกับทุกเพศ และมีความเรียบหรูไปในทางเดียวกัน
            </CustomParagraph>
          </ParagraphContainer>
          <InquireAboutUs>
            สอบถามหรือสั่งดอกไม้ได้ที่
          </InquireAboutUs>
          <LineAccountButton theme="primary" />
        </HalfContent>
        <PicHalfContent />
      </AboutUsContainer>
      <ContentContainer bgColor={palette.white}>
        <Title>
          Contact Us
        </Title>
        <ContactUsText>
          สอบถามรายละเอียดและขอภาพตัวอย่างเพิ่มเติมได้ทาง Line Official Account {'\n'}
        </ContactUsText>
        <ContactUsText>
          Thanks for pur interest in The Floralreef. For more information, please contact Line: @thefloralreef
        </ContactUsText>
        <VerticalGroup>
          <LineAccountButton theme="primary" />
          <SocialSection>
            <SocialIcons />
          </SocialSection>
        </VerticalGroup>
      </ContentContainer>
    </>
  )
}

export default Home;