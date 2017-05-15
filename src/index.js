import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Photos from './photo-component/Photos';
import Footer from './footer/Footer';

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Photos offset="5" itemsPerPage="5"/>,
  document.getElementById('root-photo')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('root-footer')
);
