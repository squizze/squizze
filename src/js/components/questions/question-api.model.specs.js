"use strict";
var QuestionsApi = require("./question-api.model");
var QuestionsAndOptionsMock;
var Ajax;

describe("[POKEMONS] Testa o QuestionsApi", function(){

    beforeEach(function(){
        angular.mock.module("ajax");
        angular.mock.module("disc.components.questions");
        angular.mock.module("disc.mocks");
    });

    beforeEach( inject( function($injector) {
        QuestionsApi = $injector.get("QuestionsApi");
        Ajax = $injector.get("Ajax");
        QuestionsAndOptionsMock = $injector.get("QuestionsAndOptionsMock");
        QuestionsAndOptionsMock.setupMocks();
    }));

    it("[PIKACHU] existe o QuestionsApi", function(){
        expect(QuestionsApi).toBeDefined();
        expect(Ajax).toBeDefined();
    });

    it("[CHARMANDER] testa o getAllQuestions", function(){
        var promise = QuestionsApi.getAllQuestions();
        expect(promise).toBeDefined();
        console.log(promise);

        promise.then(function (results) {
            console.log(results);
        })
    });

    afterEach(function() {
        // $httpBackend.verifyNoOutstandingExpectation();
        // $httpBackend.verifyNoOutstandingRequest();
    });

});