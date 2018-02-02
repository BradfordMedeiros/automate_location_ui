import React from 'react';
import { connect } from 'react-redux';
import ToolboxComponent from '../components/Toolbox/Toolbox';
import { setMode } from './module';

const Toolbox = ({ mode, modeActions, onSetMode }) => {
  const options = modeActions ? modeActions.options : { };
  const selectedStage = options.selected;

  return (
    <ToolboxComponent
      selectedTool={selectedStage}
      onToolChange={tool => {
        const newActions = { ...modeActions };   // @todo should probably use immutable here
        newActions.options = {
          selected: tool,
        };
        onSetMode(mode, newActions);
      }}
      isVisible={mode === 'edit_installation:0'}
    />
  );
}

const mapStateToProps = state => ({
  mode: state.getIn(['reducer', 'mode']),
  modeActions: state.getIn(['reducer', 'modeActions']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetMode: (mode, modeActions) => {
    dispatch(setMode(mode, modeActions));
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Toolbox);

