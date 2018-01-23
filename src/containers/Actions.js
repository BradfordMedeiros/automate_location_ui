
import React from 'react';
import ActionsComponent from '../components/Actions/Actions';
import { connect } from 'react-redux';
import { setMode, setToggleContentPanel } from './module';
import WithData from '../data/WithData';

const addInstallation = WithData.requests.addInstallation;


const Actions = ({ selectedContent, negativeWidth, onSetMode, onExpandContentPanel }) => {
  const actionMap = {
    'View Installations': [
      {
        name: 'Goto on Map',
        onClick: () => console.log('go to map'),
      },
      {
        name: 'Summary Info',
        onClick: () => console.log('summary info'),
      },
      {
        name: 'Jump To Automate',
        onClick: () => console.log('jump to automate'),
      },
    ],
    'Manage Installations': [
      {
        name: 'Add New',
        onClick: () => {
          console.log('add new');
          //addInstallation('hello');
          onExpandContentPanel();
          onSetMode('add_installation', {
            setLocation: () => {
              console.log('set location');
            },
            cancel: () => {
              console.log('cancel add mode');
            },
          });
        },
      },
      {
        name: 'Edit Layout'
      },
      {
        name: 'Edit Data Sources'
      },
      {
        name: 'Delete Selected'
      },
    ],
    'Misc': [],
  };

  return (
    <ActionsComponent
      negativeWidth={negativeWidth}
      options={actionMap[selectedContent] || []}
    />
  );
}


const mapStateToProps = state => ({
  selectedContent: state.getIn(['reducer', 'selectedContent']),
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  onExpandContentPanel: () => {
    dispatch(setToggleContentPanel());
  },
  onSetMode: mode => {
    dispatch(setMode(mode));
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Actions);

