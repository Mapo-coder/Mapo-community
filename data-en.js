// ====== ENGLISH CONTENT (same structure and ORDER as data.js) ======
window.EN = {
  CHARACTERS: [
    { name: "Soldier", price: "Free", traits: "Balanced, 100 HP", power: "Life Wave", desc: "Energy beam that crosses the whole screen." },
    { name: "Ninja", price: 300, traits: "Fast, jumps very high", power: "Shadow clones", desc: "Four clones throw a rain of kunai." },
    { name: "Tank", price: 400, traits: "130 HP, slow but sturdy", power: "Earthquake", desc: "Shockwave and falling rocks." },
    { name: "Engineer", price: 500, traits: "Starts with extra ammo (Bazooka +2, Dynamite +1, Cluster +1)", power: "Alchemy", desc: "Stone spikes burst out of the ground." },
    { name: "Mage", price: 600, traits: "Takes 20% less damage", power: "Explosion", desc: "A gigantic explosion." },
    { name: "Robot", price: 800, traits: "105 HP, no fall damage, little knockback", power: "Rocket punch", desc: "A giant fist launched at full speed." },
    { name: "Knight", price: 750, traits: "120 HP in armor, takes 10% less damage, starts with a Shield", power: "Royal charge", desc: "Lightning charge, shield first, knocks down everything in its path." },
    { name: "Alien", price: 850, traits: "95 HP, jumps very high, lands softly, starts with a Teleport and a Laser", power: "Abduction", desc: "A tractor beam lifts the enemy then drops them hard." },
    { name: "Samurai", price: 700, traits: "105 HP, agile, takes 10% less damage", power: "Iaido", desc: "A flash, a single sword strike cuts through the enemy." },
    { name: "Pirate", price: 650, traits: "115 HP, starts with extra Bazooka, Grenades and a Moon Bomb", power: "Cannonade", desc: "A rain of cannonballs on the target." },
    { name: "Vampire", price: 900, traits: "Soft landings, starts with a Heal", power: "Bite", desc: "Drains 35 HP from the enemy and gives them to you." }
  ],
  WEAPONS: [
    { name: "Bazooka", price: "Start", ammo: "5", dmg: "50", desc: "Powerful rocket, affected by wind." },
    { name: "Grenade", price: "Start", ammo: "∞", dmg: "45", desc: "Bounces, explodes after 3 s." },
    { name: "Pistol", price: "Start", ammo: "∞", dmg: "22", desc: "Fast, precise, small hole." },
    { name: "Dynamite", price: "Start", ammo: "2", dmg: "70", desc: "Dropped or thrown, huge explosion after 4 s." },
    { name: "Shotgun", price: 150, ammo: "", dmg: "12 ×5", desc: "5 pellets in a fan, deadly up close." },
    { name: "Sniper", price: 250, ammo: "", dmg: "42", desc: "Flat, very fast shot." },
    { name: "Cluster", price: 300, ammo: "", dmg: "", desc: "Grenade that bursts into 6 fragments." },
    { name: "Airstrike", price: 400, ammo: "", dmg: "", desc: "Marks a target: 5 bombs fall from the sky." },
    { name: "Teleport", price: 350, ammo: "", dmg: "", desc: "Teleports you where you aim." },
    { name: "Mine", price: 200, ammo: "", dmg: "", desc: "Placed at your feet, explodes when an enemy walks by." },
    { name: "Shield", price: 250, ammo: "", dmg: "", desc: "Reduces damage by 70% until your next turn." },
    { name: "Moon Bomb", price: 180, ammo: "", dmg: "55", desc: "Bounces like a mad ball before exploding." },
    { name: "Boomerang", price: 220, ammo: "", dmg: "32", desc: "Flies out, slows down and comes back: careful!" },
    { name: "Heal", price: 150, ammo: "", dmg: "", desc: "Gives you 30 HP (uses your turn)." },
    { name: "Snail", price: 450, ammo: "", dmg: "70", desc: "Crawls along the ground, then explodes." },
    { name: "Sun Bomb", price: 500, ammo: "1", dmg: "110", desc: "Solar bomb: gigantic explosion." },
    { name: "Napalm", price: 400, ammo: "", dmg: "7 / turn", desc: "Sets the ground on fire: burns for 4 turns." },
    { name: "Jetpack", price: 300, ammo: "", dmg: "", desc: "Fly for about 2.5 s, hold the jump key (does not use your turn)." },
    { name: "Grapple", price: 250, ammo: "", dmg: "", desc: "Hooks onto the terrain and pulls you there (does not use your turn)." },
    { name: "Laser", price: 350, ammo: "", dmg: "32", desc: "Instant beam: hits the first enemy on its path." },
    { name: "Lightning", price: 450, ammo: "", dmg: "38", desc: "Falls from the sky where you aim and leaves a hole in the ground." },
    { name: "Black Hole", price: 600, ammo: "", dmg: "", desc: "Thrown like a grenade, pulls in everything (players, shots) for 2.5 s and hurts at the center." },
    { name: "Sticky Grenade", price: 350, ammo: "", dmg: "", desc: "Sticks to the terrain or to a player (it follows them!), then explodes after 3.5 s." }
  ],
  MAPS: ["Hills", "Island", "Mountain", "Platforms", "Cave", "Fortress", "Volcano", "Ruins", "Galleon", "Ice", "Desert", "Space Station"],
  MODES: [
    { name: "Normal", desc: "The classic rules." },
    { name: "Zero gravity", desc: "Everything floats." },
    { name: "Meteor shower", desc: "Meteors crash into the arena." },
    { name: "Slippery ground", desc: "You can't stop dead." },
    { name: "Lava", desc: "Water turns into lava and rises." },
    { name: "No water", desc: "No more water at the bottom of the arena." },
    { name: "Hurricane", desc: "Strong wind." },
    { name: "Fragile", desc: "25 HP each." },
    { name: "Super charge", desc: "Super gauge ×3." },
    { name: "Unlimited arsenal", desc: "99 ammo per weapon." },
    { name: "Mega explosions", desc: "Explosions ×1.5." },
    { name: "Vampirism", desc: "Heal 30% of the damage you deal." },
    { name: "King of the Hill", desc: "Hold the golden hill: 5 points to win." },
    { name: "Crate Hunt", desc: "Pick up 5 crates to win." }
  ],
  CAMPAIGN: [
    { chapter: "The Duelist", map: "Hills", boss: "Ghost Ronin", cls: "Samurai" },
    { chapter: "The Corsair", map: "Galleon", boss: "Captain Red-Beard", cls: "Pirate" },
    { chapter: "The Lord", map: "Fortress", boss: "Count Nocturne", cls: "Vampire" },
    { chapter: "The Colossus", map: "Volcano", boss: "Magma Golem", cls: "Tank" },
    { chapter: "The Archmage", map: "Ruins", boss: "Blazing Archmage", cls: "Mage" },
    { chapter: "The Supreme Shadow", map: "Platforms", boss: "Supreme Shadow", cls: "Ninja" }
  ],
  GUIDES: [
    {
      id: "prise-en-main", title: "Getting started: the controls", level: "Beginner", tags: ["basics", "controls"],
      summary: "Move, aim and fire from your very first match.",
      body: `
        <ul>
          <li><strong>Mouse</strong>: aim and set power (the farther the cursor, the stronger the shot).</li>
          <li><kbd>Space</kbd>: fire. <kbd>←</kbd> <kbd>→</kbd>: move. <kbd>W</kbd>: jump.</li>
          <li><kbd>X</kbd>: super power (when the gauge is full).</li>
          <li><strong>Right click</strong>: weapon menu, or keys <kbd>1</kbd>–<kbd>9</kbd> and <kbd>0</kbd>.</li>
          <li><kbd>P</kbd> / <kbd>Esc</kbd>: pause.</li>
        </ul>
        <p>The game runs in your browser (keyboard + mouse, no mobile support yet). Each turn lasts <strong>30 seconds</strong>.</p>`
    },
    {
      id: "puissance-distance", title: "Setting your power", level: "Beginner", tags: ["basics", "aiming"],
      summary: "Cursor distance sets shot strength; above 100% you gain range but lose damage.",
      body: `
        <p>There's no gauge to charge: move the cursor away to shoot harder, closer to shoot softer.</p>
        <ul>
          <li><strong>Above 100% power</strong>: more range, less damage. Keep it for distant targets.</li>
          <li>For a close target, keep the cursor near you, and mind your own blast.</li>
          <li><strong>Wind</strong> pushes some weapons (like the Bazooka): check it before firing.</li>
        </ul>`
    },
    {
      id: "endurance", title: "Stamina: managing your turn", level: "Beginner", tags: ["basics", "movement"],
      summary: "Walking and jumping use stamina, but you can always aim and shoot.",
      body: `
        <ul>
          <li>Each turn gives <strong>100 stamina</strong>. Walking and jumping use it (about 450 pixels of walking).</li>
          <li>At zero you can't move anymore, but you can still <strong>aim and fire</strong>.</li>
          <li>Don't waste it: keep some to take cover after you shoot.</li>
          <li>The <strong>Jetpack</strong> and <strong>Grapple</strong> don't use your turn, so you can combine them with a shot.</li>
        </ul>`
    },
    {
      id: "terrain-arme-bouclier", title: "The terrain: your weapon and your shield", level: "Intermediate", tags: ["strategy", "terrain"],
      summary: "Dig under your rival to drop them in the water, keep some ground to protect yourself.",
      body: `
        <ul>
          <li><strong>Offense</strong>: dig under the enemy's feet to make them fall or cut them off.</li>
          <li><strong>Defense</strong>: stay behind thick terrain. Avoid an edge you just weakened.</li>
          <li>Think about what your shot destroys: a hole under yourself can cost you the match.</li>
          <li><strong>Napalm</strong> and <strong>Lightning</strong> reshape the terrain: a Lightning hole can open a path or make someone fall.</li>
        </ul>`
    },
    {
      id: "boutique-pieces", title: "Coins, shop and first purchases", level: "Beginner", tags: ["progression", "weapons"],
      summary: "The game is free: earn coins and unlock weapons and characters. Here's where to start.",
      body: `
        <p>No account, no real-money purchases. Your progress (coins, unlocks) is saved <strong>in your browser</strong>: avoid clearing the site's data.</p>
        <p>Starting weapons: Bazooka, Grenade, Pistol, Dynamite. For your first shop visit, versatile and affordable picks:</p>
        <ul>
          <li><strong>Heal</strong> (150) and <strong>Shotgun</strong> (150): cheap and useful right away.</li>
          <li><strong>Mine</strong> (200) and <strong>Moon Bomb</strong> (180): to trap or surprise.</li>
          <li><strong>Jetpack</strong> (300) or <strong>Grapple</strong> (250): to never get stuck again.</li>
        </ul>
        <p>Showy weapons (Black Hole 600, Sun Bomb 500…) come later. There are also purely cosmetic weapon skins.</p>`
    },
    {
      id: "choisir-personnage", title: "Which character to pick?", level: "Intermediate", tags: ["characters", "strategy"],
      summary: "Each character has strengths and a super power. A few style pointers.",
      body: `
        <ul>
          <li><strong>Starting out</strong>: the <strong>Soldier</strong> is free and balanced.</li>
          <li><strong>Tanky</strong>: the <strong>Tank</strong> (130 HP), the <strong>Knight</strong> (120 HP, armor, starts with a Shield), the <strong>Mage</strong> (20% less damage).</li>
          <li><strong>Mobility</strong>: the <strong>Ninja</strong> and <strong>Alien</strong> jump very high. The <strong>Robot</strong> takes no fall damage.</li>
          <li><strong>Bonus ammo</strong>: the <strong>Engineer</strong> and <strong>Pirate</strong> start with more weapons.</li>
          <li><strong>Sustain</strong>: the <strong>Vampire</strong> drains 35 HP with Bite.</li>
        </ul>
        <p>The super gauge fills when you <strong>deal and take</strong> damage: getting hit also charges it.</p>
        <p>Full details on the <a href="wiki.html#personnages">Characters</a> page.</p>`
    },
    {
      id: "mode-blitz", title: "BLITZ mode: everyone plays at once", level: "Intermediate", tags: ["modes", "blitz"],
      summary: "No turns: the pace changes completely.",
      body: `
        <ul>
          <li>Never stand still: move between shots.</li>
          <li>Keep your favorite weapons handy with <kbd>1</kbd>–<kbd>9</kbd> and <kbd>0</kbd>.</li>
          <li>Block lines of fire with the terrain instead of trading shot for shot.</li>
        </ul>`
    },
    {
      id: "variantes", title: "Rule variants", level: "Intermediate", tags: ["modes"],
      summary: "Zero gravity, lava, hurricane, fragile… each variant changes how you play.",
      body: `
        <ul>
          <li><strong>Lava</strong>: water turns into lava and rises. Don't stay near the ground too long.</li>
          <li><strong>Fragile</strong> (25 HP): precision matters. Favor the Laser or Sniper.</li>
          <li><strong>Hurricane</strong>: the wind is huge, weapons affected by wind need correction.</li>
          <li><strong>King of the Hill</strong> and <strong>Crate Hunt</strong>: objectives instead of elimination (5 points, or 5 crates).</li>
        </ul>
        <p>Full list on the <a href="wiki.html#modes">Modes</a> page.</p>`
    },
    {
      id: "campagne", title: "Campaign: the 6 bosses", level: "Advanced", tags: ["campaign", "strategy"],
      summary: "Six chapters, six maps, six bosses, each playing a character you already know.",
      body: `
        <p>Each boss uses a playable character, so you can anticipate their super power (for example Count Nocturne's Bite or Captain Red-Beard's Cannonade).</p>
        <p>Chapter details on the <a href="wiki.html#campagne">Campaign</a> page.</p>`
    },
    {
      id: "editeur-cartes", title: "Create your own arena", level: "Advanced", tags: ["editor", "community"],
      summary: "The map editor lets you draw your terrain. Share it with the community!",
      body: `
        <p>Draw your arena, then test it in a duel. A good terrain has heights, cover and areas to dig.</p>
        <p>Made a map you're proud of? Post a screenshot on the Discord.</p>`
    }
  ]
};
