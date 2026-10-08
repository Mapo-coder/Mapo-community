// ====== CONTENU DU SITE (source : fiche technique du jeu, version publique) ======
// Pour ajouter un guide : copie un bloc { ... } dans GUIDES. Rien d'autre à toucher.
// "body" accepte du HTML simple (<p>, <ul><li>, <strong>, <kbd>).

window.CHARACTERS = [
  { name: "Soldat", price: "Gratuit", traits: "Équilibré, 100 PV", power: "Onde de vie", desc: "Rayon d'énergie qui traverse tout l'écran." },
  { name: "Ninja", price: 300, traits: "Rapide, saute très haut", power: "Clones de l'ombre", desc: "Quatre clones lancent une pluie de kunai." },
  { name: "Tank", price: 400, traits: "130 PV, lent mais robuste", power: "Tremblement de terre", desc: "Onde de choc et chute de rochers." },
  { name: "Ingénieur", price: 500, traits: "Munitions bonus au départ (Bazooka +2, Dynamite +1, Cluster +1)", power: "Alchimie", desc: "Des pointes de pierre jaillissent du sol." },
  { name: "Mage", price: 600, traits: "Subit 20 % de dégâts en moins", power: "Explosion", desc: "Une explosion gigantesque." },
  { name: "Robot", price: 800, traits: "105 PV, aucun dégât de chute, peu de recul", power: "Poing fusée", desc: "Un poing géant lancé à pleine vitesse." },
  { name: "Chevalier", price: 750, traits: "120 PV en armure, 10 % de dégâts en moins, commence avec un Bouclier", power: "Charge royale", desc: "Charge foudroyante, bouclier en avant, qui renverse tout sur son passage." },
  { name: "Alien", price: 850, traits: "95 PV, saute très haut, atterrit en douceur, commence avec Téléportation et Laser", power: "Abduction", desc: "Un rayon tracteur soulève l'ennemi puis le laisse retomber violemment." },
  { name: "Samouraï", price: 700, traits: "105 PV, agile, 10 % de dégâts en moins", power: "Iaido", desc: "Un éclair, un seul coup de sabre qui tranche l'ennemi." },
  { name: "Pirate", price: 650, traits: "115 PV, commence avec Bazooka, Grenades et Bombe Lune en plus", power: "Cannonade", desc: "Une pluie de boulets de canon sur la cible." },
  { name: "Vampire", price: 900, traits: "Atterrit en douceur, commence avec un Soin", power: "Morsure", desc: "Draine 35 PV à l'ennemi et te les donne." }
];

// price: "Départ" = disponible dès le début, sinon prix en pièces. ammo: "∞" = illimité.
window.WEAPONS = [
  { name: "Bazooka", price: "Départ", ammo: "5", dmg: "50", desc: "Roquette puissante, influencée par le vent." },
  { name: "Grenade", price: "Départ", ammo: "∞", dmg: "45", desc: "Rebondit, explose après 3 s." },
  { name: "Pistolet", price: "Départ", ammo: "∞", dmg: "22", desc: "Rapide, précis, petit trou." },
  { name: "Dynamite", price: "Départ", ammo: "2", dmg: "70", desc: "Posée ou lancée, énorme explosion après 4 s." },
  { name: "Fusil à pompe", price: 150, ammo: "", dmg: "12 ×5", desc: "5 plombs en éventail, mortel de près." },
  { name: "Sniper", price: 250, ammo: "", dmg: "42", desc: "Tir tendu et très rapide." },
  { name: "Cluster", price: 300, ammo: "", dmg: "", desc: "Grenade qui éclate en 6 fragments." },
  { name: "Frappe aérienne", price: 400, ammo: "", dmg: "", desc: "Marque une cible : 5 bombes tombent du ciel." },
  { name: "Téléportation", price: 350, ammo: "", dmg: "", desc: "Te téléporte où tu vises." },
  { name: "Mine", price: 200, ammo: "", dmg: "", desc: "Posée à tes pieds, explose au passage d'un ennemi." },
  { name: "Bouclier", price: 250, ammo: "", dmg: "", desc: "Réduit les dégâts de 70 % jusqu'à ton prochain tour." },
  { name: "Bombe Lune", price: 180, ammo: "", dmg: "55", desc: "Rebondit comme une balle folle avant d'exploser." },
  { name: "Boomerang", price: 220, ammo: "", dmg: "32", desc: "Part, ralentit et revient : attention !" },
  { name: "Soin", price: 150, ammo: "", dmg: "", desc: "Te rend 30 PV (utilise ton tour)." },
  { name: "Escargot", price: 450, ammo: "", dmg: "70", desc: "Rampe sur le sol puis explose." },
  { name: "Bombe Soleil", price: 500, ammo: "1", dmg: "110", desc: "Bombe solaire : explosion gigantesque." },
  { name: "Napalm", price: 400, ammo: "", dmg: "7 / tour", desc: "Enflamme le sol : brûle pendant 4 tours." },
  { name: "Jetpack", price: 300, ammo: "", dmg: "", desc: "Vole environ 2,5 s en maintenant la touche de saut (n'utilise pas ton tour)." },
  { name: "Grappin", price: 250, ammo: "", dmg: "", desc: "S'accroche au terrain et t'y tire (n'utilise pas ton tour)." },
  { name: "Laser", price: 350, ammo: "", dmg: "32", desc: "Rayon instantané : touche le premier ennemi sur sa trajectoire." },
  { name: "Foudre", price: 450, ammo: "", dmg: "38", desc: "Tombe du ciel où tu vises, et creuse un trou dans le sol." },
  { name: "Trou noir", price: 600, ammo: "", dmg: "", desc: "Lancé comme une grenade, aspire tout (joueurs, tirs) pendant 2,5 s et blesse en son centre." },
  { name: "Grenade collante", price: 350, ammo: "", dmg: "", desc: "Colle au terrain ou à un joueur (elle le suit !), explose après 3,5 s." }
];

