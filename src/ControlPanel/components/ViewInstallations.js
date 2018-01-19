
import React from 'react';

const installations = [
  'Installation 1',
  'osme other one',
  'yes yet another',
];

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
  }
};

const ViewInstallations = ({ onClick }) => (
  <div>
    {installations.map(installation => (
      <div
        style={styles.installation}
        onClick={() => {
          onClick(installation)
        }}>{installation}
      </div>
    ))}
  </div>
);

export default ViewInstallations;