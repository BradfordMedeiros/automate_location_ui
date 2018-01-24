import React from 'react';
import './style.css';

const style = {
  background: 'black',
  border: '1px solid #1f1e1e',
};

const HelpInfo = ({ helpText, onCancel }) => (
  <div style={helpText && style} id="help_info">{helpText} {helpText && <div  onClick={onCancel} id="cancel_info">or cancel</div>}</div>
);

export default HelpInfo;