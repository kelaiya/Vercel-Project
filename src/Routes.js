import React, {Component} from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import App from './App'
import Projects from './Projects'
import Connect from './Connect'
// import { CompatRouter } from "react-router-dom-v5-compat";

/**
 * COMPONENT
 */
export default class Routes extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={App} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/connect" component={Connect} />
        </Switch>
      </BrowserRouter>
    )
  }
}


