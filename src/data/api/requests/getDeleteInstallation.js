import { installations, setInstallations  } from '../polling/getWithInstallations';

const getDeleteInstallation = () => {
  const deleteInstallation = ({ name, location, uuid }) => {
    const newInstallations = installations.filter(installation => installation.uuid !== uuid);
    setInstallations(newInstallations);
  };

  return deleteInstallation;
};

export default getDeleteInstallation;