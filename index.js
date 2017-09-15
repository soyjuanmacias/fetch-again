const environment = (typeof module !== 'undefined' && module.exports) ? global : window;

(function checkForFetch() {
    const polyfillUrl = 'https://github.com/github/fetch';
    if (!environment || !environment.fetch) {
        throw new Error(`Seems that fetch is not supported in your environment, take a look at the polyfill here: ${polyfillUrl}`);
    }
})();

environment.fetchAgain = function fetchAgain(url, fetchOptions = {}, requestLimit = 1, retryDelay = 1000) {
    if (requestLimit < 1) {
        throw new Error('Invalid arguments: requestLimit should be at least 1.');
    }
    if (retryDelay < 1) {
        throw new Error('Invalid arguments: delay should be at least 1.');
    }

    function callFetch() {
        return environment.fetch(url, fetchOptions);
    }

    if (requestLimit === 1) {
        return callFetch();
    }

    return new Promise((resolve, reject) => {
        function success(response) {
            resolve(response);
        }
        function failure(error) {
            requestLimit--;
            if (requestLimit) {
                setTimeout(callFetchAgain, retryDelay)
            }
            else {
                reject(error);
            }
        }
        function finalFailure(finalError) {
            reject(finalError);
        }
        function callFetchAgain() {
            return callFetch()
                .then(success)
                .catch(failure)
                .catch(finalFailure);
        }
        callFetchAgain();
    });
}

export default fetchAgain;

