module.exports = function (api) {
    api.cache(true);
    
    const presets = [
        "@babel/preset-env"
    ];
    
    const plugins = [
        // ["@babel/transform-runtime", {
        //     corejs: "3"
        // }],
    ];

    return {
        presets,
        plugins,
        // env: {
        //     test: {
        //         plugins: [
        //             "@babel/plugin-transform-modules-commonjs"
        //         ],
        //         presets: [
        //             "@babel/preset-env"
        //         ]
        //     }
        // },
        // "ignore": [
        //     "node_modules"
        // ],
    };
};
