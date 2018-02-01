
import React from 'react';
import ActionsComponent from '../components/Actions/Actions';
import { connect } from 'react-redux';
import { setMode, setShowContentPanel, setContentPanelContent, advanceStep } from './module';
import NameDialog from '../components/NameDialog/NameDialog';
import WithData from '../data/WithData';

const addInstallation = WithData.requests.addInstallation;
const deleteInstallation = WithData.requests.deleteInstallation;

const Actions = ({
  onGoToOnMap,
  onGoToDefaultLocation,
  onSetLocationAsDefault,
  onJumpToAutomate,
  selectedContent,
  negativeWidth,
  onSetMode,
  onExpandContentPanel,
  hideContentPanel,
  advanceStep,
  selectedInstallation,
}) => {
  const actionMap = {
    'View Installations': [
      {
        name: 'Goto on Map',
        onClick: onGoToOnMap,
      },
      {
        name: 'Summary Info',
        onClick: () => console.log('summary info'),
      },
      {
        name: 'Jump To Automate',
        onClick: onJumpToAutomate,
      },
    ],
    'Manage Installations': [
      {
        name: 'Add New',
        onClick: () => {
          const data = {};
          const cancel = hideContentPanel;
          onExpandContentPanel(<NameDialog instructions="enter name of the installation" onSubmit={advanceStep}/>);
          onSetMode('add_installation:0', {
            next: name => {
              data.name = name;
              hideContentPanel();
              onSetMode('add_installation:1', {
                next: location => {
                  data.location = location;
                  onSetMode('add_installation:success');
                  addInstallation(data);
                  setTimeout(() => onSetMode('default'), 3000);
                },
                cancel,
              })
            },
            cancel,
          });
        },
      },
      {
        name: 'Edit Layout',
        onClick: () => {
          onSetMode('edit_installation:0', {
            next: () => {
              console.error('next called');
            },
            cancel: () => {
              console.error('cancel called');
            }
          });
        }
      },
      {
        name: 'Edit Data Sources'
      },
      {
        name: 'Delete Selected',
        onClick: () => {
          deleteInstallation(selectedInstallation);
        }
      },
    ],
    'Misc': [
      {
        name: 'Set Location as Default',
        onClick: onSetLocationAsDefault,
      },
      {
        name: 'Goto Default Location',
        onClick: onGoToDefaultLocation,
      }
    ],
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
  selectedInstallation: state.getIn(['reducer', 'selectedInstallation']),
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  advanceStep: payload => dispatch(advanceStep(payload)),
  onExpandContentPanel: content => {
    dispatch(setContentPanelContent(content));
    dispatch(setShowContentPanel(true));
  },
  hideContentPanel: () =>  {
    dispatch(setShowContentPanel(false));
    dispatch(setContentPanelContent(null));
  },
  onSetMode: (mode, modeActions) => {
    dispatch(setMode(mode, modeActions));
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Actions);

