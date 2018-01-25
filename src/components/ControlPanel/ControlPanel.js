import React, { Component } from 'react';

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
  },
  installation: {
    background: 'black',
    color: 'whitesmoke',
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    padding: 18,
    border: '1px solid rgba(210,210,210,0.1)',
    cursor: 'pointer',
    fontFamily: 'courier',
    overflowX: 'auto',
  }
};


class ControlPanel extends Component {
  render() {
    const {contentType, onClick, installations, style} = this.props;
    return (
      <div style={{...style, ...styles.outer }}>
        <div style={styles.title}>{contentType}</div>
        <div>
          {installations.map(installation => (
            <div
              style={styles.installation}
              onClick={() => {
                onClick(installation)
              }}>
              {installation.name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ControlPanel;