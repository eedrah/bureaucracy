import {
  Autocomplete,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
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

      <Chat from="me">
        <Typography>I got sent here by...</Typography>
        <Stack css={{ margin: '1rem 0' }} direction="row" spacing={2}>
          <Button variant="contained">HR</Button>
          <Button variant="contained">Stationary</Button>
          <Button variant="contained">sdfsdflsdkfjlksdjfIT</Button>
        </Stack>
      </Chat>

      <Chat from="them">
        <Typography>Oh yeah? And what did they want</Typography>
      </Chat>

      <Chat from="me">
        <Typography>I'm supposed to give you my...</Typography>
        <Autocomplete
          css={{ width: '20rem', margin: '1rem 0' }}
          disablePortal
          options={[{ label: 'thing', other: 'data' }]}
          renderInput={(params) => <TextField {...params} label="..." />}
        />
      </Chat>

      <Chat from="them">
        <Typography>And that is?</Typography>
      </Chat>

      <Chat from="me">
        <Typography>It's...</Typography>
        <TextField css={{ width: '20rem', margin: '1rem 0' }} label="..." />
      </Chat>

      <Chat from="them">
        <Typography>
          Ah, ok. Right. Can you go to either <strong>HR</strong> or{' '}
          <strong>Stationary</strong> and tell them your{' '}
          <strong>Back account pin number?</strong> Cheers.
        </Typography>
      </Chat>

      <Chat from="me">
        <Button variant="contained">Yeah, sure</Button>
      </Chat>
    </div>
  </div>
)

export default Page
