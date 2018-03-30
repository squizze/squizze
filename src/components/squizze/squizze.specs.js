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
    t.is(DISCSquizze.results.D, 0);
    t.is(DISCSquizze.results.I, 0);
    t.is(DISCSquizze.results.S, 2);
    t.is(DISCSquizze.results.C, -2);
    t.is(Math.max.apply(Math, Object.values(DISCSquizze.results)), DISCSquizze.results.S);
    t.is(Math.min.apply(Math, Object.values(DISCSquizze.results)), DISCSquizze.results.C);
});

test("Pokemon is Squirtle", t => {
    let PokemonSquizze = new Squizze(PokemonQuestions, PokemonSquirtle);
    t.truthy(PokemonSquizze);
    t.is(PokemonSquizze.results.S, 5);
    t.is(PokemonSquizze.results.B, 0);
    t.is(PokemonSquizze.results.C, 0);
    t.is(Math.max.apply(Math, Object.values(PokemonSquizze.results)), PokemonSquizze.results.S);
});
