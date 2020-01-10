import React, { Component } from 'react';
import './Home.css'
import book from './img/book.png'


export class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="container justify-content-center">
          <div className="row">
            <div className="col-md">
              <img className="img-fluid book" src={book} alt="book" id="homeBook"/>
            </div>
            <div className="col-sm">
              <div className="row">
                <a href="/newbook" className="col-md rounded justify-content-center text-center display-4 findBooks">
                  Find a Book
                </a>
              </div>
              <div className="row ">
                <a href="/newgroup" className="col-md rounded justify-content-center text-center display-4 findGroups">
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
