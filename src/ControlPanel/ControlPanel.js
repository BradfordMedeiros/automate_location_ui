import React, { Component } from 'react';
import ViewInstallations from './components/ViewInstallations';

const styles = {
  outer: {
    background: 'linear-gradient(rgba(10,10,10,0.5), rgba(10,10,10,0.8))',
    boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 18,
    display: 'flex',
    justifyContent: 'center',
    background: 'rgb(30,30,30)',
    color: 'rgb(30,30,30)',
    padding: 20,
  }
};


const jumpToInstallation = () => {
  console.log('jump to installation placeholder');
};

const jumpToAutomate = installationName => {
  console.log('jump to automate');
  window.location = 'http://localhost:3000';
};

const contentInstallationMap = {
  'View Installations': <ViewInstallations onClick={jumpToInstallation} />,
  'Manage Installation': <ViewInstallations />,
  'Jump To Automate': <ViewInstallations onClick={jumpToAutomate} />,
};

class ControlPanel extends Component {
  render() {
    const {contentType, style} = this.props;
    return (
      <div style={{...style, ...styles.outer }}>
        <div style={styles.title}>{contentType}</div>
        {contentInstallationMap[contentType]}
      </div>
    )
  }
}

export default ControlPanel;