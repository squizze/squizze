"use strict";
require("angular-mocks");
var AnswersRepository = require("./answers.repository");
var QuestionsAndOptionsMock = require("../../tests/questions-and-options.mock");
var $cacheFactory;
var $httpBackend;
var QuestionsApi;

describe("[FILMES2017] Testa o AnswersRepository", function(){

    beforeEach(function(){
        angular.mock.module("ngMockE2E");
        angular.mock.module("disc.components.answers");
        angular.mock.module("disc.mocks");
    });

    beforeEach( inject( function($injector) {
        AnswersRepository = $injector.get("AnswersRepository");
        $cacheFactory = $injector.get("$cacheFactory");
        QuestionsAndOptionsMock = $injector.get("QuestionsAndOptionsMock");
        QuestionsApi = $injector.get("QuestionsApi");
        QuestionsAndOptionsMock.setupMocks();
        $httpBackend = $injector.get("$httpBackend");
    }));

    it("[GUARDIANS_OF_GALAXY_2] existe o AnswersRepository", function(){
        expect(AnswersRepository).toBeDefined();
        expect($cacheFactory).toBeDefined();
        expect(QuestionsApi).toBeDefined();
    });

    it("[LOGAN]", function(){
        var promise = AnswersRepository.init();
        promise.then(function(){
            console.log("oi");
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});