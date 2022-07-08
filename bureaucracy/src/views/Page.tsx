import { Paper, Typography } from '@mui/material'

export default () => (
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

      <Paper
        css={{
          margin: '1rem',
          padding: '1rem',
          alignSelf: 'start',
        }}
      >
        <Typography>How can I help you today?</Typography>
      </Paper>
      <Paper
        css={{
          margin: '1rem',
          padding: '1rem',
          alignSelf: 'end',
        }}
      >
        <Typography>Flskdjflskdf sdf sdf </Typography>
      </Paper>
    </div>
  </div>
)
