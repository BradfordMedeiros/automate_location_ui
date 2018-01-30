import getWithInstallations from './polling/getWithInstallations';
import getAddInstallation from './requests/getAddInstallation';
import getDeleteInstallation from './requests/getDeleteInstallation';

const generateWithData = ({ configUrl }) => {
  const withData = {
    requests: {
      addInstallation: getAddInstallation(configUrl),
      deleteInstallation: getDeleteInstallation(configUrl),
    },
    polling: {
      WithInstallations: getWithInstallations(configUrl),
    },
  };
  return withData;
};

export default generateWithData;

