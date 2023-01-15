import { ReactElement } from 'react'
import { Button, SxProps } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import Flex from 'components/ui/Flex'

interface HeaderLinkItem {
  text: string
  to: string
}

interface HeaderProps {
  items: HeaderLinkItem[]
  title: string
  subtitle: string
  sx?: SxProps
}

export default function Header({
  items,
  title,
  subtitle,
  sx,
}: HeaderProps): ReactElement {
  const location = useLocation()
  const navigate = useNavigate()

  const { pathname } = location

  return (
    <Flex
      sx={{
        ...sx,
        width: '100%',
        height: '330px',
        color: 'white',
        backgroundColor: '#36393B',
      }}
    >
      <Flex
        sx={{
          p: '92px',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Flex sx={{ fontSize: '48px' }}>{title}</Flex>
          <Flex sx={{ fontSize: '24px' }}>{subtitle}</Flex>
        </Flex>
        <Flex sx={{ gap: '24px' }}>
          {items.map((item) => (
            <Button
              key={item.to}
              onClick={() => {
                navigate(item.to)
              }}
              sx={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '24px',
                borderBottom: pathname === item.to ? '1px solid white' : 'none',
                pb: pathname === item.to ? '8px' : 'none',
              }}
            >
              {item.text}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
