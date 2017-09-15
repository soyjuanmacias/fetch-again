import babel from 'rollup-plugin-babel';
const pkg = require('./package.json');

export default {
    input: pkg['jsnext:main'],
    output: [
        {file: pkg.main, format: 'umd'},
        {file: pkg.module, format: 'es'}
    ],
    name: 'fetchAgain',
    sourcemap: true,
    plugins: [
        babel()
    ]
};