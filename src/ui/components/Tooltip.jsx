import React, { useState } from 'react'

export const Tooltip = ({ text, children }) => {

    console.log(text);

    const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='tooltip-container text-center' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        { children }
        { isVisible && <div className="tooltip-text tooltip-bottom-left">{ text }</div>}
    </div>
  )
}
