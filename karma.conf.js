module.exports = function(config) {

    var files = [

    ];
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
            // "./node_modules/common.js/lib/index.js",
            // "./node_modules/angular-mocks/angular-mocks.js",
            // "./node_modules/@uirouter/angularjs/lib/index.js",
            // "./src/js/**/*.js"
        ],
        exclude: [],
        preprocessors: {
            // "./src/js/disc.module.js": ["browserify"],
            // "./src/js/**/*.module.js": ["browserify"],
            "./src/js/tests/**.*js": ["browserify"],
            // "./src/js/**/*.js": ["coverage"]
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