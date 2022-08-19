import React from 'react';
import './Heading.css'

const Heading = (props) => {
  return (
    <div className="input-heading-os">
      {props.tab_heading}
    </div>

    // <div className='main-top-heading'>
    //     <h3>{props.heading}</h3>
    // </div>
  )
}

export default Heading;