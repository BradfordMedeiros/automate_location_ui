
import { installations } from '../polling/getWithInstallations';

const getAddInstallation = () => {
  const addInstallation = ({ name, location }) => {
    window.i = installations;
    installations.push({ name, location });
  };

  return addInstallation;
};

export default getAddInstallation;