import React,{Component} from 'react';
import './Footer.css';

class Footer extends Component {
  links = [
    { "github": "https://github.com/relmgren" },
    { "twitter": "https://twitter.com/relmgren" },
    { "linkedin": "https://se.linkedin.com/in/rasmus-elmgren-a2663595" },
    { "portfolio": "http://relmgren.com" }
  ];

  renderLink(link) {
    var key = Object.keys(link);
    var value = Object.values(link);

    return <a href={value} key={key}>{key}</a>;
  }

  render() {
    return (
      <div id="footer">
        { this.links.map( link => this.renderLink(link) ) }
      </div>
    )
  }
}

export default Footer;
