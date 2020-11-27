const { Notion } = require("@neurosity/notion");
const { TwitterClient } = require("twitter-api-client");
const { take } = require("rxjs/operators");
const { email, password, twitterCredentials } = require("./auth");

const tweet = `if you are reading this it means i successfully pushed the "tweet" button with my mind via brain-computer interface`;

(async function main() {
  const mind = new Notion();
  const twitterClient = new TwitterClient(twitterCredentials);

  await mind.login({ email, password }).catch(console.error);

  mind
    .kinesis("push")
    .pipe(take(1))
    .subscribe(({ confidence }) => {
      twitterClient.tweets
        .statusesUpdate({
          status: `${tweet}
        
intent probability: ${confidence}`
        })
        .then(() => {
          console.log("detected mind command, tweet sent!");
        })
        .catch((error) => {
          console.log(error);
        });
    });
})();
