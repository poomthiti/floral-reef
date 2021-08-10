import React, { CSSProperties } from 'react';
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import { palette } from '@theme'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { SocialIcons } from '.'

const logoImg = require('../assets/images/logoAndBanner/TheFloralReef_LOGO_Normal_1.jpg')

const BannerContainer = styled.div`
  display: flex;
  top: 0;
  width: 100%;
  height: 22vh;
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
  margin-right: 1rem;
`

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
        <SocialIcons />
      </SocialSection>
    </BannerContainer>
  )
}