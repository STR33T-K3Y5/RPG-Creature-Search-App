const creatureID = document.getElementById('creature-id');
const creatureName = document.getElementById('creature-name');
const type = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const getCreature = async () => {
  try {
    const creatureNameOrId = searchInput.value.trim().toLowerCase();
    const response = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrId}`
    );
    
    const data = await response.json();

    // Set Creature info
    creatureName.textContent = data.name.toUpperCase();
    creatureID.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    // Set stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    // Set types
    type.innerHTML = data.types
      .map(obj => `<span>${obj.name.toUpperCase()}</span>`)
      .join(' ');
  } catch (err) {
    alert('Creature not found');
    console.log(`Creature not found: ${err}`);
  }
};

searchButton.addEventListener('click', getCreature);