import React from 'react'
import ReactDOM from 'react-dom'
import './sass/index.scss'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { AppRouterConfig } from './core/routers/AppRouterConfig'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {AppRouterConfig.map((e, index) => (
          <Route
            path={e.path}
            exact={e.exact}
            component={e.component}
            key={index}
          />
        ))}
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
)
