/* eslint-disable */

// ----------------------------------------------------------------------
const axios = require('axios');
var userObject = {
  "name": "string",
  "username": "string",
  "email": "string",
  "comments": "string",
  "churchId": 0,
  "tagID": "string",
  "gender": "string",
  "contactNumber": "string",
  "address": "string",
  "maritalStatus": "string",
}
const addUsers = async ({userObject}) => {
  try {
    const response = await axios.post('https://bbmapi20230807123059.azurewebsites.net/api/Person',{userObject});

    // var sql = `INSERT INTO UserTbl
    // (tenantID, lastName, firstName, email, occupation, online, tagID, hours, temperature, gender, ethnicity, accessType, status, username, password, biometricID, faceID) VALUES 
    // (${userObject.tenantID}, '${userObject.lastName}', '${userObject.firstName}', '${userObject.email}', '${userObject.occupation}', ${userObject.online}, '${userObject.tagID}', '${defaultZero}', ${defaultZero}, '${userObject.gender}', '${userObject.ethnicity}', ${defaultZero}, ${defaultZero}, '${userObject.username}', '${userObject.password}', '${userObject.biometricID}',' ${userObject.faceID}') `;

  } catch (err) {
    console.log(err);
    throw err;
  }
};
const userArray = addUsers({userObject});

export default userArray;
