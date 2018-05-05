import test from "ava";
import Squizze from "./squizze";
import DISCQuestions from "squizze-quizzes/api/disc.json";
import DISCAnswers from "../samples/DISC.answers";
import GroupItemHasNotIntegerItemsQuiz from "../samples/invalid-quizzes/groups-item-has-not-integer-items";
import GroupsHasZeroItemsQuiz from "../samples/invalid-quizzes/groups-has-zero-items";
import QuestionsItemHasNoId from "../samples/invalid-quizzes/questions-item-has-no-id";

const StarterPokemonQuiz = {
  "summary":{
    "S": {
      "longName": "Squirtle",
      "rule": "S1 - S2"
    },
    "B": {
      "longName": "Bulbasaur",
      "rule": "B1 - B2"
    },
    "C": {
      "longName": "Charmander",
      "rule": "C1 - C2"
    }
  },
  "choices": [
    {"value": 0, "content": "Não sei"},
    {"value": 1, "content": "Discordo plenamente"},
    {"value": 2, "content": "Discordo"},
    {"value": 3, "content": "Concordo um pouco"},
    {"value": 4, "content": "Concordo"},
    {"value": 5, "content": "Concordo plenamente"}
  ],
  "groups": {
    "S1": [2],
    "S2": [1],
    "B1": [4],
    "B2": [3],
    "C1": [6],
    "C2": [5]
  },
  "questions": [
    {"id": "1", "content": "Nao gosto de pokemons de agua"},
    {"id": "2", "content": "Gosto de pokemons de agua"},
    {"id": "3", "content": "Nao gosto de pokemons de grama"},
    {"id": "4", "content": "Gosto de pokemons de grama"},
    {"id": "5", "content": "Nao gosto de pokemons de fogo"},
    {"id": "6", "content": "Gosto de pokemons de fogo"}
  ]
};

const StarterPokemonAnswersResultsIsSquirtle = {
  "1": 0,
  "2": 5,
  "3": 2,
  "4": 2,
  "5": 1,
  "6": 1
};

const invalidQuizzes =[{
            quizz: GroupItemHasNotIntegerItemsQuiz,
            message: `Invalid Quiz. type: data`,
            answers: DISCAnswers
        },{
            quizz: GroupsHasZeroItemsQuiz,
            message: "Invalid Quiz. type: data",
            answers: DISCAnswers
        }, {
            quizz: QuestionsItemHasNoId,
            message: "Invalid Quiz. type: data",
            answers: DISCAnswers
        }
];

test("Squizze is defined", t => {
    t.truthy(Squizze);
});

test("All negative result for DISC.", t => {
  let girlfriend_answers = {
      1: "concordo",
      2: "concordo um pouco",
      3: "discordo",
      4: "nao sei",
      5: "discordo",
      6: "discordo",
      7: "discordo",
      8: "discordo",
      9: "concordo um pouco",
      10: "nao sei",
      11: "discordo",
      12: "concordo plenamente",
      13: "concordo plenamente",
      14: "concordo",
      15: "nao sei",
      16: "nao sei",
      17: "concordo",
      18: "nao sei",
      19: "nao sei",
      20: "concordo",
      21: "concordo um pouco",
      22: "discordo",
      23: "nao sei",
      24: "concordo",
      25: "concordo",
      26: "nao sei",
      27: "concordo",
      28: "discordo",
      29: "nao sei",
      30: "concordo",
      31: "nao sei",
      32: "discordo"
  };
  let answer_to_number = {
    "nao sei": 0,
    "discordo plenamente": 1,
    "discordo": 2,
    "concordo um pouco": 3,
    "concordo": 4,
    "concordo plenamente": 5
  };

  for(let key in girlfriend_answers){
    if(girlfriend_answers.hasOwnProperty(key)){
      girlfriend_answers[key] = answer_to_number[girlfriend_answers[key]];
    }
  }

  let expected_results = {
    D: -2,
    I: -8,
    S: -1,
    C: -6
  };

  let AllNegativeDISCSquizze =  new Squizze(DISCQuestions, girlfriend_answers);
  t.is(Object.values(AllNegativeDISCSquizze.results).every(result => {
      return Math.sign(result.sum) === -1;
  }), true);
  t.is(AllNegativeDISCSquizze.results.D.sum, expected_results.D);
  t.is(AllNegativeDISCSquizze.results.I.sum, expected_results.I);
  t.is(AllNegativeDISCSquizze.results.S.sum, expected_results.S);
  t.is(AllNegativeDISCSquizze.results.C.sum, expected_results.C);
});

