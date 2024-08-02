import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({component: Component, toolTipText, callBackFunc}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="tooltip-container" onClick={callBackFunc}>
      <Component 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className='.tooltip-container'/>
        {showTooltip && (
          <div className="tooltip">
            {toolTipText}
          </div>
        )}
    </div>
  );
};

export default Tooltip;
