import { schedule } from "@netlify/functions"

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
  const tashkentTime = getTashkentTime();

  console.log("Scheduled job running...");
  console.log("-------------");
  console.log(tashkentTime);
  console.log("-------------");

  // Check every minute that matches 10:00
  if(tashkentTime === '04:05'){
    console.log(`Matched => ${tashkentTime}`);
  }

  return {
    statusCode: 200,
    body: 'Ok'
  }
})