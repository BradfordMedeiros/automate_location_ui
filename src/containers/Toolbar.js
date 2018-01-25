import React from 'react';
import { connect } from 'react-redux';
import ToolbarComponent from '../components/Toolbar/Toolbar';
import { setSelectedContent, setShowContentPanel } from './module';

const Toolbar = ({ selectedContent, onContentSelected, negativeWidth, style }) => (
  <ToolbarComponent
    options={['View Installations', 'Manage Installations', 'Misc']}
    selectedContent={selectedContent}
    onContentSelected={onContentSelected}
    negativeWidth={negativeWidth}
    style={style}
  />
);

const mapStateToProps = state => ({
  selectedContent: state.getIn(['reducer', 'selectedContent']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onContentSelected: content => {
    if (content === 'Misc'){
      dispatch(setShowContentPanel())
    }else{
      dispatch(setSelectedContent(content));
    }
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

