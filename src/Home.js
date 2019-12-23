import React, { Component } from 'react';
import './Home.css'
import { Navbar } from './Navbar'


export class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Navbar />
        <div className="container justify-content-center">
          <div className="row">
            <div className="col-md rounded welcome">
              <p className="lead attributes text-center text-nowrap">Track your reading progress with your friends</p>
              <p className="lead attributes text-center text-nowrap">Keep track of books you'd like to read</p>
              <p className="lead attributes text-center text-nowrap">Rate books you've completed</p>
              <p className="lead attributes text-center text-nowrap">Get reccomendations from your books and groups!</p>
            </div>
            <div className="col-sm">
              <div className="row">
                <a href="https://books.joshnassif.com/" className="col-md rounded justify-content-center text-center display-4 findBooks">
                  Find a Book
                </a>
              </div>
              <div className="row ">
                <a href="https://books.joshnassif.com/" className="col-md rounded justify-content-center text-center display-4 findGroups">
                  Join a Group
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
