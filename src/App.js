import './App.css'

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import Login from './components/Login'

import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/ebank/login" component={Login} />
      <Route exact path="/" component={Home} />
      <NotFound />
    </Switch>
  </div>
)

export default App
