import React, { useState } from 'react';
import styled from '@emotion/styled';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import theme, { palette } from '@theme'

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${palette.white};
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`

const CustomTab = styled(({ ...props }) => (<Tab {...props} classes={{ selected: 'selected' }} />))`
  height: 3em;
  width: 15em;
  border-right: 1px solid ${palette.primary.dark};
  transition: 0.4s;
  :last-child {
    border-right: 0;
  }
  &:hover {
    background-color: ${palette.secondary.light}
  }
  &.selected {
    background-color: ${palette.secondary.main};
    opacity: 0.7
  }
`

const TabLabel = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
`

interface CustomTabsProps {
  tabIndex: number
  setTabIndex: React.Dispatch<React.SetStateAction<number>>,
}

export const CustomTabs: React.FC<CustomTabsProps> = ({ tabIndex, setTabIndex }) => {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setTabIndex(newValue)
  }

  return (
    <TabsContainer>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        aria-label="tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: 'transparent'
          }
        }}
        variant="fullWidth"
      >
        <CustomTab
          label={<TabLabel children="Home" />}
          value={0}
        />
        <CustomTab
          label={<TabLabel children="New Collection" />}
          value={1}
        />
        <CustomTab
          label={<TabLabel children="Flowers" />}
          value={2}
        />
        <CustomTab
          label={<TabLabel children="About Us" />}
          value={3}
        />
        <CustomTab
          label={<TabLabel children="Contact" />}
          value={4}
        />
      </Tabs>
    </TabsContainer>
  )
}