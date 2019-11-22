import React from 'react';
import YouTube from 'react-youtube';

const Modal = ({ handleClose, show, videoId }) => {
    const onReady = (event) => event.target.pauseVideo();
    const showHideClassName = show ? "show" : "remove";
    const opts = {
        height: '800',
        width: '1080',
        playerVars: {
            autoplay: 1
        }
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <YouTube 
          videoId={ videoId }
          opts={opts}
          onReady={ onReady } 
          />
          <div className="btn btn-play" onClick={ (e) => (handleClose, onReady.call(this, e)) }><span>close</span></div>
        </section>
      </div>
    );
  };

  export default Modal