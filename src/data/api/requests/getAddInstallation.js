import uuid from 'uuid';
import { installations, setInstallations  } from '../polling/getWithInstallations';

const getAddInstallation = () => {
  const addInstallation = ({ name, location }) => {
    installations.push({ name, location, uuid: uuid() });
    setInstallations(installations);
  };

  return addInstallation;
};

export default getAddInstallation;

