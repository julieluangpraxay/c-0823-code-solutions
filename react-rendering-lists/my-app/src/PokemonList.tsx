const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

export function PokemonList() {
  const pokemon = pokedex.map((pokedex) => (
    <li key={pokedex.number}>{pokedex.name}</li>
  ));

  return <ul>{pokemon}</ul>;
}
