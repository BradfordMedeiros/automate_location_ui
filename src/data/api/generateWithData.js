import getWithInstallations from './polling/getWithInstallations';
import getAddInstallation from './requests/getAddInstallation';

const generateWithData = ({ configUrl }) => {
  const withData = {
    requests: {
      addInstallation: getAddInstallation(configUrl),
    },
    polling: {
      WithInstallations: getWithInstallations(configUrl),
    },
  };
  return withData;
};

export default generateWithData;

