import { Link, Stack, Typography } from '@mui/material'
import { Link as A } from 'react-router-dom'
import { Offices } from '../funcs/logic'

const BackOffice = () => (
  <div
    css={{
      margin: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
      textAlign: 'center',
    }}
  >
    <Typography>
      Hey, what are you doing back here? You should go to one of the public
      facing desks.
    </Typography>
    <Stack spacing={2}>
      {Object.values(Offices)
        .filter((v) => isNaN(Number(v)))
        .map((office: string) => (
          <Link>
            <A to={office}>{office}</A>
          </Link>
        ))}
    </Stack>
  </div>
)

export default BackOffice
