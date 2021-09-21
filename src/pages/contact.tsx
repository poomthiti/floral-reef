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
import GoogleMapReact from 'google-map-react';
import { PrimaryTitle } from '../components/CustomText'

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
  margin: 64px 0 16px 0;
`
const InfoSubDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :last-child {
    margin-left: 40px;
  }
`
const InfoTitle = styled(Typography)`
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
const Marker = (props: any) => {
  return <>
    <div className="pin"></div>
    <div className="pulse"></div>
  </>
}

const Contact = () => {
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
            <TextField
              id="subject-input"
              label="Subject"
              variant="standard"
            />
            <TextField
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
        <Typography>
          Please feel free to contact us for an information and additional request.
        </Typography>
      </LessPaddingContainer>
      <MapDiv>
        <MapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBLmx0LhboV8XPeL_0T36_0lmouedLvXkQ' }}
            defaultCenter={{
              lat: 13.743894195656656,
              lng: 100.50232350185388,
            }}
            defaultZoom={11}
          >
            <Marker lat={13.743894195656656} lng={100.50232350185388} />
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