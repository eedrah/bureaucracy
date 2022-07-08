import { Paper, Typography } from '@mui/material'

export default () => (
  <div
    css={{
      minHeight: '100vh',
      backgroundColor: 'hsl(200, 70%, 60%)',
    }}
  >
    <header
      css={{
        padding: '10vh 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper>
        <Typography css={{ padding: '2rem' }} variant="h1">
          Reception
        </Typography>
      </Paper>
    </header>
  </div>
)
