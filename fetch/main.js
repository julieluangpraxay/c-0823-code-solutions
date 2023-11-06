async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`fetch Error ${response.status}`);
    const users = await response.json();
    console.log('users:', users);
  } catch (error) {
    console.error('fetch failed', error);
  }
}

getUsers();

async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    if (!response.ok) throw new Error(`fetch Error ${response.status}`);
    const bulbasuar = await response.json();
    console.log('pokemon:', bulbasuar);
  } catch (error) {
    console.error('fetch failed', error);
  }
}

getPokemon();
