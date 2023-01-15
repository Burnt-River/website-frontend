import Box from '@mui/material/Box'
import { ReactNode } from 'react'
import { SxProps } from '@mui/material'

interface FlexProps {
  children?: ReactNode
  sx?: SxProps
}

export default function Flex({ children, sx }: FlexProps) {
  return <Box sx={{ display: 'flex', ...sx }}>{children}</Box>
}
