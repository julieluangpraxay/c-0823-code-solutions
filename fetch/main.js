async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    const users = await response.json();
    console.log('users:', users);
  } catch (error) {
    console.error('error');
  }
}

getUsers();

async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/', {
      method: 'GET',
    });
    const pokemon = await response.json();
    console.log('pokemon:', pokemon);
  } catch (error) {
    console.error('error');
  }
}

getPokemon();
