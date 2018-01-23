import React from 'react';
import './style.css';

const HelpInfo = ({ helpText, onCancel }) => (
  <div id="help_info">{helpText} {helpText && <div  onClick={onCancel} id="cancel_info">or cancel</div>}</div>
);

export default HelpInfo;