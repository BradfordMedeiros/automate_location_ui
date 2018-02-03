import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToolboxComponent from '../components/Toolbox/Toolbox';
import { setMode } from './module';

class Toolbox extends Component {
  state = {
    showDetailView: true,
  };
  render() {
    const { mode, modeActions, onSetMode } = this.props;
    const options = modeActions ? (modeActions.options || { }) : { };
    const selectedStage = options.selected;

    return (
      <ToolboxComponent
        isVisible={mode === 'edit_installation:0'}
        showDetailView={this.state.showDetailView}
        selectedTool={selectedStage}
        onToolChange={tool => {
          if (selectedStage === tool){
            this.setState({
              showDetailView: !this.state.showDetailView,
            });
          }else {
            const newActions = { ...modeActions };   // @todo should probably use immutable here
            newActions.options = {
              selected: tool,
            };
            onSetMode(mode, newActions);
            this.setState({
              showDetailView: true,
            });
          }
        }}
      />
    )
  }
};

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

