"use strict";
var AnswersRepository = require("./answers.repository");
var $cacheFactory;
var $httpBackend;
var QuestionsAndOptionsMock;
var initPromise;

describe("[FILMES2017] Testa o AnswersRepository", function(){

    beforeEach(function(){
        angular.mock.module("disc.components.answers");
        angular.mock.module("disc.mocks");
    });

    beforeEach( inject( function($injector) {
        AnswersRepository = $injector.get("AnswersRepository");
        $httpBackend = $injector.get("$httpBackend");
        $cacheFactory = $injector.get("$cacheFactory");
        QuestionsAndOptionsMock = $injector.get("QuestionsAndOptionsMock");
        QuestionsAndOptionsMock.setupMocks();
        initPromise = AnswersRepository.init();
    }));

    it("[GUARDIANS_OF_GALAXY_2] existe o AnswersRepository", function(){
        expect(AnswersRepository).toBeDefined();
        expect($cacheFactory).toBeDefined();
    });


    it("[LOGAN] existe o init", function(){
        initPromise.then(function(results){
            console.log("funcionei", results);
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});