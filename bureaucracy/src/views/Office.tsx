import {
  Autocomplete,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import useOffice, { Offices } from '../hooks/useOffice'
import Message from './Message'

const Office = ({ office }: { office: Offices }) => {
  const state = useOffice(office)

  console.log(state, Offices[office])

  return (
    <>
      <Paper css={{ margin: '1rem', padding: '2rem' }}>
        <Typography variant="h1">Reception</Typography>
      </Paper>

      <code>{JSON.stringify(state)}</code>

      <Message from="them">How can I help you today?</Message>

      <Message from="me">
        <Typography>I got sent here by...</Typography>
        <Stack css={{ margin: '1rem 0' }} direction="row" spacing={2}>
          <Button variant="contained">HR</Button>
          <Button variant="contained">Stationary</Button>
          <Button variant="contained">sdfsdflsdkfjlksdjfIT</Button>
        </Stack>
      </Message>

      <Message from="them">
        <Typography>Oh yeah? And what did they want</Typography>
      </Message>

      <Message from="me">
        <Typography>I'm supposed to give you my...</Typography>
        <Autocomplete
          css={{ width: '20rem', margin: '1rem 0' }}
          disablePortal
          options={[{ label: 'thing', other: 'data' }]}
          renderInput={(params) => <TextField {...params} label="..." />}
        />
      </Message>

      <Message from="them">
        <Typography>And that is?</Typography>
      </Message>

      <Message from="me">
        <Typography>It's...</Typography>
        <TextField css={{ width: '20rem', margin: '1rem 0' }} label="..." />
      </Message>

      <Message from="them">
        <Typography>
          Ah, ok. Right. Can you go to either <strong>HR</strong> or{' '}
          <strong>Stationary</strong> and tell them your{' '}
          <strong>Back account pin number?</strong> Cheers.
        </Typography>
      </Message>

      <Message from="me">
        <Button variant="contained">Yeah, sure</Button>
      </Message>
    </>
  )
}

export default Office
