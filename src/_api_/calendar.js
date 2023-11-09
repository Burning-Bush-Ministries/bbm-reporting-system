/* eslint-disable */

import { BASE_URL } from "../utils/constant";

// ----------------------------------------------------------------------
const axios = require('axios');

const getCalendar = async () => {
  try {
    const response = await axios.get(BASE_URL + 'Calendar');
    const resp = await response;
    console.log(resp.data);
    const res = [...resp.data].map((_, index) => ({
      id: _.Id,
      name: _.Name,
      day: _.Day,
      month: _.Month,
      year: _.Year,
      department: _.Department,
      region: _.Region,
      dayFrom: _.DayFrom,
      dayTo: _.DayTo,
    }));
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const calendarArray = await getCalendar();

export default calendarArray;
