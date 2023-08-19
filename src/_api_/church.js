/* eslint-disable */

// ----------------------------------------------------------------------
const axios = require('axios');
const dev_BASE_URL = 'http://localhost:3000/';
const BASE_URL = 'https://bbmapi20230807123059.azurewebsites.net/api/';

const getChurch = async () => {
  try {
    const response = await axios.get(BASE_URL + 'Church');
    const resp = await response;
    console.log(resp.data);
    const res = [...resp.data].map((_, index) => ({
      churchId: _.churchId,
      churchName: _.churchName,
      location: _.location,
      branch: _.branch,
      province: _.province,
      city: _.city,
      region: _.region,
      pastorId: _.pastorId
    }));
    return resp.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const churchArray = await getChurch();

export default churchArray;
