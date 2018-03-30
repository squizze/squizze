import test from "ava";
import Squizze from "./squizze";
import DISCQuestions from "./samples/DISC.questions";
import DISCAnswers from "./samples/DISC.answers";
import PokemonQuestions from "./samples/pokemon.questions";
import PokemonSquirtle from "./samples/pokemon.squirtle";

test("Squizze is defined", t => {
    t.truthy(Squizze);
});

test("DISC results are correct", t => {
    let DISCSquizze = new Squizze(DISCQuestions, DISCAnswers);
    t.truthy(DISCSquizze);
    DISCSquizze.calculate();
    t.is(DISCSquizze.results.A, 0);
    t.is(DISCSquizze.results.B, 0);
    t.is(DISCSquizze.results.C, 2);
    t.is(DISCSquizze.results.D, -2);
});

test("Pokemon is Squirtle", t => {
    let PokemonSquizze = new Squizze(PokemonQuestions, PokemonSquirtle);
    t.truthy(PokemonSquizze);
    t.is(PokemonSquizze.results.S, 5);
});
