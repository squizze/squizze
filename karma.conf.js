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
        files: ["./src/js/components/ajax/ajax.specs.js"],
        exclude: [],
        preprocessors: {
            "./src/js/components/ajax/ajax.specs.js": ["browserify"],
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