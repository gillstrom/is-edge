# is-edge

> Check if browser is Microsoft Edge

*User agent sniffing is [considered](https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent) bad practice and should be avoided if possible.*


## Install

```
$ npm install --save is-edge
```


## Usage

```js
var isEdge = require('is-edge');

isEdge();
//=> true

isEdge(12);
//=> true

isEdge(12.0);
//=> true
```


### isEdge(version)

Returns a `boolean`.

#### version

*Optional*  
Type: `number`

Check for specific version


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
