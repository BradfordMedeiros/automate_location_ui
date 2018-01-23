
import generateWithData from './api/generateWithData';

const getUrl = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const backendUrl = searchParams.get('url') ? searchParams.get('url') : '127.0.0.1';
  return backendUrl;
};

const getDataConfig = (isProduction) => {
  if (isProduction == true && window.location.protocol !== 'file:') { //eslint-disable-line
    return ({
      configUrl: `${window.location.protocol}//${window.location.hostname}:9000`,
    });
  }

  const backendUrl = getUrl();
  console.log('backend url ',  backendUrl);

  return ({
    configUrl: `http://${backendUrl}:9000`,
  });
};

export default generateWithData(getDataConfig(process.env.IS_PRODUCTION));

