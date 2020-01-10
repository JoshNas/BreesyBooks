import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { Home } from './Home'
import { Navbar } from './Navbar'
import { About } from './About'
import { GetBook } from './components/GetBook'
import { NewGroup } from './components/CreateGroup'
import './App.css'
import background from './img/background.jpg';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/newbook">
              <GetBook />
            </Route>
            <Route path="/newgroup">
              <NewGroup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>


    );
  }
}

const SignUpConfig = {
  header: 'Sign Up to join book clubs and track your reading!',
  hideAllDefaults: true,
  signUpFields: [
    { label: "Email", key: "email", required: true, type: "string" },
    { label: "Password", key: "password", required: true, type: "password" },
    { label: "Name", key: "name", required: true, type: "string" }
  ]
}

const MyTheme = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    paddingTop: 50},
  a: {color: "#007EB9"},
  button: { backgroundColor: "#527FFF" },
}

const Custom = {
  includeGreetings: false,
  theme: MyTheme,
  signUpConfig: SignUpConfig,
  usernameAttributes: 'email'
}

export default withAuthenticator(App, Custom);
