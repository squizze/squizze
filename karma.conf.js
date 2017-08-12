module.exports = function(config) {

    config.set({
        basePath: "",
        frameworks: ["browserify", "jasmine"],
        autoWatch: true,
        plugins: [
            "karma-jasmine",
            "karma-browserify",
            "karma-phantomjs-launcher",
            "karma-coverage"
        ],
        files: [
            "./src/js/tests/tests.js"
        ],
        exclude: [],
        preprocessors: {
            "./src/js/tests/tests.js": ["browserify"],
            "./src/js/**/*.js": ["coverage"]
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