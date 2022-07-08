import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Offices } from './funcs/logic'

import Office from './views/Office'
import Page from './views/Page'
import BackOffice from './views/BackOffice'

const theme = responsiveFontSizes(createTheme())

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<BackOffice />} />
            <Route
              path={Offices[Offices.Reception].toLocaleLowerCase()}
              element={<Office office={Offices.Reception} />}
            />
            <Route
              path={Offices[Offices.HR].toLocaleLowerCase()}
              element={<Office office={Offices.HR} />}
            />
            <Route
              path={Offices[Offices.Stationary].toLocaleLowerCase()}
              element={<Office office={Offices.Stationary} />}
            />
            <Route
              path={Offices[Offices.IT].toLocaleLowerCase()}
              element={<Office office={Offices.IT} />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
