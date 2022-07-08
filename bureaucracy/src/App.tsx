import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Page from './views/Page'

const theme = responsiveFontSizes(createTheme())

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route
              index
              element={
                <div>
                  What are you doing here? Go back to the public area please,
                  this is staff only.
                </div>
              }
            />
          </Route>
          <Route path="test" element={'Testing testing'} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
