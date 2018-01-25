import React from 'react';
import { connect } from 'react-redux';
import ControlPanelComponent from '../components/ControlPanel/ControlPanel';
import WithData from '../data/WithData';
import { setSelectedInstallation } from './module';

const WithInstallations = WithData.polling.WithInstallations;

const ControlPanel = ({
  contentType,
  selectedInstallation,
  onSetSelectedInstallation,
  style
}) => (
  <WithInstallations>
    {({ data }) => {
      return (
        <ControlPanelComponent
          style={style}
          selectedInstallation={selectedInstallation}
          installations={data}
          contentType={contentType}
          onClick={installation => {
            onSetSelectedInstallation(installation);
          }}
        />
      )
    }}
  </WithInstallations>
);

const mapStateToProps = state => ({
  contentType: state.getIn(['reducer', 'selectedContent']),
  selectedInstallation: state.getIn(['reducer', 'selectedInstallation']),
});

const mapDispatchToProps = dispatch => ({
  onSetSelectedInstallation: installation => dispatch(setSelectedInstallation(installation)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

