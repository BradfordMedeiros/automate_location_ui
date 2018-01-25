import React from 'react';
import { connect } from 'react-redux';
import ControlPanelComponent from '../components/ControlPanel/ControlPanel';
import WithData from '../data/WithData';

const WithInstallations = WithData.polling.WithInstallations;

const ControlPanel = props => (
  <WithInstallations>
    {({ data }) => {
      return (
        <ControlPanelComponent
          installations={data}
          onClick={installation => {
            console.log(installation);
          }}
          {...props}
        />
      )
    }}
  </WithInstallations>
);

const mapStateToProps = state => ({
  contentType: state.getIn(['reducer', 'selectedContent']),
});

export const container = connect(mapStateToProps)(ControlPanel);