test("DISC results are correct", t => {
    let DISCSquizze = new Squizze(DISCQuestions, DISCAnswers);
    t.truthy(DISCSquizze);
    t.is(DISCSquizze.results.D.sum, 0);
    t.is(DISCSquizze.results.I.sum, 0);
    t.is(DISCSquizze.results.S.sum, 2);
    t.is(DISCSquizze.results.C.sum, -2);
    let bigest = Object.values(DISCSquizze.results).sort((current, next) => current.sum < next.sum )[0];
    t.is(bigest.longName, "Steadliness");
});

test("Pokemon is Squirtle", t => {
    let PokemonSquizze = new Squizze(StarterPokemonQuiz, StarterPokemonAnswersResultsIsSquirtle);
    t.truthy(PokemonSquizze);
    t.is(PokemonSquizze.results.S.sum, 5);
    t.is(PokemonSquizze.results.B.sum, 0);
    t.is(PokemonSquizze.results.C.sum, 0);
    let bigest = Object.values(PokemonSquizze.results).sort((current, next) => current.sum < next.sum )[0];
    t.is(bigest.longName, "Squirtle");
});

test("DISC calculates correctly when only one group is chosen", t => {

    let answersD1 = {};
    let answersD2 = {};
    let answersI1 = {};
    let answersI2 = {};
    let answersS1 = {};
    let answersS2 = {};
    let answersC1 = {};
    let answersC2 = {};

    Object.keys(DISCQuestions.groups).forEach(key => {
        DISCQuestions.groups[key].forEach(answer => {
            answersD1[answer] = key === "D1" ? 5 : 0;
            answersD2[answer] = key === "D2" ? 5 : 0;
            answersI1[answer] = key === "I1" ? 5 : 0;
            answersI2[answer] = key === "I2" ? 5 : 0;
            answersS1[answer] = key === "S1" ? 5 : 0;
            answersS2[answer] = key === "S2" ? 5 : 0;
            answersC1[answer] = key === "C1" ? 5 : 0;
            answersC2[answer] = key === "C2" ? 5 : 0;
        });
    });

    let DISCD1 = new Squizze(DISCQuestions, answersD1);
    t.is(DISCD1.results.D.sum, Object.values(answersD1).reduce((total, current) =>  total + current ) - 0);
    t.is([DISCD1.results.I.sum, DISCD1.results.S.sum, DISCD1.results.C.sum].every(item => item === 0), true);

    let DISCD2 = new Squizze(DISCQuestions, answersD2);
    t.is(DISCD2.results.D.sum, 0 - Object.values(answersD2).reduce((total, current) =>  total + current ));
    t.is([DISCD2.results.I.sum, DISCD2.results.S.sum, DISCD2.results.C.sum].every(item => item === 0), true);

    let DISCI1 = new Squizze(DISCQuestions, answersI1);
    t.is(DISCI1.results.I.sum, Object.values(answersI1).reduce((total, current) =>  total + current ) - 0);
    t.is([DISCI1.results.D.sum, DISCI1.results.S.sum, DISCI1.results.C.sum].every(item => item === 0), true);

    let DISCI2 = new Squizze(DISCQuestions, answersI2);
    t.is(DISCI2.results.I.sum, 0 - Object.values(answersI2).reduce((total, current) =>  total + current ));
    t.is([DISCI2.results.D.sum, DISCI2.results.S.sum, DISCI2.results.C.sum].every(item => item === 0), true);

    let DISCS1 = new Squizze(DISCQuestions, answersS1);
    t.is(DISCS1.results.S.sum, Object.values(answersS1).reduce((total, current) =>  total + current ) - 0);
    t.is([DISCS1.results.D.sum, DISCS1.results.I.sum, DISCS1.results.C.sum].every(item => item === 0), true);

    let DISCS2 = new Squizze(DISCQuestions, answersS2);
    t.is(DISCS2.results.S.sum, 0 - Object.values(answersS2).reduce((total, current) =>  total + current ));
    t.is([DISCS2.results.D.sum, DISCS2.results.I.sum, DISCS2.results.C.sum].every(item => item === 0), true);

    let DISCC1 = new Squizze(DISCQuestions, answersC1);
    t.is(DISCC1.results.C.sum, Object.values(answersC1).reduce((total, current) =>  total + current ) - 0);
    t.is([DISCC1.results.D.sum, DISCC1.results.I.sum, DISCC1.results.S.sum].every(item => item === 0), true);

    let DISCC2 = new Squizze(DISCQuestions, answersC2);
    t.is(DISCC2.results.C.sum, 0 - Object.values(answersC2).reduce((total, current) =>  total + current ));
    t.is([DISCC2.results.D.sum, DISCC2.results.I.sum, DISCC2.results.S.sum].every(item => item === 0), true);
});

test("Test all invalid samples", t => {
    invalidQuizzes.forEach(invalidQuiz => {
        let error = t.throws(() => {
            new Squizze(invalidQuiz.quiz, invalidQuiz.answers);
        }, TypeError);

        t.is(error.message,  invalidQuiz.message);
    });
});
