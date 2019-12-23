import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { Home } from './Home'
import './App.css'
import background from './img/background.jpg';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <Home />
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
