import React from 'react';
import HelpInfoComponent from '../components/HelpInfo/HelpInfo';
import { connect } from 'react-redux';
import { cancelMode } from './module';

const ModeToHelpInfoMap = {
  'add_installation:0': "Adding installation, choose a name for the installation and click submit (1/2)",
  'add_installation:1': "Adding installation, click a point on the map to choose a location (2/2)",
  'add_installation:success': "Add Installation Successful (Complete)",
};

const HelpInfo = ({ mode, onCancel }) => <HelpInfoComponent helpText={ModeToHelpInfoMap[mode]} onCancel={onCancel} />;

const mapStateToProps = state => ({
  mode: state.getIn(['reducer', 'mode']),
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancel: () => {
    dispatch(cancelMode());
  }
});


export const container = connect(mapStateToProps,  mapDispatchToProps)(HelpInfo);



