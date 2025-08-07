import React from 'react';

const LegendBox = ({ label, children, style }) => {
  return (
    <fieldset className="legend-box" style={style}>
      <legend className="legend-title">{label}</legend>
      <div className="legend-content">{children}</div>
    </fieldset>
  );
};

export default LegendBox;
