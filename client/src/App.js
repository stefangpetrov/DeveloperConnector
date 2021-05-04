import './App.css';
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layout/Alert'
//Redux
import { Provider } from 'react-redux'
import store from './store'


const App = () =>
  <div className="App">
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing}></Route>
          <section className="container">
            <Alert/>
            <Switch>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>


  </div>



export default App;
