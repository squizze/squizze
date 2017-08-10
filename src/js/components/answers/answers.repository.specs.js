"use strict";

describe("[FILMES2017] Testa o AnswersRepository", function(){


    var AnswersRepository;
    // var $httpBackend;

    beforeEach(function(){
        angular.mock.module("disc.components.answers");
        angular.mock.module("disc.mocks");
    });

    beforeEach(inject(function($injector) {
        AnswersRepository = $injector.get("AnswersRepository");
        // $httpBackend = $injector.get("$httpBackend");
        $injector.get("QuestionsAndOptionsMock").setupMocks();
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