# FETCH-AGAIN

fetch wrapper adding retry and timeout functionality without replacing the actual fetch.

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

```fetchAgain()``` will be now available from window

#### Suported environments

An script will automatically check if your environment supports the ```fetch API```, if it doesn't an error will be thrown suggesting to look at the [polyfill](https://github.com/github/fetch).

### API

```js
fetchAgain(url, requestLimit, delay, fetchOptions)
    .then((response) => console.log(response))
    .catch((error)) => console.log(error));
```
* ```url:``` address to fetch (default undefined)
* ```requestLimit:``` number of retimes to attemp fetching (default 3)
* ```delay:``` number of milliseconds to wait for next fetch if the actual one fails (defaul 1000)
* ```fetchOptions:``` options for [fetch API](https://github.github.io/fetch), can be an object or a Request (default undefined)

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
