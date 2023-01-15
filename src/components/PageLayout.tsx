import { ReactElement } from 'react'
import { SxProps } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Flex from './ui/Flex'
import Header from './Header'

interface PageLayoutProps {
  sx?: SxProps
}

export default function PageLayout({ sx }: PageLayoutProps): ReactElement {
  return (
    <Flex
      sx={{
        ...sx,
        backgroundColor: '#BFB6BB',
        width: '100%',
        height: '100%',
        position: 'fixed',
      }}
    >
      <Header
        title="BURNT RIVER"
        subtitle="ONTARIO"
        items={[
          {
            text: 'About Us',
            to: '/about',
            isSelected: window.location.pathname.includes('/about'),
          },
          {
            text: 'Gallery',
            to: '/gallery',
            isSelected: window.location.pathname.includes('/gallery'),
          },
        ]}
      />
      <Outlet />
    </Flex>
  )
}
