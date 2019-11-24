import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { SHOW_HIDE_MODAL } from '../../../store/actions/action_types';
import { openCloseModal } from '../../../store/actions/actions';
import { getConfig, getTrailerId } from '../../../store/selectors/movies'
import { getModalState } from '../../../store/selectors/utils'


const mapStateToProps = (state) => ({  videoId: getTrailerId(state), config: getConfig(state), showModal: getModalState(state)})

function Modal({ showModal, videoId, dispatch }){
    const onReady = (event) => event.target.pauseVideo();
    const showHideClassName = showModal ? "show" : "remove";
    const opts = {
        height: '500',
        width: '1080',
        playerVars: {
            autoplay: 1
        }
    }
    const handleShowHide = (payload, event) => {
      dispatch(openCloseModal({ type: SHOW_HIDE_MODAL, payload }))
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <YouTube 
          videoId={ videoId }
          opts={opts}
          onReady={ onReady } 
          />
          <div className="btn btn-play" onClick={ (event) => handleShowHide(false, event) }><span>close</span></div>
        </section>
      </div>
    );
  };

  export default connect(mapStateToProps, undefined)(Modal)