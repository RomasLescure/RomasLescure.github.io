import React from 'react'
import './assets/css/PopUp'
const PopUp = (props) => {
    


  return (props.trigger) ? (
    <div className="popup">
      <div className='popup-inner'>
        <button className='colse-btn'onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>

    </div>
  ) : "";
}

export default PopUp