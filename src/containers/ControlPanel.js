import React from 'react';
import { connect } from 'react-redux';
import ControlPanelComponent from '../components/ControlPanel/ControlPanel';
import WithData from '../data/WithData';

const WithInstallations = WithData.polling.WithInstallations;

const ControlPanel = ({ contentType, selectedInstallation, style }) => (
  <WithInstallations>
    {({ data }) => {
      return (
        <ControlPanelComponent
          style={style}
          selectedInstallation={selectedInstallation}
          installations={data}
          contentType={contentType}
          onClick={installation => {
            console.log(installation);
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

export const container = connect(mapStateToProps)(ControlPanel);

