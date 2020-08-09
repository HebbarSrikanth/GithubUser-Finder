import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import UserInfo from './components/users/UserInfo';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './App.css'

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/user/:login" component={UserInfo} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;
