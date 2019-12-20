import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './Home.css'
import { Navbar } from './Navbar'
import { Auth } from 'aws-amplify';

export class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Navbar />
        <Header as='h1'>Hello Books!</Header>
        <p>WELCOME TO BOOKS</p>
      </div>
    );
  }
}
