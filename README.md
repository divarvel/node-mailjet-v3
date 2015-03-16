# Mailjet API V3 wrapper

Simple wrapper around `request` for the Mailjet V3 API. The result is a
[bluebird](https://npmjs.com/package/bluebird) promise.

It's still rough around the edges but it does its job. PRs / project takeover
welcome.

It's not on npm yet, but I can publish it if it's useful to anyone.

## Usage

```javascript
var Mailjet = require('mailjet-v3');

var client = Mailjet('<api_key>', '<api_secret>');

client.makeRequest(
  'messagesentstatistics', // Endpoint
  {}, // Parameters
  'GET' // Method
).then(function(results) {
  // Results contains `status`, `headers` and `body`
  // `body` is already parsed from JSON
  console.log(results);
});
```

