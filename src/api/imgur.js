import qs from 'qs';

const CLIENT_ID = '1d33cc2f6b8e9be';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    // window.location = this will cause the user's browser to navigate automatically to this URL
  }
};