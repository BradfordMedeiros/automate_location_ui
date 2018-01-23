
import React from 'react';

const styles = {
  installation : {
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

const ViewInstallations = ({ installations, onClick }) => (
  <div>
    {installations.map(installation => (
      <div
        style={styles.installation}
        onClick={() => {
          onClick(installation)
        }}>
        {installation}
      </div>
    ))}
  </div>
);

export default ViewInstallations;