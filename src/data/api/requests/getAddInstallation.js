import uuid from 'uuid';
import { installations  } from '../polling/getWithInstallations';

const getAddInstallation = () => {
  const addInstallation = ({ name, location }) => {
    installations.push({ name, location, uuid: uuid() });
  };

  return addInstallation;
};

export default getAddInstallation;

