# 🐦 Send a Tweet with your mind 🤯

This Node.js application securely authenticates to your Neurosity headset and sends a pre-defined Tweet when you think of the "push" command via the [Kinesis API](https://docs.neurosity.co/docs/api/kinesis).

> 💡 You'll need a [Neurosity account](https://console.neurosity.co) and a [Twitter Developer account](https://developer.twitter.com/en).

## Getting started

Run in the terminal:

1. Clone this repo and run `npm install`
2. Turn on your [Neurosity](https://neurosity.co) headset
3. Pass the arguments below, or create a `.env` file with the following environment variables
4. Execute the `index.js` file on your terminal:

```
node index.js
  --email=NEUROSITY_EMAIL
  --password=NEUROSITY_PASSWORD
  --apiKey=TWITTER_API_KEY
  --apiSecret=TWITTER_API_SECRET
  --accessToken=TWITTER_ACCESS_TOKEN
  --accessTokenSecret=TWITTER_ACCESS_TOKEN_SECRET
```

### MIT License

Copyright 2020 Alex Castillo, Neurosity

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
