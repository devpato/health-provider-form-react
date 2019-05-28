import './status.css';
import React from 'react';
const Status = props => {
  if (props.status === 200) {
    return (
      <div className='status-passed'>
        <span className='message'>Provider Successfully Registered!</span>
        <i className='fas fa-check' />
      </div>
    );
  } else if (props.status > 200) {
    return (
      <div className='status-error'>
        <span className='message'>ERROR: Couldn't register new provider</span>
        <i className='fas fa-exclamation-circle' />
      </div>
    );
  } else {
    return null;
  }
};

export default Status;
