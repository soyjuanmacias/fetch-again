(function checkForFetch() {
    var polyfillUrl = 'https://github.com/github/fetch';
    if (!window || !window.fetch) {
        throw new Error('Seems that fetch is not supported in your environment, take a look at the polyfill here: ' + polyfillUrl);
    }
})();

window.fetchAgain = function fetchAgain(url) {
    var requestLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    var fetchOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    return new Promise(function (resolve, reject) {
        function success(response) {
            resolve(response);
        }
        function failure(error) {
            requestLimit--;
            if (requestLimit) {
                setTimeout(callFetch, delay);
            } else {
                reject(error);
            }
        }
        function finalFailure(finalError) {
            throw finalError;
        }
        function callFetch() {
            return window.fetch(url, fetchOptions).then(success).catch(failure).catch(finalFailure);
        }
        callFetch();
    });
};

export default fetchAgain;
//# sourceMappingURL=fetch-again.js.map
