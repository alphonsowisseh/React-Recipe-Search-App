import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from '../App'
import Recipe from './Recipe'

function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App}></Route>
            <Route path="/recipe" component={Recipe}></Route>
        </Switch>
    </BrowserRouter>
  )
}

export default Router;