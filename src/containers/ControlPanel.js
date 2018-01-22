import React from 'react';
import { connect } from 'react-redux';
import ControlPanelComponent from '../components/ControlPanel/ControlPanel';

const ControlPanel = props => <ControlPanelComponent {...props} />;

const mapStateToProps = state => ({
  contentType: state.getIn(['reducer', 'selectedContent']),
});

export const container = connect(mapStateToProps)(ControlPanel);

