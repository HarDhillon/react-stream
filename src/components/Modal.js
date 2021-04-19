import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={ () => history.push('/') } className="ui dimmer modals visible active">
      {/* we stop propogation so that if you click on modal it doesnt also history push */}
      <div onClick={(e) => e.stopPropagation} className="ui standard modal visible active">

        <div className="header">
          Delete Stream
        </div>

        <div className="content">
          Are you sure you want to delete this stream?
        </div>

        <div className="actions">

          <button className="ui button">
            Cancel
          </button>

          <button className="ui red button">
            Delete
          </button>

        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal; 