/* eslint-disable */

import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------
const axios = require('axios');

const getChurch = async () => {
  try {
    const response = await axios.get('https://bbmapi20230807123059.azurewebsites.net/api/Church');
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
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const churchArray = getChurch();

export default churchArray;
