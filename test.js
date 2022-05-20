const { TwitterClient } = require("twitter-api-client");
const { twitterCredentials } = require("./auth");

const twitter = new TwitterClient(twitterCredentials);

twitter.accountsAndUsers
  .accountUpdateProfile({
    name: `Alex Castillo is focused`,
  })
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(error);
  });
