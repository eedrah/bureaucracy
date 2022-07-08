import {
  Autocomplete,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { allQuestions, Offices } from '../funcs/logic'

import useOffice from '../hooks/useOffice'
import Message from './Message'

const Office = ({ office }: { office: Offices }) => {
  const { state, sentBy, withData, whichIs, reset, register } =
    useOffice(office)

  return (
    <>
      <Paper css={{ margin: '1rem', padding: '2rem' }}>
        <Typography variant="h1">{Offices[state.office]}</Typography>
      </Paper>

      <Message from="them">How can I help you today?</Message>

      {office === Offices.Reception && !state.sentBy && (
        <Message from="me">
          {state.isRegistering ? (
            <Typography>I'd like to register for employee benefits</Typography>
          ) : (
            <>
              <Button variant="contained" onClick={register}>
                I'd like to register for employee benefits
              </Button>
              <Typography css={{ marginTop: '1rem' }} align="center">
                OR
              </Typography>
            </>
          )}
        </Message>
      )}

      {!state.isRegistering && (
        <Message from="me">
          {state.sentBy != null ? (
            <>
              <Typography>
                I got sent here by {Offices[state.sentBy]}
              </Typography>
            </>
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
      )}

      {state.sentByResponse && (
        <>
          <Message from="them">
            <Typography>{state.sentByResponse}</Typography>
          </Message>

          <Message from="me">
            {state.withData ? (
              <Typography>
                I'm supposed to give you my {state.withData}
              </Typography>
            ) : (
              <>
                <Typography>I'm supposed to give you my...</Typography>
                <Autocomplete
                  css={{ width: '20rem', margin: '1rem 0' }}
                  disablePortal
                  options={allQuestions}
                  renderInput={(params) => (
                    <TextField {...params} label="..." />
                  )}
                  onChange={(_, v) => v && withData(v)}
                />
              </>
            )}
          </Message>
        </>
      )}

      {state.withDataResponse && (
        <>
          <Message from="them">
            <Typography>And that is?</Typography>
          </Message>

          <Message from="me">
            {state.whichIs ? (
              <Typography>It's {state.whichIs}</Typography>
            ) : (
              <>
                <Typography>It's...</Typography>
                <TextField
                  css={{ width: '20rem', margin: '1rem 0' }}
                  label="..."
                  onKeyDown={(e: any) => {
                    if (e.keyCode === 13) {
                      whichIs(e.target.value)
                    }
                  }}
                />
              </>
            )}
          </Message>
        </>
      )}

      {state.whichIsResponse && (
        <>
          <Message from="them">
            <Typography>{state.whichIsResponse}</Typography>
          </Message>

          <Message from="me">
            <Button variant="contained" onClick={reset}>
              Yeah, sure
            </Button>
          </Message>
        </>
      )}
    </>
  )
}

export default Office
