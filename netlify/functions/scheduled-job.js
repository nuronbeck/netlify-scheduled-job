const { schedule } = require('@netlify/functions');
const axios = require('axios');

// Everyday from Mon-Fri at 10:00
// 0 10 * * 1-5

// Every minute
// * * * * *

const getTashkentTime = () => {
  const date = new Date();
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tashkent",
      hour12: false,
      hour: 'numeric', minute: 'numeric'
  });

  return dateFormat.format(date);
}

exports.handler = schedule('* * * * *', async (event) => {
  const TASHKENT_TIME = getTashkentTime();
  const PUBLISH_HOOK_URL = process.env.PUBLISH_HOOK_URL;
  const PUBLISH_TIME = process.env.PUBLISH_TIME;

  // Check every minute that matches 10:00
  if(TASHKENT_TIME === PUBLISH_TIME){
    console.log(`Scheduled job running at (${TASHKENT_TIME} / TASHKENT_TIME)...`);

    try {
      axios.post(PUBLISH_HOOK_URL);
    } catch (error) {
      console.log("Error triggering hook => ", error?.message)
    }
  }

  return {
    statusCode: 200,
    body: 'Ok'
  }
})