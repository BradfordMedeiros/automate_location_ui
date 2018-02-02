import React, { Component } from 'react';

const styles = {
  outer: {
    background: 'linear-gradient(rgba(10,10,10,0.8), rgba(0,0,0,0.8))',
    boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.5)',
    zIndex: 200,
  },
  installation: isSelected => ({
    color: 'whitesmoke',
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    padding: 18,
    border: isSelected ? '1px solid whitesmoke' : '1px solid rgba(0,0,0,0.5)',
    cursor: 'pointer',
    fontFamily: isSelected ? 'arial' : 'courier',
    overflowX: 'auto',
  }),
};


class ControlPanel extends Component {
  render() {
    const {onClick, installations, selectedInstallation, style} = this.props;
    return (
      <div style={{...style, ...styles.outer}}>
        {installations.map(installation => {
          const isSelected = selectedInstallation ? (installation.uuid === selectedInstallation.uuid) : false;
          return (
            <div
              style={styles.installation(isSelected)}
              onClick={() => {
                onClick(installation)
              }}>
              {installation.name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ControlPanel;