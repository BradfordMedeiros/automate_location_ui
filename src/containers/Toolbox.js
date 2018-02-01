import React from 'react';
import { connect } from 'react-redux';
import ToolboxComponent from '../components/Toolbox/Toolbox';

const Toolbox = ({ mode  }) => (
  <ToolboxComponent isVisible={mode === 'edit_installation:0'} />
);

const mapStateToProps = state => ({
  mode: state.getIn(['reducer', 'mode']),

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export const container = connect(mapStateToProps, mapDispatchToProps)(Toolbox);

