/* eslint-disable */

import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------
const axios = require('axios');
const BASE_URL = 'https://bbmapi20230807123059.azurewebsites.net/api/';

const getLeader = async () => {
  try {
    const response = await axios.get(BASE_URL + 'Leader');
    const resp = await response;
    console.log(resp.data);
    const res = [...resp.data].map((_, index) => ({
      leaderId: _.leaderId,
      ministry: _.ministry,
      office: _.office,
      personId: _.personId
    }));
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const leaderArray = getLeader();

export default leaderArray;
