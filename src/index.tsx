import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'

import App from './App'
import store from '@/store'
import { theme, muiTheme } from '@/assets/theme'
import 'normalize.css'
import '@/assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <HashRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={muiTheme}>
              <App />
            </MuiThemeProvider>
          </ThemeProvider>
        </Provider>
      </HashRouter>
    </Suspense>
  </React.StrictMode>
)
