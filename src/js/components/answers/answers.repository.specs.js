"use strict";

require("angular");
require("angular-mocks");
var AnswersRepository = require("./answers.repository");
var QuestionsAndOptionsMock = require("../../tests/questions-and-options.mock");

describe("[FILMES2017] Testa o AnswersRepository", function(){

    beforeEach(function(){
        angular.mock.module("disc.components.answers");
    });

    beforeEach(inject(function($injector) {
        AnswersRepository = $injector.get(AnswersRepository);
        QuestionsAndOptionsMock = $injector.get(QuestionsAndOptionsMock);
        // $httpBackend = $injector.get("$httpBackend");
        QuestionsAndOptionsMock.setupMocks();
    }));

    it("[LOGAN] AnswersRepository deve existir", function(){
        expect(AnswersRepository).toBeDefined();
    });

    it("[SPIDERMAN_HOMECOMING] o init funciona", function(){
        AnswersRepository.init().then(function(result){
            expect(result).toBeDefined();
        });
    });


});