'use strict';

module.exports = function(context, options) {
    if (!options) options = {};

    const env = process.env.BABEL_ENV || process.env.NODE_ENV;
    if (env !== 'development' && env !== 'test' && env !== 'production') {
        throw new Error(
            'Using `@researchgate/babel-preset-rg` requires that you specify `NODE_ENV` or ' +
                '`BABEL_ENV` environment variables. Valid values are "development", ' +
                '"test", and "production". Instead, received: ' +
                JSON.stringify(env) +
                '.'
        );
    }

    const type = process.env.BABEL_OUTPUT || (env === 'test' ? 'cjs' : 'esm');
    if (type !== 'esm' && type !== 'cjs') {
        throw new Error(
            'Invalid value for the `BABEL_OUTPUT` environment variable.' +
                ' Valid values are "esm", and "cjs". Instead, received: ' +
                JSON.stringify(type) +
                '.'
        );
    }

    const envOptions = Object.assign(
        {
            loose: true,
            modules: type === 'cjs' ? 'commonjs' : false,
        },
        options.env || {}
    );

    const presets = [
        [require.resolve('@babel/preset-env'), envOptions],
        [
            require.resolve('@babel/preset-react'),
            {
                development: env === 'development',
                useBuiltIns: true,
            },
        ],
    ];

    const plugins = [
        require.resolve('@babel/plugin-proposal-class-properties'),
        [
            require.resolve('@babel/plugin-proposal-object-rest-spread'),
            {
                useBuiltIns: true,
            },
        ],
        require.resolve('babel-plugin-lodash'),
        [
            require.resolve('babel-plugin-transform-react-remove-prop-types'),
            {
                mode: 'unsafe-wrap',
            },
        ],
    ];

    return {
        presets: presets,
        plugins: plugins,
    };
};
