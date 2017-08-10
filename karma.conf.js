// Karma configuration
// Generated on Tue Aug 01 2017 01:22:24 GMT-0300 (BRT)

module.exports = function(config) {

    var jsFiles = [
        "./src/js/components/ajax/ajax.model.js",
        "./src/js/components/ajax/ajax.module.js",
        "./src/js/components/ajax/ajax.specs.js",
        "./src/js/components/answers/answers.constant.js",
        "./src/js/components/answers/answers.model.js",
        "./src/js/components/answers/answers.module.js",
        "./src/js/components/answers/answers.repository.js",
        "./src/js/components/answers/answers.repository.specs.js",
        "./src/js/components/questions/question-adapter.model.js",
        "./src/js/components/questions/question-api.model.js",
        "./src/js/components/questions/question-state.model.js",
        "./src/js/components/questions/question.controller.js",
        "./src/js/components/questions/question.module.js",
        "./src/js/components/questions/question.states.js",
        "./src/js/components/questions/questions.repository.js",
        "./src/js/components/start/start.model.js",
        "./src/js/components/start/start.module.js",
        "./src/js/components/start/start.run.js",
        "./src/js/disc.config.js",
        "./src/js/disc.controller.js",
        "./src/js/disc.module.js",
        "./src/js/templates/templates.module.js",
        "./src/js/templates/templates.run.js",
        "./src/js/views/home/home.controller.js",
        "./src/js/views/home/home.module.js",
        "./src/js/views/home/home.state.js",
        "./src/js/views/results/results.controller.js",
        "./src/js/views/results/results.module.js",
        "./src/js/views/results/results.state.js",
        // "./src/js/disc.js",
        "./node_modules/angular/angular.js",
        "./node_modules/angular-mocks/angular-mocks.js",
        "./src/js/mocks/mocks.module.js",
        "./src/js/mocks/questions-and-options.mock.js"
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
            "./src/js/**/*.js": ["browserify"],
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
        logLevel: config.LOG_DEBUG,
        phantomjsLauncher: {
            exitOnResourceError: true
        },
        browsers: ["PhantomJS"],
        singleRun: false,
        concurrency: Infinity
    });
};