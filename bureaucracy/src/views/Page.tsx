import { Paper, Typography } from '@mui/material'
import { ReactNode } from 'react'

const Chat = ({
  from,
  children,
}: {
  from: 'me' | 'them'
  children: ReactNode
}) => (
  <Paper
    css={{
      margin: '1rem',
      padding: '1rem',
      alignSelf: from === 'me' ? 'end' : 'start',
    }}
  >
    <Typography>{children}</Typography>
  </Paper>
)

const Page = () => (
  <div
    css={{
      minHeight: '100vh',
      backgroundColor: 'hsl(200, 70%, 60%)',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      css={{
        maxWidth: '50rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper css={{ margin: '1rem', padding: '2rem' }}>
        <Typography variant="h1">Reception</Typography>
      </Paper>

      <Chat from="them">How can I help you today?</Chat>
      <Chat from="me">I got sent here by...</Chat>
    </div>
  </div>
)

export default Page
