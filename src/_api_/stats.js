/* eslint-disable */
// ----------------------------------------------------------------------
const axios = require('axios');
// const BASE_URL = 'https://bbmapi20230807123059.azurewebsites.net/api/';
const BASE_URL = 'https://bbm-bulk-api-gct.vercel.app/api/';


const getStats = async () => {
  try {
    const response = await axios.get(BASE_URL + 'Stats');
    const resp = await response;
    console.log(resp.data);
    const res = [...resp.data].map((_, index) => ({
      statsId: _.statsId,
      adult: _.adult,
      car: _.car,
      fk: _.fk,
      ck: _.ck,
      aow: _.aow,
      saved: _.saved,
      offering: _.offering,
      visitors: _.visitors,
      date: _.date,
      churchId: _.churchId
    }));
    return resp.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const statsArray = await getStats();

export default statsArray;
