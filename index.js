(function checkForFetch() {
    const polyfillUrl = 'https://github.com/github/fetch';
    if (!window || !window.fetch) {
        throw new Error(`Seems that fetch is not supported in your environment, take a look at the polyfill here: ${polyfillUrl}`);
    }
})();

window.fetchAgain = function fetchAgain(url, requestLimit = 3, delay = 1000, fetchOptions = {}) {
    return new Promise((resolve, reject) => {
        function success(response) {
            resolve(response);
        }
        function failure(error) {
            requestLimit--;
            if (requestLimit) {
                setTimeout(callFetch, delay)
            }
            else {
                reject(error);
            }
        }
        function finalFailure(finalError) {
            throw finalError;
        }
        function callFetch() {
            return window.fetch(url, fetchOptions)
                .then(success)
                .catch(failure)
                .catch(finalFailure);
        }
        callFetch();
    });
}

export default fetchAgain;

