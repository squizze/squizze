(function () {

    "use strict";

    var QuestionsAndOptionsMock = require("./questions-and-options.mock.js");
    QuestionsAndOptionsMock.$inject = ["$httpBackend"];

    angular.module("disc.mocks", ["ngMockE2E"]);
    angular.module("disc.mocks").factory("QuestionsAndOptionsMock", QuestionsAndOptionsMock);
}());