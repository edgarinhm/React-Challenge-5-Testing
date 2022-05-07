import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    const pokemon = filterPokemon(mockPokemonsData, "");
    expect(pokemon).toBe([]);
  });

  test("it should return an empty array", () => {
    const pokemon = filterPokemon(mockPokemonsData, "");
    expect(pokemon.length).toBe(0);
  });

  test("it should return an array with charizard object", () => {
    const pokemon = filterPokemon(mockPokemonsData, "charizard");
    const [charizard] = mockPokemonsData;
    expect(pokemon).toBe(charizard);
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });

  test("it should validate the 'name' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });
});
