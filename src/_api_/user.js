/* eslint-disable */

import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------
const axios = require('axios');

const getUsers = async () => {
  try {
    const response = await axios.get('https://bbmapi20230807123059.azurewebsites.net/api/Person');
    const resp = await response;
    console.log(resp.data);
    const res = [...resp.data].map((_, index) => ({
      personId: _.tenantID,
      avatarUrl: mockImgAvatar(index + 1),
      name: _.name +' '+ _.surname,
      comments: _.comments,
      address: _.address,
      contactNumber: _.contactNumber,
      email: _.email,
      churchId: _.churchId,
      gender: _.gender,
      username: _.username,
      maritalStatus: _.maritalStatus
    }));
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const userArray = getUsers();

export default userArray;
