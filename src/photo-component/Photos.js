import React, {Component} from 'react';
import './Photos.css';

import bae from './photos/bae.jpg';
import baeq from './photos/baeq.jpg';
import bolando from './photos/bolando.jpg';
import couple from './photos/couple.jpg';
import lando from './photos/lando.jpg';
import karolina from './photos/karolina.jpg';
import up from './photos/up.jpg';
import dog from './photos/dog.jpg';
import boats from './photos/boats.jpg';
import cake from './photos/cake.jpg';




class Photos extends Component {
  images = [
    karolina,
    up,
    bae,
    couple,
    cake,
    baeq,
    bolando,
    lando,
    dog,
    boats
  ];

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      itemsPerPage: 5
    }
  }

  handleOffsetClick(i) {
    let newOffset = this.state.offset + i * this.state.itemsPerPage;
    if (newOffset < 0) {
      newOffset = 0;
    }
    if (newOffset >= this.images.length) {
      newOffset = this.images.length - this.state.itemsPerPage;
    }
    console.log(newOffset);
    this.setState({offset: newOffset});
  }

  renderImage(image) {
    return (
      <div key={image}>
        <img src={image} alt={image} className="gallery-image"/>
      </div>
    );
  }

  renderButtons() {
    if (this.images.length > this.state.itemsPerPage) {
      return (
        <div id="pagination">
          <a href="#" className="previous round"
            onClick={() => this.handleOffsetClick(-1)}
            disabled={this.state.offset - this.state.itemsPerPage < 0}>&#8249;</a>
          <a href="#" className="next round"
            onClick={() => this.handleOffsetClick(1)}
            disabled={this.state.offset + this.state.itemsPerPage >= this.images.length}>&#8250;</a>
        </div>
      );
    }
    return;
  }

  render() {
    let imageArray = this.images
      .slice(this.state.offset, this.state.offset + this.state.itemsPerPage);
    return (
      <div id="gallery">
        {
          imageArray.map(image => this.renderImage(image))
        }
        { this.renderButtons() }
      </div>
    )
  }
}

export default Photos;
