import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { palette } from '@theme'

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
const HiddenTab = styled(Tab)`
  display: none;
`

const TabLabel = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
`

const urlPathMap: { [key: number]: string } = {
  0: '/',
  1: '/new-collection',
  2: '/flowers',
  3: '/about-us',
  4: '/contact'
}

export const CustomTabs: React.FC = () => {
  const router = useRouter();
  const getTabIndex = () => {
    const path = router.pathname
    if (path === '/') {
      return 0
    } else if (path.startsWith('/new-collection')) {
      return 1
    } else if (path.startsWith('/flowers')) {
      return 2
    } else if (path.startsWith('/about-us')) {
      return 3
    } else if (path.startsWith('/contact')) {
      return 4
    }
    return 9;
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    router.push({
      pathname: urlPathMap[newValue]
    })
  }

  return (
    <TabsContainer>
      <Tabs
        value={getTabIndex()}
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
        <HiddenTab
          label=''
          value={9}
        />
        <CustomTab
          label={<TabLabel children="Contact" />}
          value={4}
        />
      </Tabs>
    </TabsContainer>
  )
}