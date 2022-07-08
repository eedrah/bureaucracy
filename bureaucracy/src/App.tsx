import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Page from './views/Page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route
            index
            element={
              <div>
                What are you doing here? Go back to the public area please, this
                is staff only.
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
