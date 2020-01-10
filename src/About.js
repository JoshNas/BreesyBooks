import React, { Component } from 'react';
import './About.css'
import { Slideshow } from './components/Slideshow'


export class About extends Component {
  render() {
    return (
      <div className="about">
      
          <div className="row top-section">
            <div className="col-md">
              <div id="about">
                <p className="lead">
                  Breesy Books makes having a reading group easier than ever! Simply invite your friends to a group and everyone can track their progress together.
                </p>
                <p className="lead">
                  With our App you can:
                </p>
                <p className="lead">
                  Search for books you're reading or listening to.
                </p>
                <p className="lead">
                  Easily update your progress.
                </p>
                <p className="lead">
                  Upload photos to group album.
                </p>
                <p className="lead">
                  Post thoughts or questions to group message board.
                </p>
              </div>
            </div>
            <div className="col-md">
              <Slideshow />
            </div>
          </div>

        <div className='parallax'></div>

        <div className="d-flex justify-content-around example-images">
          <div className="p-2 bd-highlight progress-example text-center">example of progress page</div>
          <div className="p-2 bd-highlight messageboard-example text-center">example message board</div>
        </div>

        <div className="d-flex justify-content-around example-images">
          <div className="p-2 bd-highligh search-example text-center">example of search page</div>
          <div className="p-2 bd-highlight start text-center">Get Started</div>
        </div>




      </div>
    )
  }
}
