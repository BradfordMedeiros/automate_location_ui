import uuid from 'uuid';
import { installations } from '../polling/getWithInstallations';

const getAddInstallation = () => {
  const addInstallation = ({ name, location }) => {
    window.i = installations;
    installations.push({ name, location, uuid: uuid() });
  };

  return addInstallation;
};

export default getAddInstallation;