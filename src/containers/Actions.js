
import React from 'react';
import ActionsComponent from '../components/Actions/Actions';
import { connect } from 'react-redux';
import { setMode, setToggleContentPanel, setContentPanelContent } from './module';
import NameDialog from '../components/NameDialog/NameDialog';



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
          const cancel =  () => onExpandContentPanel();
          const data = [];
          onSetMode('add_installation', {
            next: name => {
              console.log('set with name: ', name);
              onSetMode('add_installation:1', {
                next: location => {
                  console.log('inner next');
                  data.push(location);
                },
                cancel,
              })
            },
            cancel,
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
    dispatch(setContentPanelContent(
      <NameDialog />
    ));
    dispatch(setToggleContentPanel());
  },
  onSetMode: (mode, modeActions) => {
    dispatch(setMode(mode, modeActions));
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Actions);

