console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage.jsx';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Homepage),
    document.getElementById('mount')
  );
});