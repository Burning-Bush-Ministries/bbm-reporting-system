/* eslint-disable */

import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------
const axios = require('axios');

const getStats = async () => {
  try {
    const response = await axios.get('https://bbmapi20230807123059.azurewebsites.net/api/Stats');
    const resp = await response;
    console.log(resp.data);
    const res = [...resp.data].map((_, index) => ({
      statsId:_.statsId,
      adult:_.adult,
      car: _.car,
      fk: _.fk,
      saved: _.saved,
      offering: _.offering,
      visitors: _.visitors,
      date: _.date,
      churchId: _.churchId,
    }));
    return resp.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const statsArray = await getStats();

export default statsArray;