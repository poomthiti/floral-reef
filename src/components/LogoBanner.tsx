import React, { CSSProperties } from 'react';
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import { palette } from '@theme'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LineLogo from 'src/assets/images/line-logo.png'

const logoImg = require('../assets/images/logoAndBanner/TheFloralReef_LOGO_Normal_1.jpg')

const BannerContainer = styled.div`
  display: flex;
  top: 0;
  width: 100%;
  height: 22%;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem 3rem;
  background-image: url(${logoImg});
  background-color: ${palette.banner};
  background-repeat: no-repeat;
  background-size: auto 150%;
  background-position: center;
`
const SocialSection = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const EmailSection = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const iconStyle: CSSProperties = {
  width: '30px',
  height: '30px',
  marginLeft: '1rem'
}

export const LogoBanner = () => {
  return (
    <BannerContainer>
      <SocialSection>
        <EmailSection data-auto-recognition="true" href="mailto:thefloralreef.bkk@gmail.com">
          <MailOutlineIcon style={{
            width: '24px',
            height: '24px',
            marginLeft: '1rem'
          }} />
          <Typography children=": thefloralreef.bkk@gmail.com" />
        </EmailSection>
        <a href="https://www.instagram.com/thefloralreef.bkk/" target="_blank">
          <InstagramIcon style={iconStyle} />
        </a>
        <a href="https://www.facebook.com/thefloralreeff" target="_blank">
          <FacebookIcon style={iconStyle} />
        </a>
        <a href="http://lin.ee/XPhIN5e6" target="_blank">
          <img src={LineLogo} style={iconStyle} />
        </a>
      </SocialSection>
    </BannerContainer>
  )
}