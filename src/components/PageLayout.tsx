import { SxProps } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Flex from 'components/ui/Flex'
import Header from 'components/Header'

interface PageLayoutProps {
  sx?: SxProps
}

export default function PageLayout({ sx }: PageLayoutProps) {
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
          },
          {
            text: 'Gallery',
            to: '/gallery',
          },
        ]}
      />
      <Outlet />
    </Flex>
  )
}
