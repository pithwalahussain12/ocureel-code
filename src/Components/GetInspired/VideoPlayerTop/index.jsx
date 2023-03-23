import React from 'react';
import Vimeo from '@vimeo/player';
import Card from '../Card/index';
import "./style.css"

class VimeoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.vimeoPlayer = React.createRef();
  }

  componentDidMount() {
    const options = {
      id: this.props.videoId,
      width: 300,
      height: 540,

      autoplay: false,
      portrait: true,
    };
    this.player = new Vimeo(this.vimeoPlayer.current, options);
  }

  render() {
    return (
      <div className='vimeo__container'>
        <div ref={this.vimeoPlayer} className="player" />
        <Card title={this.props.cardTitle} place={this.props.place}/>
      </div>

    );
  }
}

export default VimeoPlayer;
