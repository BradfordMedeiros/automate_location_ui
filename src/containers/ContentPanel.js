import React from 'react';
import { connect } from 'react-redux';
import ContentPanelComponent from '../components/ContentPanel/ContentPanel';

const ContentPanel = ({ isExpanded, style }) => (
  <ContentPanelComponent isExpanded={isExpanded} style={style} />
);

const mapStateToProps = state => ({
  isExpanded: state.getIn(['reducer', 'isContentPanelExpanded']),
});

export const container = connect(mapStateToProps)(ContentPanel);



