import React from 'react';
import { connect } from 'react-redux';
import ContentPanelComponent from '../components/ContentPanel/ContentPanel';

const ContentPanel = ({ content, isExpanded, style }) => (
  <ContentPanelComponent content={content} isExpanded={isExpanded} style={style} />
);

const mapStateToProps = state => ({
  isExpanded: state.getIn(['reducer', 'isContentPanelExpanded']),
  content: state.getIn(['reducer', 'contentPanelContent']),
});

export const container = connect(mapStateToProps)(ContentPanel);



