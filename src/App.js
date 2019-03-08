import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
// 导入组件库的样式
import 'semantic-ui-css/semantic.min.css'

import Login from './Login'
import Main from './module/Main'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Main} />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App
