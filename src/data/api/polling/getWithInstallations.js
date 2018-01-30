import { Component, PropTypes } from 'react';

export let installations = [
  { name: 'test', location: { latitude: 34, longitude: 32}, uuid : 'apple' },
];
export const setInstallations = newInstallations => {
  installations = newInstallations;
};


const getWithInstallations = (AUTOMATE_CORE_URL) => {
  // for now until we have backend, should definitely not do this,

  class WithInstallations extends Component {
    getInstallations = () => {
      this.forceUpdate();
    };
    componentWillMount() {
      this.getInstallations();
      this.handle = setInterval(this.getInstallations, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.handle);
    }
    render() {
      const { children } = this.props;
      return children ? children({
        data: installations,
      }) : null;
    }
  }

  WithInstallations.propTypes = {
    children: PropTypes.func,
  };

  return WithInstallations;
};


export default getWithInstallations;
