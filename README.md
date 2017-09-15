# FETCH-AGAIN

fetch wrapper adding retry functionality without replacing the actual fetch (> 2.0 Kb).

### Setup

Install as a dependency:

```bash
npm install --save fetch-again
```

Import ```fetch-again``` somewhere in your application or load the umd version in the index.html:

```js
// main.js
import 'fetch-again';
// ...
```

```html
<!-- index.html -->
<script src="dist/fetch-again.umd.js"></script>
```

```fetchAgain()``` will be now available from ```window```.

#### Module Formats

There are three module formats beign distributed whith this package, ```UMD```, ```ES2015``` and ```ES6```, for loading an specific one configure your loader to use ```main```, ```module``` or ```jsnext:main``` properties of ```package.json```, respectively. There is also a mified version for the ```UMD``` module.

You can also opt for importing a concrete bundle from ```dist``` folder:

```js
import 'fetch-again/dist/fetch-again'; // ES2015
import 'fetch-again/dist/fetch-again.umd'; // UMD
import 'fetch-again/dist/fetch-again.umd.min'; // UMD minified
import 'node_modules/fetch-again/index'; //ES6
```

#### Supported environments

An script will automatically check if your environment supports the ```fetch API```, if it doesn't an error will be thrown suggesting to look at the [polyfill](https://github.com/github/fetch).

Note: this package is not restricted to work only in browsers, if you somehow use fetch in a Node.js environment then ```fetchAgain``` will be available from ```global```.

### API

```js
fetchAgain(url, requestLimit, delay, fetchOptions)
    .then((response) => console.log(response))
    .catch((error)) => console.log(error));
```
* ```url:``` address to fetch (default undefined)
* ```requestLimit:``` number of times to attemp fetching (default 3)
* ```delay:``` number of milliseconds to wait for next fetch if the actual one fails (defaul 1000)
* ```fetchOptions:``` options for [fetch API](https://github.github.io/fetch), can be an object or a Request (default {})

### Example

```js
fetchAgain('https://www.somedomain.io', 5 , 2000 , {
        method: 'POST',
        content:'no-cors'
    })
    .then((response) => console.log(response))
    .catch((error)) => console.log(error));
```

### License

MIT
