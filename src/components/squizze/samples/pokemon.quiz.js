export default {
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
      {"value": 5, "content": "Concordo plenamente"},
    ],
    "groups": {
      "S1": [2],
      "S2": [1],
      "B1": [4],
      "B2": [3],
      "C1": [6],
      "C2": [5],
    },
    "questions": {
        "1": {"content": "Nao gosto de pokemons de agua"},
        "2": {"content": "Gosto de pokemons de agua"},
        "3": {"content": "Nao gosto de pokemons de grama"},
        "4": {"content": "Gosto de pokemons de grama"},
        "5": {"content": "Nao gosto de pokemons de fogo"},
        "6": {"content": "Gosto de pokemons de fogo"},
    }
};