window.MAPS = ["Collines", "Île", "Montagne", "Plateformes", "Grotte", "Forteresse", "Volcan", "Ruines", "Galion", "Glace", "Désert", "Station spatiale"];

window.MODES = [
  { name: "Normal", desc: "Les règles classiques." },
  { name: "Gravité zéro", desc: "Tout flotte." },
  { name: "Pluie de météores", desc: "Des météores s'écrasent sur l'arène." },
  { name: "Sol glissant", desc: "Impossible de s'arrêter net." },
  { name: "Lave", desc: "L'eau devient de la lave et monte." },
  { name: "Sans eau", desc: "Plus d'eau en bas de l'arène." },
  { name: "Ouragan", desc: "Vent très fort." },
  { name: "Fragile", desc: "25 PV chacun." },
  { name: "Super charge", desc: "Jauge de super pouvoir ×3." },
  { name: "Arsenal illimité", desc: "99 munitions par arme." },
  { name: "Méga explosions", desc: "Explosions ×1,5." },
  { name: "Vampirisme", desc: "Tu récupères 30 % des dégâts infligés." },
  { name: "Roi de la colline", desc: "Tiens la colline dorée : 5 points pour gagner." },
  { name: "Chasse aux caisses", desc: "Ramasse 5 caisses pour gagner." }
];

window.CAMPAIGN = [
  { chapter: "Le Duelliste", map: "Collines", boss: "Ronin Fantôme", cls: "Samouraï" },
  { chapter: "Le Corsaire", map: "Galion", boss: "Capitaine Barbe-Rouge", cls: "Pirate" },
  { chapter: "Le Seigneur", map: "Forteresse", boss: "Comte Nocturne", cls: "Vampire" },
  { chapter: "Le Colosse", map: "Volcan", boss: "Golem de Magma", cls: "Tank" },
  { chapter: "L'Archimage", map: "Ruines", boss: "Archimage Flamboyant", cls: "Mage" },
  { chapter: "L'Ombre suprême", map: "Plateformes", boss: "Ombre Suprême", cls: "Ninja" }
];

