import getWithInstallations from './polling/getWithInstallations';
import getAddInstallation from './requests/getAddInstallation';
import getDeleteInstallation from './requests/getDeleteInstallation';
import setDefaultLocation from './requests/setDefaultLocation';
import getDefaultLocation from './requests/getDefaultLocation';

const generateWithData = ({ configUrl }) => {
  const withData = {
    requests: {
      addInstallation: getAddInstallation(configUrl),
      deleteInstallation: getDeleteInstallation(configUrl),
      setDefaultLocation,
      getDefaultLocation,
    },
    polling: {
      WithInstallations: getWithInstallations(configUrl),
    },
  };
  return withData;
};

export default generateWithData;

