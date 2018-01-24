
import React from 'react';
import './style.css';

const ContentPanel = ({ content, isExpanded, style }) => (
  <div
    style={{animation: isExpanded ? 'panel_expand 0.2s forwards' : 'panel_nonexpand 0.2s forwards', color: 'white', ...style}}
    id="content_panel">
    {isExpanded && content}
  </div>
);

export default ContentPanel;