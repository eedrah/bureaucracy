import { ReactNode } from 'react'
import { Paper } from '@mui/material'

const Message = ({
  from,
  children,
}: {
  from: 'me' | 'them'
  children: ReactNode
}) => (
  <Paper
    css={{
      maxWidth: '40rem',
      margin: '1rem',
      padding: '1rem',
      ...(from === 'me'
        ? {
            alignSelf: 'end',
            marginLeft: '4rem',
          }
        : {
            alignSelf: 'start',
            marginRight: '4rem',
          }),
    }}
  >
    {children}
  </Paper>
)

export default Message
