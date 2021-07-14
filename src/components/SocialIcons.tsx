import React, { CSSProperties } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LineLogo from 'src/assets/images/line-logo.png'

const iconStyle: CSSProperties = {
  width: '30px',
  height: '30px',
  marginLeft: '1rem'
}

export const SocialIcons = () => {
  return (
    <>
      <a href="https://www.instagram.com/thefloralreef.bkk/" target="_blank">
        <InstagramIcon style={iconStyle} />
      </a>
      <a href="https://www.facebook.com/thefloralreeff" target="_blank">
        <FacebookIcon style={iconStyle} />
      </a>
      <a href="http://lin.ee/XPhIN5e6" target="_blank">
        <img src={LineLogo} style={iconStyle} />
      </a>
    </>
  )
}