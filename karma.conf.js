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
            "./node_modules/angular/angular.min.js",
            "./src/js/tests/**.*js"
        ],
        preprocessors: {
            "./src/js/tests/!(specs).js": ["browserify"],
            "./src/js/tests/tests.js": ["browserify"]
        },
        browserify: {
            watch: true,
            debug: true,
            transform: [
                ["browserify-istanbul",
                    {
                        instrumenterConfig: {
                            embedSource: true   // this is important for HTML reports
                        }
                    }
                ]
            ]
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