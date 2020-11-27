const { TwitterClient } = require("twitter-api-client");
const { twitterCredentials } = require("./auth");

const twitterClient = new TwitterClient(twitterCredentials);

twitterClient.tweets
  .statusesHomeTimeline()
  .then((trends) => {
    console.log(trends);
  })
  .catch((error) => {
    console.log(error);
  });
