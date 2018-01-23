
import { installations } from '../polling/getWithInstallations';

const getAddInstallation = () => {
  const addInstallation = name => {
    console.log('appending instlalations');
    installations.push(name);
  };

  return addInstallation;
};

export default getAddInstallation;