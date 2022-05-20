const { Notion } = require("@neurosity/notion");
const { TwitterClient } = require("twitter-api-client");
const { email, password, twitterCredentials } = require("./auth");
const { averageScoreBuffer } = require("./pipes");

(async function main() {
  const mind = new Notion();
  const twitter = new TwitterClient(twitterCredentials);

  await mind.login({ email, password }).catch(console.error);
  // Optional if you have multiple Crowns
  // await mind.selectDevice(["deviceNickname", "Crown-85A"]);

  mind
    .focus()
    .pipe(averageScoreBuffer())
    .subscribe((score) => {
      twitter.accountsAndUsers
        .accountUpdateProfile({
          name: `Alex Castillo ${score}% focused`,
        })
        .then((res) => console.log(`Updated twitter profile with: ${res.name}`))
        .catch((error) => {
          console.log(error);
        });
    });
})();
