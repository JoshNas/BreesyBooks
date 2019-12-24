import React, { Component } from 'react';
import './Home.css'
import { Navbar } from './Navbar'
import book from './img/book.png'


export class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Navbar />
        <div className="container justify-content-center">
          <div className="row">
            <div className="col-md">
              <img className="img-fluid book" src={book} alt="book"/>
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
