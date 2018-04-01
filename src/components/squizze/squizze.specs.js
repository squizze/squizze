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
