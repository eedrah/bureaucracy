import { Outlet } from 'react-router-dom'

const Page = () => (
  <div
    css={{
      minHeight: '100vh',
      backgroundColor: 'hsl(200, 40%, 60%)',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      css={{
        maxWidth: '50rem',
        minWidth: '30rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Outlet />
    </div>
  </div>
)

export default Page
