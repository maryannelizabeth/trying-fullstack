import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain="https://manaia-maryann.au.auth0.com"
      clientId="DMEeH4duKj3GdhUqrnnIa4siTx3iV9rl"
      redirectUri={window.location.origin}
      audience="https://classroomtoolbox/api"
    >
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
