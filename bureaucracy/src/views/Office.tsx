import {
  Autocomplete,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { allQuestions } from '../funcs/logic'

import useOffice, { Offices } from '../hooks/useOffice'
import Message from './Message'

const Office = ({ office }: { office: Offices }) => {
  const { state, sentBy, withData } = useOffice(office)

  console.log(state, Offices[office])

  return (
    <>
      <Paper css={{ margin: '1rem', padding: '2rem' }}>
        <Typography variant="h1">Reception</Typography>
      </Paper>

      <code>{JSON.stringify(state)}</code>

      <Message from="them">How can I help you today?</Message>

      <Message from="me">
        {state.sentBy ? (
          <Typography>I got sent here by {Offices[state.sentBy]}</Typography>
        ) : (
          <>
            <Typography>I got sent here by...</Typography>
            <Stack css={{ margin: '1rem 0' }} direction="row" spacing={2}>
              {state.sentByOptions.map((option) => (
                <Button
                  key={option}
                  variant="contained"
                  onClick={() => sentBy(option)}
                >
                  {Offices[option]}
                </Button>
              ))}
            </Stack>
          </>
        )}
      </Message>

      {state.sentByResponse && (
        <>
          <Message from="them">
            <Typography>{state.sentByResponse}</Typography>
          </Message>

          <Message from="me">
            <Typography>I'm supposed to give you my...</Typography>
            <Autocomplete
              css={{ width: '20rem', margin: '1rem 0' }}
              disablePortal
              options={allQuestions}
              renderInput={(params) => <TextField {...params} label="..." />}
              onChange={(_, v) => withData(v)}
            />
          </Message>
        </>
      )}

      {state.withDataResponse && (
        <>
          <Message from="them">
            <Typography>And that is?</Typography>
          </Message>

          <Message from="me">
            <Typography>It's...</Typography>
            <TextField css={{ width: '20rem', margin: '1rem 0' }} label="..." />
          </Message>
        </>
      )}

      {state.whichIsResponse && (
        <>
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
      )}
    </>
  )
}

export default Office
