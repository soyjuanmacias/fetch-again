# FETCH-AGAIN

fetch wrapper adding retry and timeout functionality without replacing the actual fetch.

### Polifyll

If your browser does not support fetch api have a look at the [polifyll](https://github.com/github/fetch).

### Setup
Install as a dependency:

```bash
npm install --save fetch-again
```

Import fetch-again somewhere in your application or load the umd version in the index.html:

```js
// main.js
import 'fetch-again';
// ...
```

```html
<!-- index.html -->
<script src="dist/fetch-again.umd.js"></script>
```

fetchAgain() will be now available from window

### API

```js
fetchAgain(url, requestLimit, delay, fetchOptions)
    .then((response) => console.log(response))
    .catch((error)) => console.log((error));
```
* url: address to fetch (default undefined)
* requestLimit: number of retimes to attemp fetching (default 3)
* delay: number of milliseconds to wait for next fetch if the actual one fails (defaul 1000)
* fetchOptions: options for [fetch API](https://github.github.io/fetch), can be an object or a Request (default undefined)

### Example

```js
fetchAgain('https://www.somedomain.io', 5 , 2000 , {
        method: 'POST',
        content:'no-cors'
        }
    ).then((response) => console.log(response))
    .catch((error)) => console.log((error));
```

### License

MIT