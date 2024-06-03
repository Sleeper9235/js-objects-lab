const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  console.dir(pokemon, { maxArrayLength: null })
  console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.baseDifficulty = "Easy";

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

game.party.push(pokemon[24])

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push(pokemon[120], pokemon[20], pokemon[103])

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
let gym = [];

for (let gym = 0; gym < game.gyms.length; gym++) {
 if (game.gyms[gym].difficulty < 4) { 
  game.gyms[gym].completed = true;
 }}

console.log(game.gyms)

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

game.party.splice(0,1, pokemon[25]);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
 
 for (let teamRoster = 0; teamRoster < game.party.length; teamRoster++) {
   console.log(game.party[teamRoster].name)
  }
 
  /*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
 for (let allStarters = 0; allStarters < pokemon.length; allStarters++) {
  if (pokemon[allStarters].starter === true) {
    console.log(pokemon[allStarters])
  }
 }

/*
Exercise 10
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// function catchPokemon(pokemonObj) { game.party.push(pokemon[pokemonObj]);} (also works if function is called (for my reference only as excercise calls for a method))


game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemon[pokemonObj])
}

game.catchPokemon(88)


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemon[pokemonObj]);
  for (let ball = 0; ball < game.items.length; ball++) {
    if (game.items[ball].name === 'pokeball') {
      game.items[ball].quantity--;
    }
  } 
}

game.catchPokemon(138)

// console.log(game.items)
// console.log(game.party)

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

for (let gettingBetter of game.gyms) {
  if (gettingBetter.difficulty < 7) {
    gettingBetter.completed = true
  };
}
// console.log(game.gyms)

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
const gymTally = {};
gymTally.completed = 0;
gymTally.incomplete = 0;

game.gymStatus = function() {
  for (let gymComp of game.gyms) { 
    if (gymComp.completed === true) {
      gymTally.completed++; 
   } else if (gymComp.completed === false){
      gymTally.incomplete++;
    }   
  }
  console.log(gymTally);
  }

// the code below is soley for the purpose of studying using square method over dot

game.gymStatus()

function gymTallySquare(arr) {
  const tally = {};
  for (let i = 0; i < arr.length; i++) {
        const completed = arr[i].completed; 
    if (tally[completed]) {
      tally[completed] = tally[completed] + 1;
    } else {
      tally[completed] = 1;
    }
  }
  return tally;
}

console.log(gymTallySquare(game.gyms))

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function() {
      return(game.party.length);
    }

game.partyCount()

console.log(game.partyCount())

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

for (let almostThere of game.gyms) {
  if (almostThere.difficulty < 8) {
    almostThere.completed = true;
  }
}


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game)

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

game.party.sort((a, b) => b.hp - a.hp); 



/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/


game.collection = [];

game.catchPokemon = function(pokemonObj) {

  for (let ball = 0; ball < game.items.length; ball++) {
    if (game.items[ball].name === 'pokeball') {
        game.items[ball].quantity--; 
    }
  }
  if (game.party.length <= 5) {
    game.party.push(pokemon[pokemonObj]);
  } else if (game.party.length >= 5) {
    game.collection.push(pokemon[pokemonObj]); 
  }
}

game.catchPokemon([81])
/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.catchPokemon1 = function(pokemonObj1) {

  for (let ball = 0; ball < game.items.length; ball++) {
    if (game.items[ball].name === 'pokeball') {
        game.items[ball].quantity = Math.max(0, game.items[ball].quantity - 1); 
          if (game.items[ball].quantity > 0) {
            if (game.party.length < 5) {
              game.party.push(pokemon[pokemonObj1]);
              } else {
              game.collection.push(pokemon[pokemonObj1]); 
              }
    } else {
      alert('not enough pokeballs to catch the desired Pokemon')
    }
  }
}
}
 

game.catchPokemon1([84]);
game.catchPokemon1([59]);
game.catchPokemon1([74]); 
game.catchPokemon1([60]); 

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.catchPokemon2 = function(isPokemonInArray) {
  for (let pokeList = 0; pokeList < pokemon.length; pokeList++) {
    let nameCase = pokemon[pokeList].name.toLowerCase();
    let typedName = isPokemonInArray.toLowerCase();
    if (nameCase === typedName) {
       for (let ball = 0; ball < game.items.length; ball++) {
        if (game.items[ball].name === 'pokeball') {
            game.items[ball].quantity = Math.max(0, game.items[ball].quantity - 1); 
              if (game.items[ball].quantity > 0) {
                if (game.party.length < 5) {
                  game.party.push(pokemon[pokeList]);
                  } else {
                  game.collection.push(pokemon[pokeList]); 
                  }
        } else {
          alert('not enough pokeballs to catch the desired Pokemon')
        }
      }
      }
      }
    }
}

game.catchPokemon2('sNoRlAx');

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const typeList = {};
typeList.fire = [];
typeList.grass = [];
typeList.water = [];
typeList.bug = [];
typeList.normal = [];
typeList.posion = [];
typeList.fairy = [];
typeList.fighting = [];
typeList.pyschic = [];
typeList.electric = [];
typeList.ghost = [];
typeList.rock = [];
typeList.ice = [];
typeList.dragon = [];

const pokemonSort = function() {
  for (let elementalType of pokemon) {
    switch(elementalType.type) {
      case "fire":
        typeList.fire.push(elementalType)
      break;
      case "grass": 
        typeList.grass.push(elementalType)
      break; 
      case "water": 
        typeList.water.push(elementalType)
      break;
      case "bug":
        typeList.bug.push(elementalType)
      break;
      case 'normal':
        typeList.normal.push(elementalType)
      break;
      case 'posion':
        typeList.posion.push(elementaltype)
      break;
      case 'fiary':
        typeList.fairy.push(elementalType)
      break;
      case 'fighting': 
        typeList.fighting.push(elementalType)
      break;
      case 'psychic': 
        typeList.pyschic.push(elementalType)
      break;
      case 'electric': 
        typeList.electric.push(elementalType)
      break;
      case 'ghost': 
        typeList.ghost.push(elementalType)
      break; 
      case 'rock':
        typeList.rock.push(elementalType)
      break;
      case 'ice': 
        typeList.ice.push(elementalType)
      break; 
      case 'dragon':
        typeList.dragon.push(elementalType)
      break;
    }
  }
}

pokemonSort();
console.log(typeList); 