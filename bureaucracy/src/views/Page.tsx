import { Outlet } from 'react-router-dom'

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
      <Outlet />
    </div>
  </div>
)

export default Page
