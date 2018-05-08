import React from 'react';

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="jumbotron">

        <div className="jumbotron-form-wrapper">
          <input 
            placeholder="Enter a word to rhyme"
            onChange={e => console.log(e.target.value)}
          />
        </div>

      </div>

    );

  }
}