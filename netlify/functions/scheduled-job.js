import { schedule } from "@netlify/functions"

// Everyday from Mon-Fri at 10:00
// 0 10 * * 1-5

// Every minute
// * * * * *

exports.handler = schedule('* * * * *', async (event) => {
  console.log("Scheduled job running...");
  console.log("-------------");
  console.log(new Date());
  console.log("-------------");

  return {
    statusCode: 200,
    body: 'Ok'
  }
})