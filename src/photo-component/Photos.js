import React, {Component} from 'react';
import './Photos.css';

import bae from './photos/bae.jpg';
import baeq from './photos/baeq.jpg';
import bolando from './photos/bolando.jpg';
import couple from './photos/couple.jpg';
import lando from './photos/lando.jpg';
import karolina from './photos/karolina.jpg';
import up from './photos/up.jpg';


class Photos extends Component {
  images = [
    bae,
    baeq,
    bolando,
    couple,
    lando,
    karolina,
    up
  ];

  renderImage(image) {
    return (
      <div key={image}>
        <img src={image} alt={image} className="gallery-image"/>
      </div>
    );
  }

  render() {
    return (
      <div id="gallery">
        { this.images.map( (image) => this.renderImage(image) ) }
      </div>
    )
  }
}

export default Photos;
