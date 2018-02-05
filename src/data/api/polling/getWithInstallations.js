import { Component, PropTypes } from 'react';

export let installations = localStorage.getItem('installations') ? JSON.parse(localStorage.getItem('installations')) : [
    {
      name: 'South Lake Union',
      uuid : 'apple',
      location: {
        latitude: 47.626430233862514,
        longitude: -122.33584818588159,
      },
      // basic blue box label that has label on hover
      markers: [
        {
          latitude: 47.626430233862514,
          longitude: -122.33684818588159,
          description: 'some cool marker 🤔',
        },
      ],
      // marker that accepts location based upon mqtt geolocation type
      mqttMarkers: [
        {
          topic: 'geolocation/bay',
          description: 'geomarker: geolocation/bay',
        },
      ],
      // basic static label
      labels: [
        {
          latitude: 47.626767233862514,
          longitude: -122.33614818588159,
          description: 'Bay Temperature: 20',
        },
      ],
      mqttLabels: [
        {
          latitude: 47.626867233862514,
          longitude: -122.33614818588159,
          topic: 'temp',
        }
      ],

    },
  ];

export const setInstallations = newInstallations => {
  installations = newInstallations;
  localStorage.setItem('installations', JSON.stringify(installations));
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
