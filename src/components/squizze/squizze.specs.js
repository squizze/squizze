import test from "ava";
import Squizze from "./squizze";
import DISCQuestions from "./samples/DISC.quiz";
import DISCAnswers from "./samples/DISC.answers";
import PokemonQuestions from "./samples/pokemon.quiz";
import PokemonSquirtle from "./samples/pokemon.squirtle";

test("Squizze is defined", t => {
    t.truthy(Squizze);
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
    let PokemonSquizze = new Squizze(PokemonQuestions, PokemonSquirtle);
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
