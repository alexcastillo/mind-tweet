const { config } = require("dotenv");
const { argv } = require("yargs");

config();

const getSecret = (secretName, secretEnvVar) => {
  return secretName in argv
    ? argv[secretName]
    : process.env[secretEnvVar];
};

const twitterCredentials = {
  apiKey: getSecret("apiKey", "TWITTER_API_KEY"),
  apiSecret: getSecret("apiSecret", "TWITTER_API_SECRET"),
  accessToken: getSecret("accessToken", "TWITTER_ACCESS_TOKEN"),
  accessTokenSecret: getSecret(
    "accessTokenSecret",
    "TWITTER_ACCESS_TOKEN_SECRET"
  )
};

module.exports = {
  email: getSecret("email", "NEUROSITY_EMAIL"),
  password: getSecret("password", "NEUROSITY_PASSWORD"),
  twitterCredentials
};
