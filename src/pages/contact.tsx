import React from 'react';
import styled from '@emotion/styled';
import {
  ContentContainer,
  Content,
  LineAccountButton,
  SocialIcons
} from '@components'
import { palette } from '@theme';
import { Button, FormControl, Grid, TextField, Typography } from '@material-ui/core';
import GoogleMapReact, { Maps } from 'google-map-react';
import { PrimaryTitle } from '../components/CustomText'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const LessPaddingContainer = styled(ContentContainer)`
  padding-bottom: 56px;
`
const Title = styled(PrimaryTitle)`
  margin-top: 32px;
  font-size: 36px;
`
const StyledFormControl = styled(FormControl)`
  width: 85%;
`
const HalfInput = styled(TextField)`
  width: 100%;
`
const CustomTextField = styled(TextField)`
  margin-top: 8px;
`
const StyledButton = styled(Button)`
  width: 600px;
  padding: 8px;
  border-radius: 2px;
  margin-top: 18px;
  text-transform: capitalize;
  font-size: 18px;
  :hover {
    background-color: #53210c;
  }
`
const SocialSection = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const WaterMark = styled.div`
  line-height: 1.79em;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  padding: 52px 0 32px 0;
`
const InformationDiv = styled.div`
  width: 540px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 64px 0 24px 0;
`
const InfoSubDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :last-child {
    margin-left: 40px;
  }
  `
const ThemeText = styled(Typography)`
  color: #351406;
  `
const InfoTitle = styled(ThemeText)`
  margin-bottom: 4px;
`
const MapDiv = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FBEBE4;
`
const MapContainer = styled.div`
  width: 980px;
  height: inherit;
`
const CloseIcon = styled(CloseRoundedIcon)`
  position: absolute;
  right: 2px;
  top: 2px;
  font-size: 16px;
  cursor: pointer;
  color: #6e6e6e;

  :hover {
    color: black;
  }
`

const getMapOptions = (maps: Maps) => {
  return {
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: maps.ControlPosition.TOP_LEFT,
      mapTypeIds: [
        maps.MapTypeId.ROADMAP,
        maps.MapTypeId.SATELLITE
      ]
    },
  }
}

const Contact = () => {
  const [showInfo, setShowInfo] = React.useState<boolean>(true);

  const Marker = (props: any) => {
    return (
      <>
        {showInfo && (
          <div className="infoWindow">
            <div className="infoText">
              Chakkawat, Bangkok, Thailand
            </div>
            <CloseIcon onClick={() => setShowInfo(false)} />
            <a
              className="direction"
              href="https://www.google.com/maps/dir/?api=1&destination=Chakkawat,%20Bangkok,%20Thailand"
              target="_blank"
            >
              Directions
            </a>
          </div>
        )}
        <div className="pin"></div>
        <div className="pulse"></div>
      </>
    )
  }

  return (
    <>
      <LessPaddingContainer bgColor={palette.secondary.light}>
        <Content>
          <Title>
            Contact us
          </Title>
          <StyledFormControl margin="normal">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <HalfInput
                  id="name-input"
                  label="Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <HalfInput
                  id="email-input"
                  label="Email"
                  variant="standard"
                />
              </Grid>
            </Grid >
            <CustomTextField
              id="subject-input"
              label="Subject"
              variant="standard"
            />
            <CustomTextField
              id="message-input"
              label="Type your message here..."
              multiline
              rows={5}
            />
          </StyledFormControl>
          <StyledButton variant="contained" color="primary">
            Submit
          </StyledButton>
        </Content>
        <InformationDiv>
          <InfoSubDiv>
            <InfoTitle>
              Line: @thefloralreef.bkk
            </InfoTitle>
            <LineAccountButton theme="primary" />
          </InfoSubDiv>
          <InfoSubDiv>
            <InfoTitle>
              Tel: 064-546-2429
            </InfoTitle>
            <SocialSection>
              <SocialIcons />
            </SocialSection>
          </InfoSubDiv>
        </InformationDiv>
        <ThemeText>
          Please feel free to contact us for an information and additional request.
        </ThemeText>
      </LessPaddingContainer>
      <MapDiv>
        <MapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDLwirwEnlaXfLvFzfrRGKF2QBqlXhRO3s' }}
            defaultCenter={{
              lat: 13.741244999013148,
              lng: 100.50216884468743,
            }}
            defaultZoom={14}
            options={getMapOptions}
          >
            <Marker
              lat={13.741244999013148}
              lng={100.50216884468743}
            />
          </GoogleMapReact>
        </MapContainer>
      </MapDiv>
      <WaterMark>
        ©2021 by The Floralreef.
      </WaterMark>
    </>
  )
}

export default Contact;