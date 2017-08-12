// Karma configuration
// Generated on Tue Aug 01 2017 01:22:24 GMT-0300 (BRT)

module.exports = function(config) {

    var jsFiles = [
        "./src/js/disc.js"
    ];

    config.set({
        frameworks: ["jasmine", "browserify"],
        autoWatch: true,
        plugins: [
            "karma-jasmine",
            "karma-browserify",
            "karma-phantomjs-launcher",
            "karma-coverage"
        ],
        files: jsFiles,
        exclude: [],
        preprocessors: {
            "./src/js/tests/tests.js": ["browserify"],
            "./src/js/**/!(*specs).js": ["coverage"]
        },
        browserify: {
            watch: true,
            debug: true
        },
        coverageReporter: {
            dir: "./coverage",
            reporters: [
                { type: "html", subdir: "html/" },
                { type: "cobertura", subdir: "cobertura/", file: "cobertura.xml"},
                { type: "lcov", subdir: "lcov/" }
            ]
        },
        reporters: ["coverage", "progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        phantomjsLauncher: {
            exitOnResourceError: true
        },
        browsers: ["PhantomJS"],
        singleRun: false,
        concurrency: Infinity
    });
};