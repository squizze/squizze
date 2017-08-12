require("angular-mocks");

var Ajax = require("./ajax.model.js");

describe("Ajax tests", function () {

    beforeEach(angular.mock.module("ajax"));

    it("should exist", function () {
        expect(Ajax).toBeDefined();
    });
});