window.GUIDES = [
  {
    id: "prise-en-main",
    title: "Prise en main : les contrôles",
    level: "Débutant",
    tags: ["bases", "contrôles"],
    summary: "Bouger, viser et tirer dès la première partie.",
    body: `
      <ul>
        <li><strong>Souris</strong> : viser et régler la puissance (plus le curseur est loin, plus le tir est fort).</li>
        <li><kbd>Espace</kbd> : tirer. <kbd>←</kbd> <kbd>→</kbd> : se déplacer. <kbd>W</kbd> : sauter.</li>
        <li><kbd>X</kbd> : super pouvoir (quand la jauge est pleine).</li>
        <li><strong>Clic droit</strong> : menu des armes, ou touches <kbd>1</kbd>–<kbd>9</kbd> et <kbd>0</kbd>.</li>
        <li><kbd>P</kbd> / <kbd>Échap</kbd> : pause.</li>
      </ul>
      <p>Le jeu tourne dans le navigateur (clavier + souris, pas de support mobile pour l'instant). Chaque tour dure <strong>30 secondes</strong>.</p>`
  },
  {
    id: "puissance-distance",
    title: "Régler sa puissance",
    level: "Débutant",
    tags: ["bases", "visée"],
    summary: "La distance du curseur décide de la force du tir, et au-delà de 100 %, tu gagnes de la portée mais perds des dégâts.",
    body: `
      <p>Pas de jauge à charger : éloigne le curseur pour tirer fort, rapproche-le pour tirer doucement.</p>
      <ul>
        <li><strong>Au-dessus de 100 % de puissance</strong> : plus de portée, mais moins de dégâts. À réserver aux cibles lointaines.</li>
        <li>Pour une cible proche, curseur près de toi, et attention à ton propre souffle.</li>
        <li>Le <strong>vent</strong> dévie certaines armes (comme le Bazooka) : regarde-le avant de tirer.</li>
      </ul>`
  },
  {
    id: "endurance",
    title: "L'endurance : bien gérer ton tour",
    level: "Débutant",
    tags: ["bases", "déplacement"],
    summary: "Marcher et sauter consomment de l'endurance, mais tu peux toujours viser et tirer.",
    body: `
      <ul>
        <li>Chaque tour donne <strong>100 d'endurance</strong>. Marcher et sauter en consomment (environ 450 pixels de marche).</li>
        <li>À zéro, tu ne peux plus bouger, mais tu peux encore <strong>viser et tirer</strong>.</li>
        <li>Ne la gaspille pas : garde-en pour te mettre à couvert après avoir tiré.</li>
        <li>Le <strong>Jetpack</strong> et le <strong>Grappin</strong> n'utilisent pas ton tour : ils se combinent avec un tir.</li>
      </ul>`
  },
  {
    id: "terrain-arme-bouclier",
    title: "Le terrain, ton arme et ton bouclier",
    level: "Intermédiaire",
    tags: ["stratégie", "terrain"],
    summary: "Creuse sous ton rival pour le faire tomber à l'eau, garde de la matière pour te protéger.",
    body: `
      <ul>
        <li><strong>Offensif</strong> : creuse sous les pieds de l'adversaire pour le faire chuter ou l'isoler.</li>
        <li><strong>Défensif</strong> : reste derrière un relief épais. Évite un bord que tu viens d'affaiblir.</li>
        <li>Pense à ce que ton tir détruit : un trou sous toi peut te coûter la partie.</li>
        <li>Le <strong>Napalm</strong> et la <strong>Foudre</strong> modifient le terrain : un trou de Foudre peut ouvrir un passage ou faire tomber quelqu'un.</li>
      </ul>`
  },
  {
    id: "boutique-pieces",
    title: "Pièces, boutique et premiers achats",
    level: "Débutant",
    tags: ["progression", "armes"],
    summary: "Le jeu est gratuit : tu gagnes des pièces et débloques armes et personnages. Voici par quoi commencer.",
    body: `
      <p>Pas de compte, pas d'achat en argent réel. Ta progression (pièces, déblocages) est sauvegardée <strong>dans ton navigateur</strong> : évite de vider les données du site.</p>
      <p>Armes de départ : Bazooka, Grenade, Pistolet, Dynamite. Pour ta première boutique, des choix polyvalents et abordables :</p>
      <ul>
        <li><strong>Soin</strong> (150) et <strong>Fusil à pompe</strong> (150) : pas chers et utiles tout de suite.</li>
        <li><strong>Mine</strong> (200) et <strong>Bombe Lune</strong> (180) : pour piéger ou surprendre.</li>
        <li><strong>Jetpack</strong> (300) ou <strong>Grappin</strong> (250) : pour ne plus être bloqué.</li>
      </ul>
      <p>Les armes spectaculaires (Trou noir 600, Bombe Soleil 500…) viendront ensuite. Il y a aussi des skins d'armes purement cosmétiques.</p>`
  },
  {
    id: "choisir-personnage",
    title: "Quel personnage choisir ?",
    level: "Intermédiaire",
    tags: ["personnages", "stratégie"],
    summary: "Chaque personnage a ses points forts et un super pouvoir. Quelques repères de style.",
    body: `
      <ul>
        <li><strong>Débuter</strong> : le <strong>Soldat</strong> est gratuit et équilibré.</li>
        <li><strong>Tenir</strong> : le <strong>Tank</strong> (130 PV), le <strong>Chevalier</strong> (120 PV, armure, Bouclier de départ), le <strong>Mage</strong> (20 % de dégâts en moins).</li>
        <li><strong>Mobilité</strong> : le <strong>Ninja</strong> et l'<strong>Alien</strong> sautent très haut. Le <strong>Robot</strong> ne prend pas de dégâts de chute.</li>
        <li><strong>Munitions bonus</strong> : l'<strong>Ingénieur</strong> et le <strong>Pirate</strong> démarrent avec plus d'armes.</li>
        <li><strong>Sustain</strong> : le <strong>Vampire</strong> draine 35 PV avec sa Morsure.</li>
      </ul>
      <p>La jauge de super pouvoir se remplit quand tu <strong>infliges et subis</strong> des dégâts : se faire toucher fait aussi avancer ta jauge.</p>
      <p>Retrouve tous les détails dans la page <a href="wiki.html#personnages">Personnages</a>.</p>`
  },
  {
    id: "mode-blitz",
    title: "Mode BLITZ : tout le monde joue en même temps",
    level: "Intermédiaire",
    tags: ["modes", "blitz"],
    summary: "Pas de tour : le rythme change complètement.",
    body: `
      <ul>
        <li>Ne reste jamais immobile : bouge entre deux tirs.</li>
        <li>Garde tes armes favorites sous la main avec <kbd>1</kbd>–<kbd>9</kbd> et <kbd>0</kbd>.</li>
        <li>Coupe les lignes de tir avec le terrain plutôt que de répondre coup pour coup.</li>
      </ul>`
  },
  {
    id: "variantes",
    title: "Les variantes de règles",
    level: "Intermédiaire",
    tags: ["modes"],
    summary: "Gravité zéro, lave, ouragan, fragile… chaque variante change ta façon de jouer.",
    body: `
      <ul>
        <li><strong>Lave</strong> : l'eau devient de la lave et monte. Ne reste pas au ras du sol trop longtemps.</li>
        <li><strong>Fragile</strong> (25 PV) : le premier à toucher gagne souvent. Privilégie le Laser ou le Sniper.</li>
        <li><strong>Ouragan</strong> : le vent est énorme, les armes affectées par le vent demandent de la correction.</li>
        <li><strong>Roi de la colline</strong> et <strong>Chasse aux caisses</strong> : objectifs à la place de l'élimination (5 points, ou 5 caisses).</li>
      </ul>
      <p>Liste complète dans <a href="wiki.html#modes">Modes</a>.</p>`
  },
  {
    id: "campagne",
    title: "Campagne : les 6 boss",
    level: "Avancé",
    tags: ["campagne", "stratégie"],
    summary: "Six chapitres, six cartes, six boss dont chacun joue un personnage que tu connais.",
    body: `
      <p>Chaque boss utilise un personnage jouable : tu peux donc anticiper son super pouvoir (par exemple, la Morsure du Comte Nocturne ou la Cannonade du Capitaine Barbe-Rouge).</p>
      <p>Détail des chapitres dans <a href="wiki.html#campagne">Campagne</a>.</p>`
  },
  {
    id: "editeur-cartes",
    title: "Créer sa propre arène",
    level: "Avancé",
    tags: ["éditeur", "communauté"],
    summary: "L'éditeur de cartes te laisse dessiner ton terrain. Partage-le avec la communauté !",
    body: `
      <p>Dessine ton arène, puis teste-la en duel. Un bon terrain a des hauteurs, des abris et des zones à creuser.</p>
      <p>Une carte dont tu es fier ? Poste une capture sur le Discord.</p>`
  }
];

// Captures (dossier ). Ajoute-en : { src: "xxx.png", alt: "description" }
window.SHOTS = [
  { src: "combat.png", alt: "Combat sur les Collines" },
  { src: "volcan.png", alt: "Carte Volcan" },
  { src: "galion.png", alt: "Carte Galion avec portails" },
  { src: "glace.png", alt: "Carte Glace, sol glissant" },
  { src: "station.png", alt: "Carte Station spatiale" },
  { src: "ruines.png", alt: "Carte Ruines sous la pluie" },
  { src: "desert.png", alt: "Carte Désert" },
  { src: "forteresse.png", alt: "Carte Forteresse, mode équipes" },
  { src: "collines.png", alt: "Carte Collines avec portail" }
];
// Images des cartes pour l'encyclopédie (nom exact de la carte)
window.MAP_IMG = {
  "Collines": "collines.png", "Volcan": "volcan.png", "Galion": "galion.png",
  "Glace": "glace.png", "Station spatiale": "station.png", "Ruines": "ruines.png",
  "Désert": "desert.png", "Forteresse": "forteresse.png"
};
