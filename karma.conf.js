module.exports = function(config) {

    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        autoWatch: true,
        plugins: [
            "karma-jasmine",
            "karma-phantomjs-launcher",
            "karma-coverage"
        ],
        files: [
            "./node_modules/angular/angular.min.js",
            "./node_modules/angular-mocks/angular-mocks.js",
            "./src/js/tests/mocks.module.js",
            "./src/js/tests/questions-and-options.mock.js",
            "./src/js/**/*.module.*js",
            "./src/js/**/**.*js"
        ],
        preprocessors: {
            "./src/js/tests/!(specs).js": ["coverage"],
            "./src/js/tests/tests.js": ["coverage"]
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
        concurrency: Infinity,
        thresholdReporter: {
            statements: 60,
            branches: 60,
            functions: 60,
            lines: 60
        }
    });
};