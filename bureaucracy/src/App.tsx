import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Page from './views/Page'

const theme = responsiveFontSizes(createTheme())

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
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
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
