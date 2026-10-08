// ====== CONTENU DE LA PAGE CRYSTAL KEEPER (FR / EN) ======
// Pour modifier un texte : change-le ici. Les chiffres viennent du jeu lui-même.
window.CK = {
  fr: {
    heroes: [
      { name: "Eldrin le Mage", img: "mage_portrait.png", price: "Gratuit", traits: "Équilibré, héros de départ.", spell: "Éclat arcanique", spellDesc: "Blesse et ralentit tous les ennemis autour de lui. Recharge : 22 s." },
      { name: "Lyra la Rôdeuse", img: "portrait_ranger.png", price: 150, traits: "Tire vite et loin, mais fragile (moins de vie).", spell: "Pluie de flèches", spellDesc: "Une tempête de flèches frappe jusqu'à 12 ennemis. Recharge : 18 s." },
      { name: "Sire Aldric le Chevalier", img: "portrait_knight.png", price: 250, traits: "Très résistant et frappe fort, mais à courte portée. Son coup d'air tranchant traverse un ennemi de plus.", spell: "Onde du gardien", spellDesc: "Repousse les ennemis, répare le cristal et te soigne. Recharge : 24 s." }
    ],
    towers: [
      { name: "Archer", img: "tower_archer.png", price: 40, desc: "Flèches rapides. Simple et efficace partout." },
      { name: "Bûcher", img: "tower_fire.png", price: 70, desc: "Explosion de feu qui touche une zone : parfait contre les groupes." },
      { name: "Givre", img: "tower_frost.png", price: 60, desc: "Ralentit les ennemis : laisse plus de temps aux autres tours." },
      { name: "Tempête", img: "tower_storm.png", price: 90, desc: "Éclair en chaîne qui saute d'un ennemi à l'autre (plus de cibles à chaque niveau)." },
      { name: "Venin", img: "tower_poison.png", price: 80, desc: "Poison qui inflige des dégâts dans le temps. Idéal contre les gros ennemis." },
      { name: "Canon", img: "tower_cannon.png", price: 110, desc: "Gros boulet lent à longue portée et grosse explosion." }
    ],
    worlds: [
      { name: "Forêt des Murmures", boss: "L'Ogre", img: "forest.jpg", unlock: "Disponible dès le départ.", mons: "Gobelin, loup, chauve-souris, orc, spectre." },
      { name: "Pic de Givre", boss: "Le Yéti", img: "snow.jpg", unlock: "Atteins la vague 10 dans la Forêt des Murmures.", mons: "Loup des neiges, esprit de givre, golem de glace, spectre." },
      { name: "Désert Brûlant", boss: "Le Pharaon", img: "desert.jpg", unlock: "Atteins la vague 10 au Pic de Givre.", mons: "Scorpion, esprit de sable, momie, orc." },
      { name: "Forge des Braises", boss: "Le Dragon", img: "volcano.jpg", unlock: "Atteins la vague 10 dans le Désert Brûlant.", mons: "Diablotin, slime de lave (il se divise en deux), golem de magma, spectre." }
    ],
    special: [
      ["Archer squelette", "Tire de loin sur le cristal, les tours et toi. Apparaît dès la vague 5."],
      ["Gobelin soigneur", "Soigne les monstres autour de lui. Tue-le en premier ! Dès la vague 7."],
      ["Orc à bouclier", "Prend très peu de dégâts des tirs directs : utilise les dégâts de zone (feu, canon) ou le poison. Dès la vague 8."]
    ],
    events: [
      ["Lune de sang", "Les monstres sont plus rapides, mais lâchent 50 % d'or en plus."],
      ["Ruée vers l'or", "Chaque monstre lâche le double d'or."],
      ["Pluie de météores", "Des météores tombent (un cercle d'alerte s'affiche) : ils blessent les monstres, et toi si tu restes dessous."],
      ["Pluie de soin", "Le cristal, les tours et toi vous soignez. Les monstres sont ralentis."]
    ],
    achievements: [
      ["Tenir la ligne", "Atteins la vague 10.", 15], ["Inébranlable", "Atteins la vague 20.", 40], ["Tueur de boss", "Bats ton premier boss.", 15],
      ["Légende des quatre royaumes", "Bats le boss de chaque monde.", 80], ["Maître bâtisseur", "Possède une tour de niveau 3.", 15],
      ["Intouchable", "Termine la vague 5 ou plus sans que le cristal soit touché.", 20], ["Ruée vers l'or", "Ramasse 1000 d'or en une partie.", 20],
      ["Lanceur de sorts", "Lance le sort de ton héros 50 fois.", 20], ["Voyageur des mondes", "Atteins la vague 10 dans les trois premiers mondes.", 30],
      ["Héros du jour", "Termine les 3 missions du jour en une journée.", 20], ["Chasseur de monstres", "Vaincs 1000 monstres au total.", 30],
      ["Gardien sans fin", "Atteins la vague 30.", 80]
    ],
    guides: [
      { title: "Bien débuter", level: "Débutant", summary: "Les 5 réflexes pour tenir les premières vagues.", body: `<ul><li>Au début, construis <strong>2 ou 3 tours</strong> près du cristal : Archer d'abord (40 or), c'est le moins cher.</li><li>Ton héros <strong>tire tout seul</strong>. Déplace-toi pour ramasser l'or laissé par les monstres.</li><li>Reste <strong>près du cristal</strong> : tu le répares et tu te soignes.</li><li>Appelle la vague suivante tôt avec <kbd>Espace</kbd> si tu te sens fort : tu gagnes plus d'or à la fin.</li><li>À chaque niveau, choisis ton amélioration : les <strong>dégâts</strong> et les <strong>tours</strong> sont de bons choix au début.</li></ul>` },
      { title: "Fusionner et améliorer les tours", level: "Débutant", summary: "Deux tours identiques valent mieux que deux tours séparées.", body: `<ul><li>Clique sur une tour, puis sur une <strong>tour identique</strong> du même niveau : elles fusionnent en une seule, plus forte (3 niveaux).</li><li>Plus de place ? Le bouton <strong>Améliorer</strong> monte une tour d'un niveau avec de l'or, sans emplacement libre (touche <kbd>U</kbd>).</li><li>Le bouton <strong>Fusion auto</strong> s'occupe du reste quand deux tours identiques sont disponibles.</li><li>Vendre une tour rend 60 % de ce qu'elle a coûté (<kbd>X</kbd>).</li></ul>` },
      { title: "Choisir son héros", level: "Intermédiaire", summary: "Mage, rôdeuse ou chevalier : lequel pour quelle partie ?", body: `<ul><li><strong>Eldrin le Mage</strong> : le plus polyvalent, parfait pour apprendre. Son éclat ralentit tout autour de lui.</li><li><strong>Lyra la Rôdeuse</strong> : excellente contre les monstres volants et les archers grâce à sa portée. Reste à l'abri des tours.</li><li><strong>Sire Aldric</strong> : encaisse beaucoup et soigne le cristal avec son sort. À placer au centre, près du cristal, contre les foules.</li></ul>` },
      { title: "Vaincre les boss", level: "Intermédiaire", summary: "Un boss toutes les 5 vagues : comment s'y préparer.", body: `<ul><li>Tu reçois <strong>+40 or</strong> au début de chaque vague de boss : dépense-le avant qu'il arrive.</li><li>Ton héros et les tours visent d'abord les <strong>petits monstres</strong> : ils invoquent des renforts, les gros boss sont secondaires.</li><li>Les tours <strong>Venin</strong> et <strong>Givre</strong> sont très efficaces sur un boss : poison continu et ralentissement.</li><li>Garde ton <strong>sort</strong> pour le moment où le boss arrive près du cristal.</li></ul>` },
      { title: "Les quatre mondes", level: "Intermédiaire", summary: "Chaque monde est un cran plus difficile et rapporte plus d'éclats.", body: `<ul><li>Pour débloquer un monde, atteins la <strong>vague 10</strong> dans le précédent.</li><li>Plus le monde est difficile, plus tu gagnes d'<strong>éclats</strong> à la fin de la partie.</li><li>Les <strong>archers</strong> et les <strong>gobelins soigneurs</strong> apparaissent dans tous les mondes : prévois des tours à longue portée (Canon) et des dégâts de zone.</li></ul>` },
      { title: "La Forge, les éclats et les skins", level: "Débutant", summary: "Comment progresser d'une partie à l'autre.", body: `<ul><li>À la fin de chaque partie, tu gagnes des <strong>éclats</strong> selon la vague atteinte et le nombre d'ennemis vaincus.</li><li>Dans la <strong>Forge</strong>, achète des bonus permanents : vie du héros, dégâts, vie du cristal, or de départ, vitesse.</li><li>Débloque <strong>Lyra</strong> (150 éclats) et <strong>Sire Aldric</strong> (250 éclats) dans l'écran Héros.</li><li>Les <strong>skins de cristal</strong> (120 à 500 éclats) sont purement décoratifs.</li></ul>` },
      { title: "Sur téléphone et tablette", level: "Débutant", summary: "Tout se joue au doigt, en mode paysage.", body: `<ul><li>Tourne ton appareil en <strong>paysage</strong> (un message te le rappelle en portrait).</li><li>Pose le doigt <strong>n'importe où à gauche</strong> de l'écran et glisse : c'est la manette virtuelle.</li><li>Touche un emplacement pour construire, une tour pour la sélectionner, le <strong>bouton rond</strong> pour lancer le sort.</li><li>Les parties sont <strong>sauvegardées automatiquement</strong> : tu peux quitter et reprendre avec « Continuer ».</li></ul>` }
    ]
  },
  en: {
    heroes: [
      { name: "Eldrin the Mage", img: "mage_portrait.png", price: "Free", traits: "Balanced, the starting hero.", spell: "Arcane Burst", spellDesc: "Damages and slows every foe around him. Cooldown: 22 s." },
      { name: "Lyra the Ranger", img: "portrait_ranger.png", price: 150, traits: "Shoots fast and far, but fragile (less health).", spell: "Arrow Rain", spellDesc: "A storm of arrows hits up to 12 foes. Cooldown: 18 s." },
      { name: "Sir Aldric the Knight", img: "portrait_knight.png", price: 250, traits: "Very tough and hits hard, but short-ranged. His slash of cutting air pierces one more enemy.", spell: "Guardian Wave", spellDesc: "Pushes foes back, repairs the crystal and heals you. Cooldown: 24 s." }
    ],
    towers: [
      { name: "Archer", img: "tower_archer.png", price: 40, desc: "Fast arrows. Simple and effective everywhere." },
      { name: "Pyre", img: "tower_fire.png", price: 70, desc: "A fire blast that hits an area: perfect against groups." },
      { name: "Frost", img: "tower_frost.png", price: 60, desc: "Slows enemies, giving your other towers more time." },
      { name: "Storm", img: "tower_storm.png", price: 90, desc: "A chain bolt that jumps from foe to foe (more targets at each level)." },
      { name: "Venom", img: "tower_poison.png", price: 80, desc: "Poison that deals damage over time. Great against big enemies." },
      { name: "Cannon", img: "tower_cannon.png", price: 110, desc: "A slow heavy shell with long range and a big explosion." }
    ],
    worlds: [
      { name: "Whispering Forest", boss: "The Ogre", img: "forest.jpg", unlock: "Available from the start.", mons: "Goblin, wolf, bat, orc, wraith." },
      { name: "Frostpeak", boss: "The Yeti", img: "snow.jpg", unlock: "Reach wave 10 in the Whispering Forest.", mons: "Snow wolf, frost sprite, ice golem, wraith." },
      { name: "Sunscorch Desert", boss: "The Pharaoh", img: "desert.jpg", unlock: "Reach wave 10 in Frostpeak.", mons: "Scorpion, sand spirit, mummy, orc." },
      { name: "Emberforge", boss: "The Dragon", img: "volcano.jpg", unlock: "Reach wave 10 in the Sunscorch Desert.", mons: "Imp, lava slime (splits in two), magma golem, wraith." }
    ],
    special: [
      ["Skeleton archer", "Shoots the crystal, your towers and you from afar. Appears from wave 5."],
      ["Goblin shaman", "Heals the monsters around it. Kill it first! From wave 7."],
      ["Shield orc", "Takes very little damage from direct shots: use area damage (Pyre, Cannon) or poison. From wave 8."]
    ],
    events: [
      ["Blood Moon", "Monsters are faster, but drop 50% more gold."],
      ["Gold Rush", "Every monster drops double gold."],
      ["Meteor Shower", "Meteors fall (an alert circle shows where): they hurt monsters, and you if you stand under them."],
      ["Healing Rain", "The crystal, the towers and you slowly heal. Monsters are slowed."]
    ],
    achievements: [
      ["Hold the Line", "Reach wave 10.", 15], ["Unbreakable", "Reach wave 20.", 40], ["Boss Slayer", "Defeat your first boss.", 15],
      ["Legend of the Four Realms", "Defeat the boss of every world.", 80], ["Master Builder", "Own a level 3 tower.", 15],
      ["Untouchable", "Clear wave 5 or later without the crystal taking damage.", 20], ["Gold Rush", "Collect 1000 gold in a single game.", 20],
      ["Spellcaster", "Cast your hero spell 50 times.", 20], ["World Traveller", "Reach wave 10 in the first three worlds.", 30],
      ["Daily Hero", "Complete all 3 daily missions in one day.", 20], ["Monster Hunter", "Defeat 1000 monsters in total.", 30],
      ["Endless Guardian", "Reach wave 30.", 80]
    ],
    guides: [
      { title: "Getting started", level: "Beginner", summary: "The 5 habits that get you through the first waves.", body: `<ul><li>At the start, build <strong>2 or 3 towers</strong> near the crystal: Archer first (40 gold), it is the cheapest.</li><li>Your hero <strong>shoots on its own</strong>. Move around to pick up the gold monsters drop.</li><li>Stay <strong>close to the crystal</strong>: you repair it and heal yourself.</li><li>Call the next wave early with <kbd>Space</kbd> when you feel strong: you earn more gold at the end.</li><li>At each level, pick your upgrade: <strong>damage</strong> and <strong>towers</strong> are good early choices.</li></ul>` },
      { title: "Merging and upgrading towers", level: "Beginner", summary: "Two identical towers are worth more than two separate ones.", body: `<ul><li>Click a tower, then an <strong>identical tower</strong> of the same level: they merge into one stronger tower (3 levels).</li><li>No free slot? The <strong>Upgrade</strong> button raises a tower one level with gold, without a free slot (key <kbd>U</kbd>).</li><li>The <strong>Auto-merge</strong> button handles the rest when two identical towers are available.</li><li>Selling a tower returns 60% of what it cost (<kbd>X</kbd>).</li></ul>` },
      { title: "Choosing your hero", level: "Intermediate", summary: "Mage, ranger or knight: which one for which game?", body: `<ul><li><strong>Eldrin the Mage</strong>: the most versatile, perfect for learning. His burst slows everything around him.</li><li><strong>Lyra the Ranger</strong>: excellent against flying monsters and archers thanks to her range. Stay behind your towers.</li><li><strong>Sir Aldric</strong>: soaks up damage and heals the crystal with his spell. Stand in the middle, near the crystal, against crowds.</li></ul>` },
      { title: "Beating the bosses", level: "Intermediate", summary: "A boss every 5 waves: how to prepare.", body: `<ul><li>You get <strong>+40 gold</strong> at the start of every boss wave: spend it before the boss arrives.</li><li>Your hero and towers target <strong>small monsters</strong> first: bosses summon reinforcements, so the big one comes second.</li><li><strong>Venom</strong> and <strong>Frost</strong> towers are very effective on a boss: constant poison and slowing.</li><li>Keep your <strong>spell</strong> for when the boss gets close to the crystal.</li></ul>` },
      { title: "The four worlds", level: "Intermediate", summary: "Each world is a notch harder and pays more shards.", body: `<ul><li>To unlock a world, reach <strong>wave 10</strong> in the previous one.</li><li>The harder the world, the more <strong>shards</strong> you earn at the end of the game.</li><li><strong>Archers</strong> and <strong>goblin shamans</strong> appear in every world: plan long-range towers (Cannon) and area damage.</li></ul>` },
      { title: "The Forge, shards and skins", level: "Beginner", summary: "How to make progress from one game to the next.", body: `<ul><li>At the end of each game you earn <strong>shards</strong> depending on the wave reached and the enemies defeated.</li><li>In the <strong>Forge</strong>, buy permanent bonuses: hero health, damage, crystal health, starting gold, speed.</li><li>Unlock <strong>Lyra</strong> (150 shards) and <strong>Sir Aldric</strong> (250 shards) in the Heroes screen.</li><li><strong>Crystal skins</strong> (120 to 500 shards) are purely cosmetic.</li></ul>` },
      { title: "On phone and tablet", level: "Beginner", summary: "Everything plays by touch, in landscape.", body: `<ul><li>Turn your device to <strong>landscape</strong> (a message reminds you in portrait).</li><li>Put your finger <strong>anywhere on the left</strong> of the screen and drag: that is the virtual joystick.</li><li>Tap a slot to build, a tower to select it, the <strong>round button</strong> to cast your spell.</li><li>Games are <strong>saved automatically</strong>: you can quit and pick up again with Continue.</li></ul>` }
    ]
  }
};
