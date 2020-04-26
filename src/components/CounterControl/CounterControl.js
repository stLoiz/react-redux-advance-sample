import React from 'react';

import './CounterControl.css';

const counterControl = ({ clicked, label }) => (
  <div className="CounterControl" onClick={clicked}>
    {label}
  </div>
);

export default counterControl;
