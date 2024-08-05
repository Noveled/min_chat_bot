import React, { useState } from 'react';
import './Tooltip.css';

const MenuBox = ({component: Component, toolTipText, callBackFunc, setStyle}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="tooltip-container" onClick={callBackFunc}>
      
      <Component 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className='.tooltip-container' style={setStyle}/>
        {showTooltip && (
          <div className="tooltip">
            {toolTipText}
          </div>
        )}
    </div>
  );
};

export default MenuBox;
