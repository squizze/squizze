"use strict";
var AnswersRepository = require("./answers.repository");
var $cacheFactory;

describe("[FILMES2017] Testa o AnswersRepository", function(){

    beforeEach(function(){
        angular.mock.module("disc.components.answers");
    });

    beforeEach( inject( function($injector) {
        AnswersRepository = $injector.get("AnswersRepository");
        $cacheFactory = $injector.get("$cacheFactory");
    }));

    it("[GUARDIANS_OF_GALAXY_2] existe o AnswersRepository", function(){
        expect(AnswersRepository).toBeDefined();
        expect($cacheFactory).toBeDefined();
    });

    it("[LOGAN] existe o init", function(){
        AnswersRepository.init().then(function(results){
            expect(results).toBeDefined();
        });
    });


});