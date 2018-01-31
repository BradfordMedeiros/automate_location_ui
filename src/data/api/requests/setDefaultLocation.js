
import { defaultLocation } from './getDefaultLocation';

const setDefaultLocation = location => {
  console.log('set default location placeholder');
  defaultLocation.latitude = location.latitude;
  defaultLocation.longitude = location.longitude;
  defaultLocation.zoom = location.zoom;
  localStorage.setItem('defaultLocation', JSON.stringify(defaultLocation));
};

export default setDefaultLocation;