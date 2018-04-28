import React from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';


class Raptools extends React.Component {
  constructor() {
    super();
    this.state = {
      optsHere: {
        height: '258',
        width: '422',
      },
      rhymeSet: {coreWord: 'paused', rhymeSet: ['one', 'two', 'three', 'four'] },
      lengthBetween: 3000,
      rhymeInterval: null,
      running: false,
      buttonWord: 'Play',
    };
    this.getRhymes = this.getRhymes.bind(this);
    this.changeRunningState = this.changeRunningState.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
  };

  getRhymes() {
    console.log(this.state.lengthBetween)
    axios.get('/getRhyme')
    .then ((response) =>{
      this.setState({rhymeSet: response.data[0]})
    })
    .catch( (error) =>{
      console.log(error)
    })
  };

  changeRunningState() {
    if (this.state.running === false ){
      this.getRhymes();
      this.setState({rhymeInterval: setInterval(this.getRhymes, this.state.lengthBetween), buttonWord: 'Pause'})
    } else {
      clearInterval(this.state.rhymeInterval)
      this.setState({buttonWord: 'Play'})
    }
    this.setState({running: !this.state.running})
  }

  changeSpeed(direction) {
    clearInterval(this.state.rhymeInterval)
    if (direction === 'decrease'){
      this.setState({lengthBetween: this.state.lengthBetween+500})
    }
    if (direction === 'increase'){
      this.setState({lengthBetween: this.state.lengthBetween-500})
    }
    this.setState({rhymeInterval: setInterval(this.getRhymes, this.state.lengthBetween)})
  }

  render(){

    return (
      <div>
        <div className="main-flexbox-inner-pages">
          <div className="rap-tool-main-flex">
            <div className="rap-tool__title">
              Rap Better Rap Tool
            </div>
            <div className="rap-tool__word">
              <div>{this.state.rhymeSet.coreWord}</div>
            </div>
            <div className="rap-tool__rhyme-helpers">
              <div className="rap-tool__words__specific-word">
                <div>{this.state.rhymeSet.rhymeSet[0]}</div>
              </div>
              <div className="rap-tool__words__specific-word">
                <div>{this.state.rhymeSet.rhymeSet[1]}</div>
              </div>
              <div className="rap-tool__words__specific-word">
                <div>{this.state.rhymeSet.rhymeSet[2]}</div>
              </div>
              <div className="rap-tool__words__specific-word">
                <div>{this.state.rhymeSet.rhymeSet[3]}</div>
              </div>
            </div>
            <div className="rap-tool__control-buttons">
              <div className="rap-tool__control-buttons__specific-button" onClick={this.changeRunningState.bind(this)}>
                {this.state.buttonWord}
              </div>
              <div className="rap-tool__control-buttons__specific-button" onClick={() => this.changeSpeed('increase')}>
                FASTER
              </div>
              <div className="rap-tool__control-buttons__specific-button" onClick={() => this.changeSpeed('decrease')}>
                SLOWER
              </div>
            </div>
            <div className="rap-tool__music-video">
              <YouTube
                videoId="R-htXEscocE"
                opts={this.optsHere}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default Raptools;