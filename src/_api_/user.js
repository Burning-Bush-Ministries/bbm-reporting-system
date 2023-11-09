/* eslint-disable */

import { mockImgAvatar } from '../utils/mockImages';
import { BASE_URL } from "../utils/constant";

// ----------------------------------------------------------------------
const axios = require('axios');

const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL + 'Person');
    const resp = await response;
    console.log(resp.data);
    const res = [...resp.data].map((_, index) => ({
      personId: _.tenantID,
      avatarUrl: mockImgAvatar(index + 1),
      name: _.name + ' ' + _.surname,
      comments: _.comments,
      address: _.address,
      contactNumber: _.contactNumber,
      email: _.email,
      churchId: _.churchId,
      gender: _.gender,
      username: _.username,
      maritalStatus: _.maritalStatus,
      cellLeader: _.cellLeader,
      cellLocation: _.cellLocationl,
      ministry: _.ministry
    }));
    return resp.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const userArray = await getUsers();

export default userArray;
