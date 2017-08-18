"use strict";
var $cacheFactory;
var $httpBackend;
var $q;
var QuestionsAndOptionsMock;
var initPromise;

describe("[FILMES2017] Testa o AnswersRepository", function(){
    // beforeEach(function(){
    //     angular.mock.module("disc.components.answers");
    //     angular.mock.module("disc.mocks");
    // });

    beforeEach( inject( function($injector) {
        $q = $injector.get("$q");
        // AnswersRepository = $injector.get("AnswersRepository");
        $httpBackend = $injector.get("$httpBackend");
        // $cacheFactory = $injector.get("$cacheFactory");
        // QuestionsAndOptionsMock = $injector.get("QuestionsAndOptionsMock");
        // QuestionsAndOptionsMock.setupMocks();
        // initPromise = AnswersRepository.init();
    }));

    it("[GUARDIANS_OF_GALAXY_2] existe o AnswersRepository", function(){
        var deferred = $q.defer();
        var promise = deferred.promise;
        promise.then(function(teste){
            console.log("teste");
            expect(teste).toBe("teste");
        });
        deferred.resolve("teste");
        $httpBackend.flush();
    });


    // it("[LOGAN] existe o init", function(){
    //     initPromise.then(function(results){
    //         console.log("funcionei", results);
    //     });
    // });

    // afterEach(function() {
    //     $httpBackend.verifyNoOutstandingExpectation();
    //     $httpBackend.verifyNoOutstandingRequest();
    // });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});