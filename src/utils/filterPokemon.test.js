import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    const pokemon = filterPokemon(mockPokemonsData, "");
    console.log('entro pokemon', pokemon);
    expect(pokemon).toStrictEqual([]);
  });

  test("it should return an empty array", () => {
    const pokemon = filterPokemon(mockPokemonsData, "");
    expect(pokemon.length).toBe(0);
  });

  test("it should return an array with charizard object", () => {
    const pokemon = filterPokemon(mockPokemonsData, "charizard");
    const [charizard] = mockPokemonsData;
    expect(pokemon).toStrictEqual([charizard]);
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    const pokemon = filterPokemon("pokeList", "charizard");
    expect(pokemon).toBe(false);
  });

  test("it should validate the 'name' argument", () => {
    const pokemon = filterPokemon("pokeList", "");
    expect(pokemon).toStrictEqual([]);
  });
});
