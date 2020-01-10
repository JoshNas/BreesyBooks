import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slideshow.css'
import friends from '../img/friends.jpg'
import friends1 from '../img/friends1.jpg'
import friends2 from '../img/friends2.jpg'
import friends3 from '../img/friends3.jpg'

const fadeImages = [
  friends,
  friends1,
  friends2,
  friends3
];

const quotes = [
  "We should go inside where its warm!",
  "Breesy Books gives us the experience of a full reading group, but without having to directly interact with them!",
  "I like reading in boats!",
  "I have read every one of these books! Now I have so much time I organized them in to a circle."
]

const writer = [
  "Cold Ladies",
  "Happy Friends",
  "Boat Lady",
  "Book Shop Owner"
]

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
}

export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade round">
          <div className="image-container">
            <img className="img img-fluid" src={fadeImages[0]} alt="slideshow one"/>
          </div>
          <blockquote class="blockquote">
            <p class="mb-0">{quotes[0]}</p>
            <footer class="blockquote-footer">{writer[0]}</footer>
          </blockquote>
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="slideshow two"/>
          </div>
          <blockquote class="blockquote">
          <p class="mb-0">{quotes[1]}</p>
          <footer class="blockquote-footer">{writer[1]}</footer>
          </blockquote>
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="slideshow three" />
          </div>
          <blockquote class="blockquote">
          <p class="mb-0">{quotes[2]}</p>
          <footer class="blockquote-footer">{writer[2]}</footer>
          </blockquote>
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt="slideshow four" />
          </div>
          <blockquote class="blockquote">
          <p class="mb-0">{quotes[3]}</p>
          <footer class="blockquote-footer">{writer[3]}</footer>
          </blockquote>
        </div>
      </Fade>
    </div>
  )
}
