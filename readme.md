# is-edge

> Check if browser is Microsoft Edge

*User agent sniffing is [considered](https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent) bad practice and should be avoided if possible.*


## Install

```
$ npm install --save is-edge
```


## Usage

```js
const isEdge = require('is-edge');

isEdge();

isEdge({version: 38});

isEdge({userAgent: 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136'});
```


### isEdge([options])

Returns a `boolean`.

#### options

Type: `object`

##### options.userAgent

Type: `string`

User agent to test.

##### options.version

Type: `string` or `number`

Check for specific version.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
