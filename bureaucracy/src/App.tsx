import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { HashRouter, Routes, Route } from 'react-router-dom'

import { Offices } from './hooks/useOffice'
import Office from './views/Office'
import Page from './views/Page'

const theme = responsiveFontSizes(createTheme())

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Office office={Offices.Reception} />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
