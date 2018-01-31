
export let defaultLocation = localStorage.getItem('defaultLocation') ? JSON.parse(localStorage.getItem('defaultLocation')) : { latitude: 30, longitude: 10, zoom: 8 };

export default () => {
  console.log('get default location placeholder');
  return defaultLocation;
}