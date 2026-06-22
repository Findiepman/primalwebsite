function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

/* ICONS */
const Icon = {
  Discord: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.317 4.369A19.79 19.79 0 0 0 16.558 3a14.6 14.6 0 0 0-.74 1.515 18.27 18.27 0 0 0-5.487 0A14 14 0 0 0 9.59 3 19.74 19.74 0 0 0 5.83 4.372C2.51 9.29 1.6 14.094 2.05 18.834a19.93 19.93 0 0 0 6.06 3.06c.491-.67.927-1.383 1.302-2.131a12.97 12.97 0 0 1-2.05-.984c.171-.126.34-.257.503-.388 3.943 1.82 8.213 1.82 12.11 0 .165.131.334.262.504.388-.654.388-1.34.715-2.052.985.376.748.811 1.46 1.302 2.13a19.9 19.9 0 0 0 6.062-3.06c.527-5.49-.901-10.25-3.674-14.465ZM8.683 15.998c-1.184 0-2.157-1.085-2.157-2.418 0-1.334.952-2.42 2.157-2.42 1.206 0 2.178 1.086 2.157 2.42 0 1.333-.951 2.418-2.157 2.418Zm6.634 0c-1.184 0-2.156-1.085-2.156-2.418 0-1.334.952-2.42 2.156-2.42 1.206 0 2.178 1.086 2.157 2.42 0 1.333-.95 2.418-2.157 2.418Z"
  })),
  Store: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 3h18l-2 6H5L3 3zM5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M9 21V13h6v8"
  })),
  Book: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
  })),
  Copy: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  })),
  Check: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5 13l4 4L19 7"
  })),
  Pickaxe: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14 4 L20 10 M11 7 L17 13 M3 21 L13 11 M8 16 L12 12"
  })),
  Sparkle: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6 7.7 7.7M16.3 16.3 18.4 18.4M5.6 18.4 7.7 16.3M16.3 7.7 18.4 5.6"
  })),
  Trophy: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 9V4h12v5a6 6 0 1 1-12 0zM8 21h8M12 17v4M5 9H3v2a3 3 0 0 0 3 3M19 9h2v2a3 3 0 0 1-3 3"
  })),
  Cube: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 16-9 5-9-5V8l9-5 9 5v8zM3 8l9 5 9-5M12 13v8"
  })),
  Star: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
  })),
  Paw: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6.5",
    cy: "9.5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "9.5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 22c-3 0-5-2-5-4 0-2.5 2-3.5 3-5 .9-1.35 1.3-2 2-2s1.1.65 2 2c1 1.5 3 2.5 3 5 0 2-2 4-5 4z"
  })),
  Crown: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m3 7 4 4 5-6 5 6 4-4v11H3zM3 21h18"
  })),
  Map: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 20 3 17V4l6 3m0 13 6-3m-6 3V7m6 10 6 3V7l-6-3m0 13V4"
  })),
  Bolt: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m13 2-3 14h6l-3 6"
  })),
  Compass: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16 8-3 5-5 3 3-5z"
  })),
  Shield: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z"
  })),
  Gem: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 3h12l3 5-9 13L3 8zM3 8h18M8 3 5 8l7 13M16 3l3 5-7 13"
  })),
  Wand: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8 19 13M15.2 6.2 16 7M17.8 6.2 16 8M15.2 11.8 14 13M3 21l9-9"
  })),
  Menu: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  Close: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    d: "M6 6l12 12M18 6 6 18"
  })),
  Arrow: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5 12h14M13 5l7 7-7 7"
  })),
  Search: p => /*#__PURE__*/React.createElement("svg", _extends({}, p, {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    d: "m20 20-3.5-3.5"
  }))
};
const GUIDE_CATEGORIES = [{
  id: 'getting-started',
  name: 'Getting Started',
  icon: 'Compass'
}, {
  id: 'mining-fortune',
  name: 'Mining, Fortune and Compression',
  icon: 'Pickaxe'
}, {
  id: 'levels-xp',
  name: 'Levels and XP',
  icon: 'Bolt'
}, {
  id: 'skills',
  name: 'Skills',
  icon: 'Star'
}, {
  id: 'prestige',
  name: 'Prestige',
  icon: 'Crown'
}, {
  id: 'pets',
  name: 'Pets',
  icon: 'Paw'
}, {
  id: 'bosses',
  name: 'Slayer System',
  icon: 'Trophy'
}, {
  id: 'forge',
  name: 'The Forge',
  icon: 'Wand'
}, {
  id: 'quests',
  name: 'Quests',
  icon: 'Book'
}, {
  id: 'mining-events',
  name: 'Mining Events',
  icon: 'Sparkle'
}, {
  id: 'economy',
  name: 'Economy and Cash Notes',
  icon: 'Gem'
}, {
  id: 'keys-shop',
  name: 'Keys Shop',
  icon: 'Cube'
}, {
  id: 'crates',
  name: 'Crates',
  icon: 'Cube'
}, {
  id: 'shops',
  name: 'Shops and Trading',
  icon: 'Store'
}, {
  id: 'coinflip',
  name: 'Coinflip',
  icon: 'Sparkle'
}, {
  id: 'daily-rewards',
  name: 'Daily and Playtime Rewards',
  icon: 'Sparkle'
}, {
  id: 'stash',
  name: 'Storage and Stash',
  icon: 'Cube'
}, {
  id: 'leaderboards',
  name: 'Leaderboards',
  icon: 'Trophy'
}, {
  id: 'settings',
  name: 'Settings and PvP',
  icon: 'Shield'
}, {
  id: 'cosmetics',
  name: 'Tags and Prefix',
  icon: 'Wand'
}, {
  id: 'warps',
  name: 'Warps and Dimensions',
  icon: 'Map'
}, {
  id: 'ranks-free',
  name: 'Free Ranks',
  icon: 'Shield'
}, {
  id: 'ranks-paid',
  name: 'Paid Ranks',
  icon: 'Gem'
}, {
  id: 'enchants',
  name: 'Custom Enchants',
  icon: 'Wand'
}, {
  id: 'discord-link',
  name: 'Discord Link',
  icon: 'Discord'
}, {
  id: 'store-info',
  name: 'Store',
  icon: 'Store'
}, {
  id: 'commands',
  name: 'Commands Cheatsheet',
  icon: 'Cube'
}];
const PETS = [{
  name: "Zombie",
  rarity: "Common",
  ability: "No active ability, pure stat boost.",
  stats: ["+4 max health"]
}, {
  name: "Rat",
  rarity: "Common",
  ability: "Grants Speed II.",
  stats: []
}, {
  name: "Turtle",
  rarity: "Common",
  ability: "Grants Resistance VI. Drawback: Slowness IV.",
  stats: []
}, {
  name: "Lizard",
  rarity: "Common",
  ability: "Grants Night Vision II.",
  stats: []
}, {
  name: "Snail",
  rarity: "Common",
  ability: "No active ability, pure stat boost.",
  stats: ["+0.1 knockback resistance"]
}, {
  name: "Chicken",
  rarity: "Common",
  ability: "Grants Slow Falling II.",
  stats: []
}, {
  name: "Frog",
  rarity: "Common",
  ability: "Grants Jump Boost II.",
  stats: []
}, {
  name: "Bat",
  rarity: "Common",
  ability: "No active ability, pure stat boost.",
  stats: ["+0.2 attack speed"]
}, {
  name: "Bee",
  rarity: "Common",
  ability: "5% chance on hit to gain Regeneration.",
  stats: []
}, {
  name: "Pebble Golem",
  rarity: "Common",
  ability: "Gain Resistance while standing still.",
  stats: ["+2 armor"]
}, {
  name: "Moth",
  rarity: "Common",
  ability: "Outlines nearby entities through walls.",
  stats: []
}, {
  name: "Duckling",
  rarity: "Common",
  ability: "Grants Slow Falling II.",
  stats: []
}, {
  name: "Porcupine",
  rarity: "Common",
  ability: "30% chance to ignite attackers.",
  stats: ["+1 armor toughness"]
}, {
  name: "Caterpillar",
  rarity: "Common",
  ability: "15% chance on being hit to gain Saturation.",
  stats: []
}, {
  name: "Hermit Crab",
  rarity: "Common",
  ability: "Gain Resistance while standing still.",
  stats: ["+1 armor"]
}, {
  name: "Golem",
  rarity: "Uncommon",
  ability: "Grants Resistance III. Drawback: Slowness III.",
  stats: ["+20 max health"]
}, {
  name: "Mutt",
  rarity: "Uncommon",
  ability: "No active ability, pure stat boost.",
  stats: ["+1 attack damage"]
}, {
  name: "Hamster",
  rarity: "Uncommon",
  ability: "No active ability, pure stat boost.",
  stats: ["+5% movement speed"]
}, {
  name: "Strider",
  rarity: "Uncommon",
  ability: "Grants fire immunity and heals you near lava.",
  stats: []
}, {
  name: "Arctic Fox",
  rarity: "Uncommon",
  ability: "15% chance to deep-freeze and slow your target.",
  stats: ["+1 attack damage"]
}, {
  name: "Honey Pot",
  rarity: "Uncommon",
  ability: "10% chance on being hit to gain Saturation.",
  stats: []
}, {
  name: "Alert Dog",
  rarity: "Uncommon",
  ability: "Warns you when a player enters a 10-block radius while sneaking.",
  stats: []
}, {
  name: "Hedgehog",
  rarity: "Uncommon",
  ability: "Slows attackers when you are hit.",
  stats: ["+1 armor toughness"]
}, {
  name: "Baby Goat",
  rarity: "Uncommon",
  ability: "15% chance to knock enemies skyward.",
  stats: ["+1 attack damage"]
}, {
  name: "Ferret",
  rarity: "Uncommon",
  ability: "Grants bonus speed while sprinting.",
  stats: ["+3% movement speed"]
}, {
  name: "Flamingo",
  rarity: "Uncommon",
  ability: "Regenerates health while you stand in water.",
  stats: []
}, {
  name: "Meerkat",
  rarity: "Uncommon",
  ability: "Alerts you when hostile mobs come within 12 blocks.",
  stats: []
}, {
  name: "Mongoose",
  rarity: "Uncommon",
  ability: "Grants poison immunity.",
  stats: []
}, {
  name: "Lynx",
  rarity: "Uncommon",
  ability: "Grants bonus speed while sneaking.",
  stats: ["+2% movement speed"]
}, {
  name: "Axolotl",
  rarity: "Uncommon",
  ability: "Strongly regenerates health while submerged plus grants Water Breathing II.",
  stats: []
}, {
  name: "Platypus",
  rarity: "Uncommon",
  ability: "20% chance to poison the target on hit.",
  stats: []
}, {
  name: "Panda Cub",
  rarity: "Uncommon",
  ability: "Heals you while no one is attacking.",
  stats: ["+4 max health"]
}, {
  name: "Armadillo",
  rarity: "Uncommon",
  ability: "Curls up to block damage when hit.",
  stats: ["+2 armor"]
}, {
  name: "Skeleton",
  rarity: "Rare",
  ability: "25% chance to fire a second arrow.",
  stats: []
}, {
  name: "Tiger",
  rarity: "Rare",
  ability: "Grants Strength II and Speed II.",
  stats: ["+6 max health"]
}, {
  name: "The Third Eye",
  rarity: "Rare",
  ability: "Grants Night Vision II and outlines nearby souls through walls.",
  stats: []
}, {
  name: "Blaze",
  rarity: "Rare",
  ability: "20% chance to set the target on fire.",
  stats: ["+15% movement speed"]
}, {
  name: "Husk",
  rarity: "Rare",
  ability: "Prevents your foes from healing.",
  stats: ["+5 max health"]
}, {
  name: "Spring Coil",
  rarity: "Rare",
  ability: "Lets you stride over blocks without jumping.",
  stats: []
}, {
  name: "Thimble",
  rarity: "Rare",
  ability: "5% chance to reflect projectiles back at the shooter.",
  stats: ["+2 armor toughness"]
}, {
  name: "Tortoise",
  rarity: "Rare",
  ability: "Gain Resistance while standing still. Drawback: Slowness III.",
  stats: ["+6 armor", "+2 armor toughness"]
}, {
  name: "Boar",
  rarity: "Rare",
  ability: "Deals bonus damage when charging at full sprint.",
  stats: ["+4 max health", "+2 attack damage"]
}, {
  name: "Pangolin",
  rarity: "Rare",
  ability: "20% chance to deflect incoming arrows.",
  stats: ["+2 armor toughness"]
}, {
  name: "Hyena",
  rarity: "Rare",
  ability: "Deals bonus execution damage to weakened prey.",
  stats: ["+1.5 attack damage"]
}, {
  name: "Falcon",
  rarity: "Rare",
  ability: "Grants Strength II.",
  stats: ["+1 attack damage"]
}, {
  name: "Hornet",
  rarity: "Rare",
  ability: "30% chance to poison the target on hit.",
  stats: []
}, {
  name: "Komodo Dragon",
  rarity: "Rare",
  ability: "25% chance to poison the target on hit.",
  stats: ["+1.5 attack damage"]
}, {
  name: "Mantis",
  rarity: "Rare",
  ability: "No active ability, pure stat boost.",
  stats: ["+3 attack damage", "+0.2 attack speed"]
}, {
  name: "Quetzal",
  rarity: "Rare",
  ability: "Grants Slow Falling II and reduces fall damage.",
  stats: []
}, {
  name: "Rhino Beetle",
  rarity: "Rare",
  ability: "Gain Resistance while standing still.",
  stats: ["+4 armor", "+0.3 knockback resistance"]
}, {
  name: "Scorpion",
  rarity: "Rare",
  ability: "40% chance to poison enemies when fighting bare-handed.",
  stats: []
}, {
  name: "Silverfish",
  rarity: "Epic",
  ability: "Grants Haste III (stacks with your tool).",
  stats: ["+4 max health"]
}, {
  name: "The Shadow",
  rarity: "Epic",
  ability: "Grants Invisibility II and Speed II.",
  stats: []
}, {
  name: "Cactus",
  rarity: "Epic",
  ability: "Pricks nearby enemies who stand too close.",
  stats: ["+2 armor toughness"]
}, {
  name: "Relic",
  rarity: "Epic",
  ability: "50% chance to double or cancel your damage.",
  stats: []
}, {
  name: "Tectonic Shard",
  rarity: "Epic",
  ability: "Lets you walk over blocks like flat ground.",
  stats: []
}, {
  name: "Emergency Flare",
  rarity: "Epic",
  ability: "Blinds all nearby enemies when you drop near death.",
  stats: []
}, {
  name: "Tax Collector",
  rarity: "Epic",
  ability: "Passively earns 2% of nearby players' currency gains.",
  stats: []
}, {
  name: "Ember Wolf",
  rarity: "Epic",
  ability: "Grants fire immunity and 35% chance to ignite attackers.",
  stats: ["+6 max health", "+2 attack damage"]
}, {
  name: "Storm Hawk",
  rarity: "Epic",
  ability: "12% chance to call lightning on your enemies.",
  stats: ["+3 attack damage"]
}, {
  name: "Lava Salamander",
  rarity: "Epic",
  ability: "Grants fire immunity and heals you near lava.",
  stats: []
}, {
  name: "Blood Bat",
  rarity: "Epic",
  ability: "10% chance to heal for part of damage dealt.",
  stats: ["+0.3 attack speed"]
}, {
  name: "Mud Golem",
  rarity: "Epic",
  ability: "Gain Resistance while standing still. Drawback: Slowness III.",
  stats: ["+8 armor", "+3 armor toughness"]
}, {
  name: "Thunder Boar",
  rarity: "Epic",
  ability: "Deals bonus charge damage and has an 8% chance to call lightning.",
  stats: ["+3 attack damage", "+6 max health"]
}, {
  name: "Jungle Panther",
  rarity: "Epic",
  ability: "Deals bonus backstab damage to unaware targets.",
  stats: ["+2 attack damage", "+4% movement speed"]
}, {
  name: "Crystal Turtle",
  rarity: "Epic",
  ability: "Gain Resistance when low on health.",
  stats: ["+5 armor", "+8 max health"]
}, {
  name: "Plague Rat",
  rarity: "Epic",
  ability: "Spreads infection to nearby enemies.",
  stats: []
}, {
  name: "Shadow Crow",
  rarity: "Epic",
  ability: "Turns you invisible after a kill.",
  stats: ["+4% movement speed"]
}, {
  name: "Spore Mushroom",
  rarity: "Epic",
  ability: "Pricks nearby enemies and spreads infection around you.",
  stats: []
}, {
  name: "Razor Mantis",
  rarity: "Epic",
  ability: "Gains a speed boost after each kill.",
  stats: ["+3 attack damage", "+0.3 attack speed"]
}, {
  name: "Iron Colossus",
  rarity: "Epic",
  ability: "15% chance to reflect projectiles. Drawback: Slowness III.",
  stats: ["+10 armor", "+4 armor toughness"]
}, {
  name: "Piglin Brute",
  rarity: "Legendary",
  ability: "Grants Strength III (stacks with your tool).",
  stats: ["+10 max health", "+0.5 attack speed"]
}, {
  name: "Frost Spirit",
  rarity: "Legendary",
  ability: "Slows nearby enemies with a freezing aura.",
  stats: ["+4 armor toughness"]
}, {
  name: "Void Eye",
  rarity: "Legendary",
  ability: "Grants Night Vision II and teleports you to safety when low.",
  stats: []
}, {
  name: "The Echo",
  rarity: "Legendary",
  ability: "10% chance to deal double melee damage.",
  stats: []
}, {
  name: "Obsidian Golem",
  rarity: "Legendary",
  ability: "Grants fire immunity and 25% chance to ignite attackers.",
  stats: ["+10 armor"]
}, {
  name: "Vampire",
  rarity: "Legendary",
  ability: "5% chance to heal for part of damage dealt.",
  stats: ["+0.1 attack speed"]
}, {
  name: "King Midas",
  rarity: "Legendary",
  ability: "10% chance to double currency earned while mining.",
  stats: []
}, {
  name: "Deep Roots",
  rarity: "Legendary",
  ability: "Stand still to gain Resistance II and Regeneration I.",
  stats: []
}, {
  name: "Iron Titan",
  rarity: "Legendary",
  ability: "Gain Resistance while standing still. Drawback: Slowness IV.",
  stats: ["+12 armor", "+6 armor toughness", "+6 attack damage"]
}, {
  name: "Time Warden",
  rarity: "Legendary",
  ability: "Rewinds your health every 2 minutes to what it was 10 seconds ago.",
  stats: []
}, {
  name: "Void Leech",
  rarity: "Legendary",
  ability: "15% chance to heal for part of damage dealt and turns you invisible after a kill.",
  stats: ["+4 attack damage"]
}, {
  name: "Storm Drake",
  rarity: "Legendary",
  ability: "20% chance to call lightning and 15% chance to set the target on fire.",
  stats: ["+5 attack damage"]
}, {
  name: "Galactic Bear",
  rarity: "Legendary",
  ability: "Enters a berserk rage when below 50% health.",
  stats: ["+10 max health", "+4 attack damage"]
}, {
  name: "Titan Crab",
  rarity: "Legendary",
  ability: "Gain Resistance while standing still. Drawback: Slowness III.",
  stats: ["+10 armor", "+5 armor toughness", "+0.4 knockback resistance"]
}, {
  name: "Eclipse Dragon",
  rarity: "Legendary",
  ability: "Grants Night Vision II and turns you invisible after a kill.",
  stats: ["+4 attack damage"]
}, {
  name: "Frost Wyrm",
  rarity: "Legendary",
  ability: "30% chance to deep-freeze targets and slows nearby enemies with a freezing aura.",
  stats: ["+4 attack damage"]
}, {
  name: "Gravity Hound",
  rarity: "Legendary",
  ability: "No active ability, pure stat boost.",
  stats: ["+3 attack damage", "+5% movement speed"]
}, {
  name: "Ancient Tortoise",
  rarity: "Legendary",
  ability: "Gain Resistance while standing still. Drawback: Slowness IV.",
  stats: ["+14 armor", "+6 armor toughness", "+12 max health"]
}, {
  name: "Nether Hellhound",
  rarity: "Legendary",
  ability: "Grants fire immunity, 30% chance to set the target on fire and slows nearby enemies with a freezing aura.",
  stats: ["+8 max health", "+4 attack damage"]
}, {
  name: "Businessman",
  rarity: "Mythic",
  ability: "Doubles money earned.",
  stats: []
}, {
  name: "Anvil",
  rarity: "Mythic",
  ability: "No active ability, pure stat boost. Drawback: cannot jump.",
  stats: ["+10 attack damage"]
}, {
  name: "Chronos",
  rarity: "Mythic",
  ability: "Rewinds your health every 2 minutes to what it was 10 seconds ago.",
  stats: []
}, {
  name: "Heavyweight Champion",
  rarity: "Mythic",
  ability: "No active ability, pure stat boost. Drawback: cannot sprint.",
  stats: ["+20 max health", "+5 attack damage"]
}, {
  name: "Ghost",
  rarity: "Mythic",
  ability: "Sneak for 5 seconds to become invisible for 10 seconds.",
  stats: []
}, {
  name: "Void Serpent",
  rarity: "Mythic",
  ability: "25% chance to deal double melee damage and turns you invisible after a kill.",
  stats: ["+5 attack damage"]
}, {
  name: "Dread Reaper",
  rarity: "Mythic",
  ability: "Gains a stacking damage boost after each kill.",
  stats: ["+4 attack damage"]
}, {
  name: "Soul Harvester",
  rarity: "Mythic",
  ability: "12% chance to heal for part of damage dealt and turns you invisible after a kill.",
  stats: ["+4 attack damage"]
}, {
  name: "Chaos Imp",
  rarity: "Mythic",
  ability: "50% chance to double or cancel your damage and teleports you to safety when low.",
  stats: []
}, {
  name: "Dark Matter Cat",
  rarity: "Mythic",
  ability: "Phases out to invisibility on sneak and has a 20% chance to deal double melee damage.",
  stats: ["+8% movement speed"]
}, {
  name: "Arcane Hydra",
  rarity: "Mythic",
  ability: "40% chance to double or cancel your damage and 8% chance to heal for part of damage dealt.",
  stats: ["+8 max health", "+3 attack damage"]
}, {
  name: "Nightmare Stallion",
  rarity: "Mythic",
  ability: "Phases out to invisibility on sneak and grants strong speed while sprinting.",
  stats: ["+12% movement speed"]
}, {
  name: "Eldritch Horror",
  rarity: "Mythic",
  ability: "Prevents enemy healing and spreads infection to nearby enemies.",
  stats: ["+5 attack damage", "+6 max health"]
}, {
  name: "Abomination",
  rarity: "Mythic",
  ability: "Enters a powerful berserk rage when below 40% health.",
  stats: ["+12 max health", "+4 attack damage"]
}, {
  name: "Cosmic Dragon",
  rarity: "Mythic",
  ability: "20% chance to call lightning, 20% chance to set the target on fire and 8% chance to heal for part of damage dealt.",
  stats: ["+7 attack damage", "+10 max health"]
}, {
  name: "81hp_",
  rarity: "Special",
  ability: "Grants Regeneration III, plus chances to smite low-health players with lightning, gain a last-stand buff under 3 hearts and trigger a Fortune Fiesta for 2x mining drops, XP and money.",
  stats: ["+30 max health", "+20 attack damage", "+2 attack speed", "+30% movement speed"]
}, {
  name: "Shamil",
  rarity: "Special",
  ability: "Emits an ambient heart-and-note aura and lets you double-sneak to dash forward and stun nearby players.",
  stats: ["+40 max health", "+40% movement speed", "+12 attack damage", "+5 armor toughness", "+1 knockback resistance"]
}, {
  name: "MECHA-PET 9000",
  rarity: "Special",
  ability: "Grants Haste IV (stacks with your tool) and a rocket jump boost.",
  stats: ["+8 max health"]
}, {
  name: "Omega Slime",
  rarity: "Special",
  ability: "Gain Resistance while standing still.",
  stats: ["+8 armor", "+1 knockback resistance", "+10 max health"]
}, {
  name: "Glitch Fox",
  rarity: "Special",
  ability: "Teleports you to safety when low and phases out to invisibility on sneak.",
  stats: ["+6% movement speed"]
}, {
  name: "Neon Jellyfish",
  rarity: "Special",
  ability: "Outlines nearby entities through walls and slows nearby enemies with an aura.",
  stats: []
}, {
  name: "Cursed Doll",
  rarity: "Special",
  ability: "Slows attackers when you are hit and prevents enemy healing.",
  stats: []
}, {
  name: "Prism Cat",
  rarity: "Special",
  ability: "Grants Speed II and Luck II and outlines nearby souls through walls.",
  stats: ["+5% movement speed"]
}, {
  name: "Ancient Beetle",
  rarity: "Special",
  ability: "Gain Resistance while standing still and 25% chance to reflect projectiles.",
  stats: ["+10 armor", "+0.5 knockback resistance"]
}, {
  name: "Pixel Dragon",
  rarity: "Special",
  ability: "30% chance to deal double melee damage and phases out to invisibility on sneak.",
  stats: ["+5 attack damage"]
}, {
  name: "Warp Bunny",
  rarity: "Special",
  ability: "20% chance to swap places with your attacker.",
  stats: ["+8% movement speed"]
}, {
  name: "Pollum",
  rarity: "Special",
  ability: "30% chance to poison the target on hit, spreads infection to nearby enemies and prevents enemy healing.",
  stats: ["+6 max health"]
}, {
  name: "Viper",
  rarity: "Special",
  ability: "35% chance to poison the target on hit, slows nearby enemies with an aura and slows attackers when you are hit.",
  stats: ["+8 max health", "+3 attack damage", "+0.2 attack speed"]
}, {
  name: "Tinc",
  rarity: "Special",
  ability: "Grants fire immunity, 30% chance to set the target on fire and 30% chance to ignite attackers.",
  stats: ["+8 max health", "+3 attack damage"]
}, {
  name: "Xenon",
  rarity: "Special",
  ability: "15% chance to call lightning, gains a damage boost after each kill and outlines nearby souls through walls.",
  stats: ["+8 max health", "+5 attack damage"]
}, {
  name: "Adam",
  rarity: "Special",
  ability: "Grants slow falling, 20% chance to call lightning and gain Resistance when low on health.",
  stats: ["+10 max health", "+5 attack damage", "+10% movement speed", "+3 armor toughness"]
}, {
  name: "Malacher",
  rarity: "Special",
  ability: "15% chance to heal for part of damage dealt, 40% chance to enter a berserk rage and turns you invisible after a kill.",
  stats: ["+8 max health", "+6 attack damage"]
}, {
  name: "Dredge",
  rarity: "Special",
  ability: "Grants Night Vision II and Haste III (stacks with your tool).",
  stats: ["+10 max health", "+5 attack damage", "+0.3 knockback resistance"]
}, {
  name: "Vexor",
  rarity: "Special",
  ability: "Prevents enemy healing, 20% chance to deal double melee damage, gains a stacking damage boost after each kill and spreads infection to nearby enemies.",
  stats: ["+12 max health", "+7 attack damage", "+3 armor toughness"]
}];
const RARITY_ORDER = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic', 'Special'];
function PetRoster() {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('All');
  const grouped = useMemo(() => {
    const filtered = PETS.filter(p => (filter === 'All' || p.rarity === filter) && (q.trim() === '' || p.name.toLowerCase().includes(q.toLowerCase())));
    const g = {};
    RARITY_ORDER.forEach(r => g[r] = []);
    filtered.forEach(p => g[p.rarity].push(p));
    return g;
  }, [q, filter]);
  const total = Object.values(grouped).reduce((a, b) => a + b.length, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("input", {
    className: "pet-search",
    placeholder: "Search by name...",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono-label flex items-center",
    style: {
      whiteSpace: 'nowrap'
    }
  }, total, " showing")), /*#__PURE__*/React.createElement("div", {
    className: "filter-row"
  }, ['All', ...RARITY_ORDER].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    className: `chip ${filter === r ? 'active' : ''}`,
    onClick: () => setFilter(r)
  }, r))), RARITY_ORDER.map(r => grouped[r] && grouped[r].length > 0 && /*#__PURE__*/React.createElement("div", {
    key: r
  }, /*#__PURE__*/React.createElement("div", {
    className: "rarity-band"
  }, /*#__PURE__*/React.createElement("span", {
    className: `rb rb-${r}`
  }, r), /*#__PURE__*/React.createElement("span", {
    className: "mono-label",
    style: {
      color: '#a5b6a8'
    }
  }, grouped[r].length, " pets"), /*#__PURE__*/React.createElement("div", {
    className: "rarity-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pet-stack"
  }, grouped[r].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "pet-tile"
  }, /*#__PURE__*/React.createElement("span", {
    className: `rb rb-${r}`
  }, r), /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "ab"
  }, p.ability), p.stats.length > 0 && /*#__PURE__*/React.createElement("div", null, p.stats.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "st"
  }, s)))))))), total === 0 && /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12 mono-label",
    style: {
      color: '#a5b6a8'
    }
  }, "No pets match your filter."));
}
const _e = React.createElement, _F = React.Fragment;
const GUIDES = {
  'getting-started': {
    title: 'Getting Started',
    intro: 'Everything you need to log in and start mining.',
    sections: [{
      h: 'How to Join',
      body: _e(_F, null, _e("p", null, "PrimalMines runs on Paper for Minecraft Java Edition. Connect from any recent Java version the server supports (ViaVersion keeps newer clients working)."), _e("p", null, "Open Minecraft, click Multiplayer, Add Server, paste the IP and join."), _e("p", null, _e("code", null, "play.primalmines.net")), _e("p", null, "Keep Inventory is on, so you never lose your loot when you die."))
    }, {
      h: 'Your First Hour',
      body: _e(_F, null, _e("p", null, "Start in the Overworld mine. Every block you break pays out at once: server money, PrimalMines level XP, skill XP and XP for your active pet. Spend the money on better pickaxes and gear from the mine shop."), _e("p", null, "Open your inventory and look at the bottom bar. Your XP bar is repurposed to show your PrimalMines level. The longer you mine the faster you climb, because boosters, rank perks, prestige multipliers and pet buffs all stack on top of your base earnings."), _e("p", null, "Type ", _e("code", null, "/menu"), " for the hub menu and ", _e("code", null, "/help"), " any time you need a refresher."))
    }, {
      h: 'Hub and Spawn',
      body: _e(_F, null, _e("p", null, "Spawn is the hub. From there you reach the mines, shops, crates, the leaderboards and the NPCs that hand out quests. The first NPC to talk to is the tutorial NPC, who walks you through every system on the server."), _e("p", null, "If you ever get lost type ", _e("code", null, "/spawn"), "."))
    }, {
      h: 'The Main Menu',
      body: _e(_F, null, _e("p", null, "Type ", _e("code", null, "/menu"), " or ", _e("code", null, "/m"), " to open the Global Menu. It is the fastest way to reach every system without remembering individual commands. From the menu you can open:"), _e("ul", null, _e("li", null, "Server Info, Discord and Rules"), _e("li", null, "Your Stats, Balance / Convert and Ranks"), _e("li", null, "Prestige, Skills and the Store"), _e("li", null, "Warps, Daily Reward and Help"), _e("li", null, "Compressors, Boosters and the Mine Shop"), _e("li", null, "the Pet Shop, the Keys Shop, Chat Colors and Options")), _e("p", null, "When in doubt, type ", _e("code", null, "/menu"), "."))
    }]
  },
  'mining-fortune': {
    title: 'Mining, Fortune and Compression',
    intro: 'Mining is the heart of progression. Here is how every block pays you.',
    sections: [{
      h: 'How Mining Pays',
      body: _e(_F, null, _e("p", null, "Every mineable block you break in a mine rewards you several ways at once: money (boosted by the Monopoly enchant), PrimalMines level XP, Mining skill XP and XP for your active pet."), _e("p", null, "There is a safety cap of 100,000 items from any single block break so extreme Fortune never lags the server."))
    }, {
      h: 'How Fortune Works',
      body: _e(_F, null, _e("p", null, "Drop count is your Fortune level plus one, multiplied by your prestige multiplier, any active resource booster, the block's own multiplier and your pet and talisman bonuses. The custom mining engine handles enormous Fortune values, so the late game keeps scaling."), _e("p", null, "Fortune is the enchant on your held pickaxe. There is no hard Fortune cap built into the mining engine, so higher tier pickaxes simply carry higher Fortune. Check your pickaxe lore to see its current enchants."))
    }, {
      h: 'Compression',
      body: _e(_F, null, _e("p", null, "Your inventory would fill instantly without compression. Mined blocks stack up through four tiers, automatically once you own the compressor for that tier."), _e("table", null, _e("thead", null, _e("tr", null, _e("th", null, "From"), _e("th", null, "To"), _e("th", null, "Ratio"))), _e("tbody", null, _e("tr", null, _e("td", null, "Normal"), _e("td", null, "Enchanted"), _e("td", null, "64 to 1")), _e("tr", null, _e("td", null, "Enchanted"), _e("td", null, "Super Enchanted"), _e("td", null, "64 to 1")), _e("tr", null, _e("td", null, "Super Enchanted"), _e("td", null, "Ultra Enchanted"), _e("td", null, "32 to 1")))), _e("p", null, "Not every block has a Super or Ultra tier. Ultra exists for the deeper dimension blocks and ores."))
    }, {
      h: 'Compressors GUI',
      body: _e(_F, null, _e("p", null, "Open ", _e("code", null, "/compressors"), " for the compressor menu. It has Auto, Super and Ultra tabs, with a toggle for each mine region so you control exactly what compresses. The commands below flip compression on or off:"), _e("ul", null, _e("li", null, _e("code", null, "/autocompress"), " normal into enchanted"), _e("li", null, _e("code", null, "/supercompress"), " enchanted into super enchanted"), _e("li", null, _e("code", null, "/ultracompress"), " super into ultra enchanted")), _e("p", null, "Compressor access is unlocked through ranks, the in game Compressor Voucher key or the store. You can also slot a Heart of the Sea compressor item in your off hand to auto compress its matching region."))
    }, {
      h: 'Boosters',
      body: _e(_F, null, _e("p", null, "Boosters multiply earnings or XP for everyone on the server for a limited time. Open the menu with ", _e("code", null, "/boost"), "."), _e("ul", null, _e("li", null, _e("strong", null, "Resource boosters"), " multiply how many blocks you collect: 2x lasts 40 minutes, 3x lasts 30 minutes."), _e("li", null, _e("strong", null, "XP boosters"), " do the same for level XP: 2x for 40 minutes, 3x for 30 minutes.")), _e("p", null, "Only one resource and one XP booster run at a time. Activating the same tier again adds its time to the timer. Find boosters in crates, the daily menu and the store. Primal rank can fire free boosters with ", _e("code", null, "/claimboost"), " every 5 days."))
    }, {
      h: 'The Trench Enchant',
      body: _e("p", null, "Trench is a mining enchant that breaks a connected vein of extra blocks around the one you hit, each routed through your full Fortune and compression. The vein grows with the enchant level. It is a special enchant, not part of the standard shop rotation.")
    }]
  },
  'levels-xp': {
    title: 'Levels and XP',
    intro: 'Your level decides when you can prestige and drives long term goals.',
    sections: [{
      h: 'How XP is Earned',
      body: _e(_F, null, _e("p", null, "Every mined block grants level XP based on the block. Plain stone and netherrack give 1, ores give more (iron 4 to 5, gold 6 to 7, diamond 12 to 15, emerald 15 to 18) and the rarest blocks give a lot, Ancient Debris alone is 50 XP."), _e("p", null, "That base XP is then multiplied by your XP multiplier and any active XP booster."))
    }, {
      h: 'Multipliers',
      body: _e("ul", null, _e("li", null, _e("strong", null, "Prestige"), " grants a permanent XP multiplier every time you rebirth."), _e("li", null, _e("strong", null, "XP boosters"), " stack 2x or 3x on top, server wide."), _e("li", null, _e("strong", null, "The Lapis region"), " gives 3x XP while you mine inside it."), _e("li", null, _e("strong", null, "The XP Talisman"), " (light blue dye in your off hand) gives 3x XP."))
    }, {
      h: 'The XP Curve',
      body: _e("p", null, "XP needed per level follows an exponential curve starting at 100 and growing about 10% each level. There is no maximum level, so the climb never ends.")
    }, {
      h: 'Where it Shows',
      body: _e("p", null, "Your Minecraft XP bar is repurposed to show your PrimalMines level. The number is your level and the bar fills toward the next one.")
    }, {
      h: 'Prestige Threshold',
      body: _e("p", null, "Your first prestige needs level 100. After that the requirement climbs by 100 every prestige, so prestige two needs level 200, prestige three needs 300 and so on.")
    }]
  },
  'skills': {
    title: 'Skills',
    intro: 'Five skills track how you play and pay you for leveling each one.',
    sections: [{
      h: 'The Five Skills',
      body: _e("ul", null, _e("li", null, _e("strong", null, "Mining"), " levels as you break blocks."), _e("li", null, _e("strong", null, "Combat"), " levels from PvP, killing other players."), _e("li", null, _e("strong", null, "Bosses"), " levels as you defeat server bosses."), _e("li", null, _e("strong", null, "Taming"), " levels when you level up your pets. Higher rarity pets and higher pet levels give far more Taming XP."), _e("li", null, _e("strong", null, "Experience"), " is fed automatically, every time you earn XP in another skill, 10% of it flows into Experience. Each Experience level then adds a small global bonus to all your other skill XP."))
    }, {
      h: 'XP Curves',
      body: _e(_F, null, _e("p", null, "Each skill caps at level 100 and uses its own curve."), _e("table", null, _e("thead", null, _e("tr", null, _e("th", null, "Skill"), _e("th", null, "Base XP"), _e("th", null, "Growth"))), _e("tbody", null, _e("tr", null, _e("td", null, "Mining"), _e("td", null, "400"), _e("td", null, "1.14")), _e("tr", null, _e("td", null, "Combat"), _e("td", null, "500"), _e("td", null, "1.15")), _e("tr", null, _e("td", null, "Taming"), _e("td", null, "600"), _e("td", null, "1.16")), _e("tr", null, _e("td", null, "Bosses"), _e("td", null, "800"), _e("td", null, "1.18")), _e("tr", null, _e("td", null, "Experience"), _e("td", null, "1000"), _e("td", null, "1.15")))))
    }, {
      h: 'Rewards',
      body: _e(_F, null, _e("p", null, "Every skill level pays out money plus PrimalMines level XP, both scaling with the level you reach. Money per level runs from $500 (Experience) up to $1,000 (Bosses)."), _e("p", null, "On top of that, each skill level up also grants 100 PrimalMines level XP and 50 pet XP to your active pet. Leveling skills feeds your prestige threshold, your wallet and your pet at once."))
    }, {
      h: 'Opening Skills',
      body: _e("p", null, "Type ", _e("code", null, "/skills"), " for the skills menu or ", _e("code", null, "/skills <name>"), " to jump straight to one skill's tree. The trees are a visual progress display showing each level's rewards.")
    }]
  },
  'prestige': {
    title: 'Prestige',
    intro: 'Prestige is how you reset to push further.',
    sections: [{
      h: 'How to Prestige',
      body: _e(_F, null, _e("p", null, "Open the menu with ", _e("code", null, "/prestige"), " or ", _e("code", null, "/rebirth"), ". The GUI lists your requirements with a checkmark next to anything you already have."), _e("p", null, "You need the maxed gear set of your current prestige dimension plus the level threshold. That threshold starts at 100 and grows by 100 every prestige."))
    }, {
      h: 'What You Lose',
      body: _e("p", null, "The required gear set, armor, sword and pickaxe, is consumed when you prestige. You earn it back fast thanks to the permanent multiplier boost, so every climb is quicker than the last.")
    }, {
      h: 'What You Gain',
      body: _e("ul", null, _e("li", null, "+1 block multiplier, permanently"), _e("li", null, "+1 XP multiplier, permanently"), _e("li", null, "1 Prestige Coin"), _e("li", null, "Access to the next prestige dimension"), _e("li", null, "A server wide broadcast that other players see if they have broadcasts turned on"))
    }, {
      h: 'Prestige Dimensions',
      body: _e("p", null, "Prestige runs through three gear tiers in order: the Abyss set unlocks The Depths and the Depths set unlocks The Deep Dark. Spend your Prestige Coins in the prestige shop with ", _e("code", null, "/prestigeshop"), " for lasting upgrades.")
    }]
  },
  'pets': {
    title: 'Pets',
    intro: '124 collectible pets that follow you and boost your stats.',
    sections: [{
      h: 'How Pets Work',
      body: _e(_F, null, _e("p", null, "You equip one pet at a time from your Pet Menu (", _e("code", null, "/pets"), "). The pet floats beside you with its level shown on its name tag. While equipped, its ability and its passive stats are active."), _e("p", null, "Abilities trigger in different ways depending on the pet: some fire when you hit something, some when you take damage, some run as a constant aura, some after a kill, some while you mine and a few only when you sneak or stand still."))
    }, {
      h: 'Leveling Pets',
      body: _e("p", null, "Only your active pet gains XP and it gains it from mining, one XP per block, multiplied by your pickaxe's Fortune. Pets cap at level 100. Leveling scales the pet's stat bonuses and the strength or chance of its ability and shrinks any drawback.")
    }, {
      h: 'Rarities',
      body: _e("ul", null, _e("li", null, "Common"), _e("li", null, "Uncommon"), _e("li", null, "Rare"), _e("li", null, "Epic"), _e("li", null, "Legendary"), _e("li", null, "Mythic"), _e("li", null, "Special"))
    }, {
      h: 'How to Get Pets',
      body: _e(_F, null, _e("p", null, "There are several routes:"), _e("ul", null, _e("li", null, _e("strong", null, "Pet Shop"), " (", _e("code", null, "/petshop"), ") sells Common through Legendary pets: Common $1,000, Uncommon $6,000, Rare $25,000, Epic $75,000, Legendary $500,000."), _e("li", null, _e("strong", null, "Pet crates and keys"), " from the Keys Shop and daily rewards, one per rarity. Mythic and Special pets come from these crates and from bosses."), _e("li", null, _e("strong", null, "Boss drops"), ", each of the eight Slayer bosses drops its matching pet at a 1% chance.")))
    }, {
      h: 'Every Pet',
      body: _e(PetRoster, null)
    }]
  },
  'bosses': {
    title: 'Slayer System',
    intro: 'Eight bosses. Five levels each. SkyBlock style boss progression.',
    sections: [{
      h: 'Opening Slayer',
      body: _e(_F, null, _e("p", null, "Type ", _e("code", null, "/slayer"), " or ", _e("code", null, "/bosses"), " to open the menu, a 6 row chest titled Slayer Menu. A nether star at the top shows your Combined Slayer Level out of 40 (8 bosses x 5 levels of mastery)."), _e("p", null, "Bosses sit in progression order across two rows: Pollum, Viper, Tinc and Xenon on top, then Adam, Malacher, Dredge and Vexor. Each icon shows your Slayer Level in Roman numerals, your lifetime kills and your XP bar. Locked bosses tell you what you need."))
    }, {
      h: 'Unlocking Bosses',
      body: _e("p", null, "Pollum is always open. Every other boss unlocks when you reach Slayer Level II on the one before it. The chain follows the dimensions: Pollum (Overworld), Viper (Cave), Tinc (Nether), Xenon (End), Adam (Aether), Malacher (Abyss), Dredge (Depths), Vexor (Deep Dark). You must stand in a Boss Area to summon.")
    }, {
      h: 'Summoning',
      body: _e(_F, null, _e("p", null, "Open a boss and press Summon and it spawns on top of you. Each summon costs money, taken from your balance the moment the boss appears. You can only have one of each boss out at a time; the lock clears after 10 minutes so a despawn or stolen kill never traps you."), _e("table", null, _e("thead", null, _e("tr", null, _e("th", null, "Boss"), _e("th", null, "Summon Cost"))), _e("tbody", null, _e("tr", null, _e("td", null, "Pollum"), _e("td", null, "$2,500")), _e("tr", null, _e("td", null, "Viper"), _e("td", null, "$5,000")), _e("tr", null, _e("td", null, "Tinc"), _e("td", null, "$7,500")), _e("tr", null, _e("td", null, "Xenon"), _e("td", null, "$10,000")), _e("tr", null, _e("td", null, "Adam"), _e("td", null, "$15,000")), _e("tr", null, _e("td", null, "Malacher"), _e("td", null, "$20,000")), _e("tr", null, _e("td", null, "Dredge"), _e("td", null, "$30,000")), _e("tr", null, _e("td", null, "Vexor"), _e("td", null, "$50,000")))), _e("p", null, "Auto Slayer (bottom of the menu) re-summons the same boss 3 seconds after a kill, as long as you stay within 40 blocks. The summon cost still applies each time. It unlocks once you reach Slayer Level III on Pollum, Viper, Tinc and Xenon."))
    }, {
      h: 'Public vs Private',
      body: _e(_F, null, _e("p", null, _e("strong", null, "Public"), " is the default. Anyone can hit your boss and players within 30 blocks of the kill share half the per kill XP. You still get the full reward and drops."), _e("p", null, _e("strong", null, "Private"), " blocks all damage from other players, no stolen kills, no shared XP. The toggle applies to every boss at once."))
    }, {
      h: 'XP and Leveling',
      body: _e(_F, null, _e("p", null, "Each boss has its own XP pool. XP per kill scales from 25 on Pollum up to 95 on Vexor. The pool you need per level is 100, then 225, 510, 1,150 and 2,600, about 4,585 XP to fully master a single boss."), _e("p", null, "When you cross a threshold the requirement is subtracted and your level ticks up, so a kill with leftover XP can chain multiple level ups."))
    }, {
      h: 'Drops Per Kill',
      body: _e(_F, null, _e("p", null, "Each kill rolls the boss loot table from rarest to most common and the first roll that lands is your one drop for that kill."), _e("p", null, "The ", _e("strong", null, "Plunder"), " custom enchant on your weapon adds a flat 1% per level to each roll (capped at Plunder 10 and no roll can exceed 75%). Higher Plunder pushes you toward the better drops."))
    }]
  },
  'forge': {
    title: 'The Forge',
    intro: 'Spend boss Shards to forge powerful gear.',
    sections: [{
      h: 'Opening the Forge',
      body: _e(_F, null, _e("p", null, "Talk to the Forge NPC at the boss area portal to open The Forge. It has one slot per boss, in the same order as the Slayer menu. Click a boss to open its forge, then choose Armor or Miscellaneous."), _e("p", null, "Everything you forge is paid for with that boss's Shards, which drop when you slay it. The more you hunt a boss, the more you can forge."))
    }, {
      h: 'Armor Sets',
      body: _e("p", null, "Each boss has its own armor set with three tiers of every piece: helmet, chestplate, leggings and boots. Spend Shards to forge each tier and build out the full set for that dimension's boss.")
    }, {
      h: 'Miscellaneous',
      body: _e("p", null, "The Miscellaneous section holds everything else a boss can forge, such as crate keys and pet shards. It is paginated and new recipes are added over time.")
    }, {
      h: 'Costs',
      body: _e("p", null, "Every recipe card lists its requirements with a green tick or a red cross. Most cost Shards and some also ask for extra items or a little money. When you can afford it, click to forge and watch the anvil do its work.")
    }]
  },
  'quests': {
    title: 'Quests',
    intro: 'Rotating weekly challenges plus story driven NPC quests.',
    sections: [{
      h: 'Two Quest Systems',
      body: _e(_F, null, _e("p", null, "PrimalMines has two separate quest systems: the weekly challenge board you open with ", _e("code", null, "/quests"), " and the story quests handed out by NPCs around the map."), _e("p", null, "Story dialogue runs in your actionbar with a soft bell on each line, so chat never floods. Choice menus open as small chest GUIs and NPCs appear or hide based on your current stage so you always see the one that matters."))
    }, {
      h: 'Weekly Quests',
      body: _e("p", null, "Open ", _e("code", null, "/quests"), " for three rotating challenges that reset every week. Each one tracks a goal like mining a block, winning fights or defeating bosses and pays out XP and cash. Hit the goal, then click to claim.")
    }, {
      h: 'The Dragon Quest',
      body: _e(_F, null, _e("p", null, "The Dragon Quest is the free rank unlock chain, run entirely by Dragon13215, a terse wandering NPC who makes the rank vouchers himself. Each stage asks for a shopping list of materials and completing it unlocks that rank's voucher in his shop. The voucher still costs server money to buy."), _e("p", null, _e("strong", null, "Endstone intro"), ". Bring 5 Super Enchanted Endstone. He then reveals what he does and hands you the first list."), _e("blockquote", null, "Don't ask questions. I'll explain when you're back."), _e("p", null, _e("strong", null, "Catastro List"), ". 32 Super Enchanted Purpur, voucher paper, a rank pen and $35,000. Reward: the Dragon Sword and the ", _e("strong", null, "Catastro"), " voucher unlocked for $750,000."), _e("p", null, _e("strong", null, "Gladiator List"), " (level 50+). 32 Super Enchanted Glowstone, a rank pen, voucher paper and Gladiator dye. Unlocks the ", _e("strong", null, "Gladiator"), " voucher for $2,500,000."), _e("p", null, _e("strong", null, "Sentinel List"), " (level 100+). 3 Deep Dark Eggs, Sentinel dye, a rank pen and voucher paper. Unlocks the ", _e("strong", null, "Sentinel"), " voucher for $7,500,000."), _e("p", null, _e("strong", null, "Paragon List"), " (level 200+). An Omega Pickaxe, 2 voucher paper, 2 rank pens, Paragon dye, 32 Ultra Enchanted Primal Ore and $500,000. Unlocks the ", _e("strong", null, "Paragon"), " voucher for $20,000,000."), _e("p", null, "After the last list his shop stays open for life so you can revisit anything you missed."))
    }, {
      h: 'Story Quests',
      body: _e(_F, null, _e("p", null, "Side quests with full dialogue and named rewards:"), _e("ul", null, _e("li", null, _e("strong", null, "A Rocky Relationship"), " (Cave). Reunite Cat and her husband Tim. A shady merchant demands $50,000 for the stolen gemstones, pay up or fight him. Rewards Tim's custom pickaxe and $10,000."), _e("li", null, _e("strong", null, "Inferno's Debt"), " (Nether). Serve the demon Inferno, duel Hades or betray your way to power. Branching paths pay out big money, a boss pet and a legendary relic."), _e("li", null, _e("strong", null, "Lumberjack"), ". Bring enchanted oak and birch for the LumberJack's Axe (Efficiency 15, Fortune 5, unbreakable)."), _e("li", null, _e("strong", null, "Blacksmith"), ". Bring enchanted diamonds, gold and emeralds for the Forgeborn Blade (Sharpness 12, grants Speed on hit)."), _e("li", null, _e("strong", null, "Lost Kitty"), ". Help an old lady find her cat Mochi for $5,000.")))
    }]
  },
  'mining-events': {
    title: 'Mining Events',
    intro: 'Server wide events that drop in every hour.',
    sections: [{
      h: 'How it Works',
      body: _e(_F, null, _e("p", null, "Every hour on the hour a Mining Event begins and runs for 15 minutes. A random block type is chosen and a boss bar shows you the target block, the time left and your personal count."), _e("p", null, "It is not a race to a fixed number, whoever mines the MOST of that block before time runs out wins. The top three miners take the prizes."))
    }]
  },
  'economy': {
    title: 'Economy and Cash Notes',
    intro: 'Cash lives in your balance. Notes let you carry it.',
    sections: [{
      h: 'Your Balance',
      body: _e("p", null, "Your money sits in your server balance. Spend it through shop GUIs, the Keys Shop, voucher purchases and more. Check it with ", _e("code", null, "/balance"), " (or ", _e("code", null, "/bal"), ") and send money to other players with ", _e("code", null, "/pay"), ".")
    }, {
      h: 'Cash Notes',
      body: _e(_F, null, _e("p", null, "Open ", _e("code", null, "/convert"), " to turn balance into physical paper notes you can carry, drop or trade. Preset denominations run $1,000, $10,000, $100,000, $1,000,000, $10,000,000 and $100,000,000 and a custom amount button lets you pick any value."), _e("p", null, "The amount comes off your balance and the note drops into your inventory. To cash one back in, hold the note and right click, it vanishes and the money returns instantly."))
    }, {
      h: 'Why You Care',
      body: _e("p", null, "Cash notes are how players trade money by hand without ", _e("code", null, "/pay"), ". They are also perfect for secret off the books trades. Drop them in trade chests, hand them across the table or leave them as gifts. The note is the receipt.")
    }]
  },
  'keys-shop': {
    title: 'Keys Shop',
    intro: 'Spend in game cash on crate keys. Open with /keys.',
    sections: [{
      h: 'How it Works',
      body: _e(_F, null, _e("p", null, "Type ", _e("code", null, "/keys"), " to open the cash for keys exchange. Left click an item to buy one; right click for a bulk menu (2, 4, 16, 32 or 64 at a time). Keys are delivered straight to your crates."), _e("p", null, "Prices are listed on each item. They are intentionally steep, keys are a money sink for the late game."))
    }, {
      h: 'Dimension and Rank Keys',
      body: _e(_F, null, _e("p", null, _e("strong", null, "Dimension keys")), _e("ul", null, _e("li", null, "Overworld $7,500"), _e("li", null, "Cave $12,500"), _e("li", null, "Nether $20,000"), _e("li", null, "End $45,000"), _e("li", null, "Aether $100,000"), _e("li", null, "Abyss $500,000")), _e("p", null, _e("strong", null, "Free rank keys")), _e("ul", null, _e("li", null, "Catastro $200,000"), _e("li", null, "Gladiator $500,000"), _e("li", null, "Sentinel $1,000,000"), _e("li", null, "Paragon $2,000,000")), _e("p", null, _e("strong", null, "Paid rank keys")), _e("ul", null, _e("li", null, "VIP $100,000"), _e("li", null, "MVP $250,000"), _e("li", null, "Celestial $500,000"), _e("li", null, "Aethereal $750,000"), _e("li", null, "Immortal $1,000,000"), _e("li", null, "Primal $2,500,000")))
    }, {
      h: 'Pet and Themed Keys',
      body: _e(_F, null, _e("p", null, _e("strong", null, "Pet rarity keys")), _e("ul", null, _e("li", null, "Common Pet $25,000"), _e("li", null, "Uncommon Pet $50,000"), _e("li", null, "Rare Pet $250,000"), _e("li", null, "Epic Pet $750,000"), _e("li", null, "Legendary Pet $1,500,000"), _e("li", null, "Mythic Pet $5,000,000")), _e("p", null, _e("strong", null, "Themed keys")), _e("ul", null, _e("li", null, "Party $2,500"), _e("li", null, "Compressor Voucher $1,500,000"), _e("li", null, "Chatcolor $2,500,000")))
    }]
  },
  'crates': {
    title: 'Crates',
    intro: 'Open keys for randomized rewards.',
    sections: [{
      h: 'Opening Crates',
      body: _e(_F, null, _e("p", null, "Crate blocks stand around spawn, each with a floating hologram. Right click a crate while holding its matching key to open it and play the reveal animation. Left click to preview every possible reward and its odds first."), _e("p", null, "If a key does not fit in your inventory, grab it later with ", _e("code", null, "/claimkeys"), "."))
    }, {
      h: 'Crate Types',
      body: _e(_F, null, _e("p", null, "There are over 30 crates, grouped by theme:"), _e("ul", null, _e("li", null, _e("strong", null, "Dimension"), ", Overworld through Abyss, full of that dimension's blocks and consumables"), _e("li", null, _e("strong", null, "Rank"), ", Catastro to Paragon and VIP to Primal"), _e("li", null, _e("strong", null, "Pet rarity"), ", Common to Mythic, each giving a level 1 pet, plus a Special pet crate"), _e("li", null, _e("strong", null, "Themed"), ", Party, Chatcolor, Compressor Voucher and Vote"), _e("li", null, _e("strong", null, "Time based"), ", Daily, Weekly and Monthly")))
    }]
  },
  'shops': {
    title: 'Shops and Trading',
    intro: 'Buy gear from mine shops and trade with other players.',
    sections: [{
      h: 'Mine Shops',
      body: _e(_F, null, _e("p", null, "Open the shop for the mine you are standing in with ", _e("code", null, "/mineshop"), " (or ", _e("code", null, "/shop"), ") or by clicking the shop NPC in the mine. Each shop is paged into Armor, Pickaxes, Swords and Compressors."), _e("p", null, "Mine shops are barter shops: you trade items for items, for example, handing over enchanted blocks to receive the next pickaxe tier. Overflow goes safely to your stash."))
    }, {
      h: 'Auction House',
      body: _e("p", null, "Type ", _e("code", null, "/ah"), " to open the Auction House, where players list items for sale to the whole server and buy what others have posted. It is the main way to trade rare gear and pets for cash.")
    }, {
      h: 'Direct Trades',
      body: _e("p", null, "For a face to face swap, use the trade system to safely exchange items and money directly with another player, so neither side can scam the other.")
    }]
  },
  'coinflip': {
    title: 'Coinflip',
    intro: 'Stake your cash on a 50/50 flip.',
    sections: [{
      h: 'How to Play',
      body: _e(_F, null, _e("p", null, "Type ", _e("code", null, "/cf bid <amount>"), " to post a coinflip. The stake leaves your balance immediately and your bid joins the open list."), _e("p", null, "Open ", _e("code", null, "/cf list"), " to see every open bid and click another player's flip to accept it. A random winner is chosen, takes double the stake and the result is broadcast. Cancel your own open bid with ", _e("code", null, "/cf delete"), "."))
    }]
  },
  'daily-rewards': {
    title: 'Daily and Playtime Rewards',
    intro: 'Free rewards every day, plus one time playtime milestones.',
    sections: [{
      h: 'Daily Rewards',
      body: _e(_F, null, _e("p", null, "Open ", _e("code", null, "/daily"), " for three tiers of rewards, each on its own cooldown that does not share with the others:"), _e("ul", null, _e("li", null, _e("strong", null, "Daily Crate"), " key, on a 16 hour cooldown, free for everyone"), _e("li", null, _e("strong", null, "Weekly Crate"), " key, on a 7 day cooldown"), _e("li", null, _e("strong", null, "Rank dailies"), ", one slot per rank (Catastro to Paragon and VIP to Primal), each on a 16 hour cooldown")), _e("p", null, "Higher ranks include the lower rank slots, so a Primal player can claim every paid slot."))
    }, {
      h: 'Primal Bonus Commands',
      body: _e("ul", null, _e("li", null, _e("code", null, "/claimboost"), " grants a 2x block booster and a 2x XP booster every 5 days"))
    }, {
      h: 'Playtime Rewards',
      body: _e("p", null, "Type ", _e("code", null, "/playtimerewards"), " for one time milestones that unlock as your total playtime climbs, from 15 minutes all the way to 100 hours. Each tier hands out cash and crate keys, claimed once.")
    }]
  },
  'stash': {
    title: 'Storage and Stash',
    intro: 'Your safety net and your personal vaults.',
    sections: [{
      h: 'The Stash',
      body: _e(_F, null, _e("p", null, "When a drop, shop purchase, quest payout or pet reward cannot fit in your inventory, it goes into your Stash instead and an actionbar message tells you. Open ", _e("code", null, "/stash"), " to see everything waiting and click an item to collect it."), _e("p", null, "Type ", _e("code", null, "/pickupstash"), " to grab everything at once, the fastest way to clear it after a long mining session. Anything that still does not fit stays put."))
    }, {
      h: 'Player Vaults',
      body: _e("p", null, "Type ", _e("code", null, "/pv"), " to open your personal vaults, extra storage pages that persist between sessions. The number of vaults you have scales with your rank.")
    }, {
      h: 'Ender Chest',
      body: _e("p", null, "Higher paid ranks can open their ender chest anywhere with ", _e("code", null, "/ec"), " for quick, portable storage.")
    }]
  },
  'leaderboards': {
    title: 'Leaderboards',
    intro: 'Weekly competition for the top miners.',
    sections: [{
      h: 'The Weekly Boards',
      body: _e("p", null, "The weekly leaderboards track blocks mined, player kills, playtime and bosses killed, shown on holograms at the leaderboard area. They reset every week.")
    }, {
      h: 'Prizes',
      body: _e("p", null, "Top finishers each week win crate keys and cash. The number one player also takes a $10 store gift card.")
    }, {
      h: 'How to Check',
      body: _e("p", null, "Type ", _e("code", null, "/leaderboards"), " to warp straight to the boards. Your own lifetime numbers live in ", _e("code", null, "/stats"), ", which you can also check on other players.")
    }]
  },
  'settings': {
    title: 'Settings and PvP',
    intro: 'Toggle your personal preferences, including PvP.',
    sections: [{
      h: 'Opening the Menu',
      body: _e("p", null, "Type ", _e("code", null, "/options"), " (or ", _e("code", null, "/settings"), "). Lime panes mean on, red panes mean off. Click any pane to flip it.")
    }, {
      h: 'What You Can Toggle',
      body: _e("ul", null, _e("li", null, _e("strong", null, "PvP"), " on or off, off makes you immune to other players' damage"), _e("li", null, _e("strong", null, "Full inventory warning")), _e("li", null, _e("strong", null, "Server broadcasts")), _e("li", null, _e("strong", null, "Item drops")), _e("li", null, _e("strong", null, "Chat game messages")), _e("li", null, _e("strong", null, "Prestige messages")), _e("li", null, _e("strong", null, "Auto Slayer spawn effects")))
    }, {
      h: 'Settings Stick',
      body: _e("p", null, "Every toggle saves to your account and carries across sessions. Turning off broadcasts mutes them for you; turning off PvP makes you untouchable to other players.")
    }]
  },
  'cosmetics': {
    title: 'Tags and Prefix',
    intro: 'Show off in chat and in the world.',
    sections: [{
      h: 'Tags',
      body: _e(_F, null, _e("p", null, "Tags are bracketed words shown after your name. Open ", _e("code", null, "/tags"), " (also ", _e("code", null, "/tag"), " or ", _e("code", null, "/suffix"), ") for two pages of them, grouped into themes. Each tag is locked behind its own permission, so you unlock them through ranks, store bundles, vouchers and special rewards."), _e("p", null, "Click any unlocked tag to equip it. There is a reset option to clear your tag."))
    }, {
      h: 'Custom Prefix Color',
      body: _e(_F, null, _e("p", null, "Immortal and Primal rank holders can recolor their rank prefix. Open ", _e("code", null, "/prefix"), " for around 26 color options from red through dark purple, plus a Reset to go back to the default."), _e("p", null, "Lower ranks can open the menu but cannot pick a color until they reach Immortal."))
    }, {
      h: 'Chat Colors',
      body: _e("p", null, "Open ", _e("code", null, "/chatcolor"), " (or ", _e("code", null, "/color"), ") to change the color of your chat messages. Gray is free for everyone; the rest are unlocked through ranks, store bundles and Chatcolor crate keys.")
    }]
  },
  'warps': {
    title: 'Warps and Dimensions',
    intro: 'Your shortcut to every mining dimension.',
    sections: [{
      h: 'Opening the Menu',
      body: _e(_F, null, _e("p", null, "Type ", _e("code", null, "/warps"), " for the warp GUI, which lists every dimension plus shortcuts to spawn, the crates and the leaderboards. Locked dimensions show what you need to enter them."), _e("p", null, "You can also type ", _e("code", null, "/spawn"), " to return to the hub at any time."))
    }, {
      h: 'The Dimensions',
      body: _e(_F, null, _e("table", null, _e("thead", null, _e("tr", null, _e("th", null, "Dimension"), _e("th", null, "Command"), _e("th", null, "Access"))), _e("tbody", null, _e("tr", null, _e("td", null, "Overworld"), _e("td", null, "At spawn"), _e("td", null, "Open")), _e("tr", null, _e("td", null, "Cave"), _e("td", null, _e("code", null, "/cave")), _e("td", null, "Open")), _e("tr", null, _e("td", null, "Nether"), _e("td", null, _e("code", null, "/nether")), _e("td", null, "Open")), _e("tr", null, _e("td", null, "End"), _e("td", null, _e("code", null, "/end")), _e("td", null, "Open")), _e("tr", null, _e("td", null, "Aether"), _e("td", null, _e("code", null, "/aether")), _e("td", null, "Open")), _e("tr", null, _e("td", null, "Abyss"), _e("td", null, _e("code", null, "/abyss")), _e("td", null, "Open")), _e("tr", null, _e("td", null, "The Depths"), _e("td", null, _e("code", null, "/depths")), _e("td", null, "Prestige 1")), _e("tr", null, _e("td", null, "The Deep Dark"), _e("td", null, _e("code", null, "/deepdark")), _e("td", null, "Prestige 2")))), _e("p", null, "Overworld through Abyss are open to everyone. The two prestige dimensions unlock as you rebirth."))
    }]
  },
  'ranks-free': {
    title: 'Free Ranks',
    intro: 'Four ranks you earn through the Dragon Quest.',
    sections: [{
      h: 'The Ladder',
      body: _e("table", null, _e("thead", null, _e("tr", null, _e("th", null, "Rank"), _e("th", null, "Unlock"), _e("th", null, "Key Perks (shown in /ranks)"))), _e("tbody", null, _e("tr", null, _e("td", null, _e("strong", null, "Catastro")), _e("td", null, "Dragon Quest + $750k"), _e("td", null, "2 vaults, 1 home, white chatcolor, Catastro prefix")), _e("tr", null, _e("td", null, _e("strong", null, "Gladiator")), _e("td", null, "Dragon Quest + $2.5M"), _e("td", null, "3 vaults, 2 homes, /autocompress")), _e("tr", null, _e("td", null, _e("strong", null, "Sentinel")), _e("td", null, "Dragon Quest + $7.5M"), _e("td", null, "4 vaults, 3 homes, /autocompress, /nick")), _e("tr", null, _e("td", null, _e("strong", null, "Paragon")), _e("td", null, "Dragon Quest + $20M"), _e("td", null, "5 vaults, 4 homes, /autocompress, /supercompress"))))
    }, {
      h: 'How You Earn Them',
      body: _e("p", null, "Each free rank is unlocked through the Dragon Quest chain, turn in that rank's shopping list to Dragon13215, then buy the voucher he unlocks. Right click the voucher to apply the rank. See the Quests guide for the full list of materials and level requirements.")
    }]
  },
  'ranks-paid': {
    title: 'Paid Ranks',
    intro: 'Six tiers, each stacking on top of the last.',
    sections: [{
      h: 'The Ladder',
      body: _e("table", null, _e("thead", null, _e("tr", null, _e("th", null, "Rank"), _e("th", null, "Key Unique Perks (shown in /ranks)"))), _e("tbody", null, _e("tr", null, _e("td", null, _e("strong", null, "VIP")), _e("td", null, "/feed, /boop, 5 vaults, /autocompress, yellow and white chatcolors, 14 tags")), _e("tr", null, _e("td", null, _e("strong", null, "MVP")), _e("td", null, "/fly, /heal, 10 vaults, /sethome up to 10, blue chatcolors, plus all VIP")), _e("tr", null, _e("td", null, _e("strong", null, "Celestial")), _e("td", null, "/resetmine, /feedall, /healall, 15 vaults, pink chatcolors, plus all MVP")), _e("tr", null, _e("td", null, _e("strong", null, "Aethereal")), _e("td", null, "/supercompress, /back, 30 vaults, white and gray chatcolors, plus all Celestial")), _e("tr", null, _e("td", null, _e("strong", null, "Immortal")), _e("td", null, "/ec, /invsee, /prefix recolor, 40 vaults, red chatcolors, plus all Aethereal")), _e("tr", null, _e("td", null, _e("strong", null, "Primal")), _e("td", null, "/ultracompress, 50 vaults, /claimboost every 5 days, every chatcolor, plus all Immortal"))))
    }, {
      h: 'Buying a Rank',
      body: _e("p", null, "Head to ", _e("code", null, "store.primalmines.net"), ", pick the rank and pay. It applies in game within a minute. You can also pay the difference to upgrade between paid ranks without rebuying. If anything goes wrong, open a ticket in the Discord.")
    }]
  },
  'enchants': {
    title: 'Custom Enchants',
    intro: 'Custom enchants live alongside the vanilla list.',
    sections: [{
      h: 'The Enchants',
      body: _e("ul", null, _e("li", null, _e("strong", null, "Monopoly"), ", more money per block broken. The top mining picks carry it at high levels."), _e("li", null, _e("strong", null, "Plunder"), ", raises your boss drop rolls by 1% per level (up to Plunder 10). Stack it on your boss weapon before hunting."), _e("li", null, _e("strong", null, "Trench"), ", breaks a vein of extra blocks per swing, each routed through your full Fortune and compression."))
    }]
  },
  'discord-link': {
    title: 'Discord Link',
    intro: 'Connect Minecraft and Discord. Get rewarded.',
    sections: [{
      h: 'How to Link',
      body: _e(_F, null, _e("p", null, "Type ", _e("code", null, "/link"), " in game for a 6 character code (it expires after 10 minutes). Open the PrimalMines Discord, submit the code, then rejoin the server."), _e("p", null, "The first time you link you receive $10,000 plus 3 Rare Pet Keys."))
    }, {
      h: 'Unlinking',
      body: _e("p", null, "Type ", _e("code", null, "/unlink"), " to remove the link. You can re-link any time, but the first time reward only pays out once.")
    }]
  },
  'store-info': {
    title: 'Store',
    intro: 'Support the server for ranks, cosmetics and permissions.',
    sections: [{
      h: 'Where',
      body: _e("p", null, "The store lives at ", _e("code", null, "store.primalmines.net"), ". It runs on Tebex, the standard hosted checkout for Minecraft servers.")
    }, {
      h: 'What is For Sale',
      body: _e(_F, null, _e("p", null, _e("strong", null, "Ranks"), ", the six paid ranks, VIP through Primal."), _e("p", null, _e("strong", null, "Rank upgrades"), ", pay the difference to move up the paid ladder without rebuying."), _e("p", null, _e("strong", null, "Permissions"), ", standalone unlocks like /fly and the auto, super and ultra compressors."), _e("p", null, _e("strong", null, "Cosmetics"), ", chat color bundles and tag bundles."), _e("p", null, "Anything you can buy with real money here can also be earned in game over time. The store just speeds it up and keeps the server running."))
    }]
  },
  'commands': {
    title: 'Commands Cheatsheet',
    intro: 'Every player facing command in one place.',
    sections: [{
      h: 'Core',
      body: _e("ul", null, _e("li", null, _e("code", null, "/menu"), " or ", _e("code", null, "/m"), " the main menu"), _e("li", null, _e("code", null, "/help"), " the help GUI"), _e("li", null, _e("code", null, "/prestige"), " or ", _e("code", null, "/rebirth"), " prestige GUI"), _e("li", null, _e("code", null, "/skills"), " skills menu"), _e("li", null, _e("code", null, "/quests"), " weekly challenges"), _e("li", null, _e("code", null, "/daily"), " daily rewards"), _e("li", null, _e("code", null, "/playtimerewards"), " playtime milestones"), _e("li", null, _e("code", null, "/stats"), " your stats or another player's"), _e("li", null, _e("code", null, "/balance"), " or ", _e("code", null, "/bal"), " your balance"), _e("li", null, _e("code", null, "/playtime"), " your playtime"))
    }, {
      h: 'Economy and Items',
      body: _e("ul", null, _e("li", null, _e("code", null, "/convert"), " turn balance into cash notes"), _e("li", null, _e("code", null, "/pay"), " send money to a player"), _e("li", null, _e("code", null, "/keys"), " the keys shop"), _e("li", null, _e("code", null, "/claimkeys"), " claim overflow keys"), _e("li", null, _e("code", null, "/mineshop"), " or ", _e("code", null, "/shop"), " the current mine's shop"), _e("li", null, _e("code", null, "/ah"), " the auction house"), _e("li", null, _e("code", null, "/cf"), " coinflip"), _e("li", null, _e("code", null, "/stash"), " and ", _e("code", null, "/pickupstash"), " your stash"), _e("li", null, _e("code", null, "/pv"), " player vaults"))
    }, {
      h: 'Bosses, Pets and Mining',
      body: _e("ul", null, _e("li", null, _e("code", null, "/slayer"), " or ", _e("code", null, "/bosses"), " the slayer menu"), _e("li", null, _e("code", null, "/pets"), " your pet menu"), _e("li", null, _e("code", null, "/petshop"), " the pet shop"), _e("li", null, _e("code", null, "/compressors"), " the compressor menu"), _e("li", null, _e("code", null, "/boost"), " the booster menu"))
    }, {
      h: 'Cosmetics and Settings',
      body: _e("ul", null, _e("li", null, _e("code", null, "/tags"), " your tags"), _e("li", null, _e("code", null, "/chatcolor"), " or ", _e("code", null, "/color"), " your chat color"), _e("li", null, _e("code", null, "/prefix"), " recolor your prefix (Immortal+)"), _e("li", null, _e("code", null, "/options"), " or ", _e("code", null, "/settings"), " toggle settings"), _e("li", null, _e("code", null, "/offhand"), " swap held item to off hand"), _e("li", null, _e("code", null, "/drop"), " toggle item dropping"))
    }, {
      h: 'Warps and Social',
      body: _e("ul", null, _e("li", null, _e("code", null, "/spawn"), " back to the hub"), _e("li", null, _e("code", null, "/warps"), " the warp menu"), _e("li", null, _e("code", null, "/cave"), ", ", _e("code", null, "/nether"), ", ", _e("code", null, "/end"), ", ", _e("code", null, "/aether"), ", ", _e("code", null, "/abyss"), " dimension warps"), _e("li", null, _e("code", null, "/depths"), " and ", _e("code", null, "/deepdark"), " prestige dimensions"), _e("li", null, _e("code", null, "/leaderboards"), " the leaderboards"), _e("li", null, _e("code", null, "/store"), " the store link"), _e("li", null, _e("code", null, "/discord"), " the Discord invite"), _e("li", null, _e("code", null, "/link"), " and ", _e("code", null, "/unlink"), " Discord linking"))
    }]
  }
};

/* ============================== NAV ============================== */
function NavBar({
  onNavigate,
  page
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav-root ${scrolled ? 'scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between",
    style: {
      paddingTop: '1.1rem',
      paddingBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    className: "flex items-center gap-3",
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "server-icon.png",
    alt: "PrimalMines",
    style: {
      width: '34px',
      height: '34px',
      borderRadius: '8px',
      objectFit: 'cover',
      boxShadow: '0 0 14px rgba(61,255,91,0.4)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Bricolage Grotesque, sans-serif',
      fontWeight: 900,
      fontSize: '1.15rem',
      letterSpacing: '-0.02em',
      color: '#f0fff5'
    }
  }, "PRIMALMINES")), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    className: `nav-link ${page === 'home' ? 'active' : ''}`
  }, "Home"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('guides'),
    className: `nav-link ${page === 'guides' ? 'active' : ''}`
  }, "Guides"), /*#__PURE__*/React.createElement("a", {
    href: "https://store.primalmines.net",
    target: "_blank",
    rel: "noopener",
    className: "nav-link"
  }, "Store"), /*#__PURE__*/React.createElement("a", {
    href: "https://discord.gg/b6quqGmVEY",
    target: "_blank",
    rel: "noopener",
    className: "nav-link"
  }, "Discord"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '1px',
      height: '20px',
      background: 'rgba(165,182,168,0.3)',
      margin: '0 0.4rem'
    }
  }), /*#__PURE__*/React.createElement(IPChip, null)), /*#__PURE__*/React.createElement("button", {
    className: "lg:hidden btn btn-ghost",
    onClick: () => setOpen(!open),
    style: {
      padding: '0.55rem 0.85rem'
    }
  }, open ? /*#__PURE__*/React.createElement(Icon.Close, {
    className: "w-4 h-4"
  }) : /*#__PURE__*/React.createElement(Icon.Menu, {
    className: "w-4 h-4"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden px-6 pb-5 pt-2 flex flex-col gap-2",
    style: {
      background: 'rgba(4,8,6,0.95)',
      borderTop: '1px solid rgba(61,255,91,0.15)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onNavigate('home');
      setOpen(false);
    },
    className: "nav-link text-left"
  }, "Home"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onNavigate('guides');
      setOpen(false);
    },
    className: "nav-link text-left"
  }, "Guides"), /*#__PURE__*/React.createElement("a", {
    href: "https://store.primalmines.net",
    target: "_blank",
    rel: "noopener",
    className: "nav-link"
  }, "Store"), /*#__PURE__*/React.createElement("a", {
    href: "https://discord.gg/b6quqGmVEY",
    target: "_blank",
    rel: "noopener",
    className: "nav-link"
  }, "Discord"), /*#__PURE__*/React.createElement(IPChip, null)));
}
function IPChip() {
  const [copied, setCopied] = useState(false);
  const ip = 'play.primalmines.net';
  const copy = () => {
    navigator.clipboard?.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    className: "ip-chip",
    style: {
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), /*#__PURE__*/React.createElement("span", null, ip), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '0.7rem',
      color: '#6dff85',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, copied ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon.Check, {
    className: "w-3 h-3"
  }), "copied") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon.Copy, {
    className: "w-3 h-3"
  }), "copy")));
}

/* ============================== HERO ============================== */
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "relative pt-32 lg:pt-40 pb-28",
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-12 gap-6 lg:gap-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex col-span-1 items-start justify-center pt-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vlabel"
  }, "SKYMINING / 2026 / V1.0")), /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 lg:col-span-7 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-9"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono-label",
    style: {
      color: '#a5b6a8'
    }
  }, "SERVER STATUS"), /*#__PURE__*/React.createElement("span", {
    className: "mono-label",
    style: {
      color: '#3dff5b'
    }
  }, "// LIVE")), /*#__PURE__*/React.createElement("h1", {
    className: "editorial text-white",
    style: {
      fontSize: 'clamp(3.4rem, 11vw, 9.4rem)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "PRIMAL"), /*#__PURE__*/React.createElement("span", {
    className: "stroke-text-acid",
    style: {
      display: 'block'
    }
  }, "MINES.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('guides'),
    className: "btn btn-acid"
  }, "Browse Guides ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    className: "w-3.5 h-3.5"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://store.primalmines.net",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost"
  }, "Store ", /*#__PURE__*/React.createElement(Icon.Store, {
    className: "w-3.5 h-3.5"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://discord.gg/b6quqGmVEY",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost"
  }, "Discord ", /*#__PURE__*/React.createElement(Icon.Discord, {
    className: "w-3.5 h-3.5"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 lg:col-span-4 relative flex items-center justify-center",
    style: {
      minHeight: '420px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pick-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pick-halo"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "pick-svg",
    viewBox: "0 0 400 400",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "pickGrad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#a5ffb8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: "#3dff5b"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#0cb938"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "pickFill",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#102218"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#06100a"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "pickGlow",
    x: "-30%",
    y: "-30%",
    width: "160%",
    height: "160%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "3",
    result: "b"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
    in: "b"
  }), /*#__PURE__*/React.createElement("feMergeNode", {
    in: "SourceGraphic"
  })))), /*#__PURE__*/React.createElement("g", {
    className: "rotor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60 130 L 130 80 L 270 80 L 340 130 L 260 160 L 230 195 L 170 195 L 140 160 Z",
    fill: "url(#pickFill)",
    stroke: "url(#pickGrad)",
    strokeWidth: "4",
    strokeLinejoin: "round",
    filter: "url(#pickGlow)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 130 110 L 270 110",
    stroke: "#3dff5b",
    strokeWidth: "2",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 110 135 L 170 135",
    stroke: "#3dff5b",
    strokeWidth: "2",
    opacity: "0.45"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 230 135 L 290 135",
    stroke: "#3dff5b",
    strokeWidth: "2",
    opacity: "0.45"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 170 165 L 230 165",
    stroke: "#3dff5b",
    strokeWidth: "2",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "178",
    y: "190",
    width: "44",
    height: "22",
    rx: "3",
    fill: "#0a3414",
    stroke: "url(#pickGrad)",
    strokeWidth: "3",
    filter: "url(#pickGlow)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "184",
    y: "208",
    width: "32",
    height: "148",
    rx: "4",
    fill: "url(#pickFill)",
    stroke: "url(#pickGrad)",
    strokeWidth: "3.5",
    filter: "url(#pickGlow)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "184",
    y1: "240",
    x2: "216",
    y2: "240",
    stroke: "#3dff5b",
    strokeWidth: "2",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "184",
    y1: "270",
    x2: "216",
    y2: "270",
    stroke: "#3dff5b",
    strokeWidth: "2",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "184",
    y1: "300",
    x2: "216",
    y2: "300",
    stroke: "#3dff5b",
    strokeWidth: "2",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "184",
    y1: "330",
    x2: "216",
    y2: "330",
    stroke: "#3dff5b",
    strokeWidth: "2",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "180",
    y: "350",
    width: "40",
    height: "10",
    rx: "2",
    fill: "#0a3414",
    stroke: "url(#pickGrad)",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "100",
    r: "3",
    fill: "#a5ffb8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "160",
    r: "2",
    fill: "#a5ffb8"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "float-block",
    style: {
      top: '8%',
      right: '6%',
      animationDelay: '0s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "float-block",
    style: {
      bottom: '14%',
      left: '4%',
      animationDelay: '-2s',
      width: '22px',
      height: '22px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "float-block",
    style: {
      top: '40%',
      right: '-2%',
      animationDelay: '-4s',
      width: '16px',
      height: '16px'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-16 lg:mt-20 overflow-hidden",
    style: {
      borderTop: '1px solid rgba(165,182,168,0.15)',
      borderBottom: '1px solid rgba(165,182,168,0.15)',
      paddingTop: '1.4rem',
      paddingBottom: '1.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "marq"
  }, Array.from({
    length: 12
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "marq-item"
  }, i % 2 === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, "PRIMAL", /*#__PURE__*/React.createElement("span", {
    className: "acid"
  }, "MINES")) : /*#__PURE__*/React.createElement("span", {
    className: "acid"
  }, "PRIMALMINES"))))));
}

/* ============================== SECTION HEADER ============================== */
function SectionHead({
  num,
  label,
  title,
  italic,
  blurb,
  side
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 gap-6 lg:gap-10 mb-12 reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex col-span-1 items-start justify-center pt-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vlabel"
  }, side)), /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 lg:col-span-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-num"
  }, num), /*#__PURE__*/React.createElement("div", {
    className: "mono-label mt-3"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 lg:col-span-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "editorial",
    style: {
      fontSize: 'clamp(2.4rem, 6vw, 4.6rem)',
      color: '#f0fff5'
    }
  }, title, " ", italic && /*#__PURE__*/React.createElement("span", {
    className: "editorial-italic",
    style: {
      color: '#3dff5b'
    }
  }, italic)), blurb && /*#__PURE__*/React.createElement("p", {
    className: "mt-5 max-w-2xl",
    style: {
      color: '#b3c7b7',
      fontSize: '1.05rem',
      lineHeight: 1.7,
      fontWeight: 300
    }
  }, blurb)));
}

/* ============================== FEATURES ============================== */
function Features() {
  const items = [{
    icon: 'Map',
    title: 'Six Dimensions',
    body: 'Overworld through Abyss with prestige dimensions that keep going. Each one ups the ceiling on Fortune, money and the climb.'
  }, {
    icon: 'Crown',
    title: 'True Prestige',
    body: 'Lose your max gear. Gain a permanent block and XP multiplier plus a Prestige Coin to spend on lasting upgrades.'
  }, {
    icon: 'Trophy',
    title: 'Slayer System',
    body: 'Eight bosses. Summon, kill, level. Master each one to unlock a permanent perk that stacks across the whole roster.'
  }, {
    icon: 'Book',
    title: 'Real Quests',
    body: 'NPC quests with dialogue, choices and named rewards. The Dragon Quest unlocks every free rank as you climb.'
  }, {
    icon: 'Bolt',
    title: 'Custom Enchants',
    body: 'Monopoly stacks money per block. Plunder stacks your odds on rare boss drops. Both tuned to scale with prestige.'
  }, {
    icon: 'Paw',
    title: '124 Pets',
    body: 'Seven rarities. Each pet has an ability and a passive stat boost. Some drop only from bosses.'
  }, {
    icon: 'Pickaxe',
    title: 'Custom Fortune',
    body: 'Handles Fortune 1000 and beyond plus autocompression that empties your inventory before it overflows.'
  }, {
    icon: 'Sparkle',
    title: 'Hourly Events',
    body: 'Mining Events drop in every hour. Race for the block. Win the round. Walk away with the prize.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 lg:py-32 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "01",
    label: "// FEATURES",
    title: "Built for the grind.",
    italic: "Designed for the story.",
    side: "01 / FEATURES",
    blurb: "Every system on PrimalMines is hand built around long term progression and player choice. No filler. No half measures. Swipe through."
  }), /*#__PURE__*/React.createElement("div", {
    className: "h-scroll reveal"
  }, items.map((it, i) => {
    const Cmp = Icon[it.icon];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "h-card"
    }, /*#__PURE__*/React.createElement("span", {
      className: "corner-num"
    }, "// ", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      className: "ico-wrap"
    }, /*#__PURE__*/React.createElement(Cmp, {
      className: "w-7 h-7"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'Bricolage Grotesque, sans-serif',
        fontWeight: 800,
        fontSize: '1.5rem',
        color: '#f0fff5',
        marginBottom: '0.6rem',
        letterSpacing: '-0.02em'
      }
    }, it.title), /*#__PURE__*/React.createElement("p", {
      style: {
        color: '#b3c7b7',
        fontSize: '0.95rem',
        lineHeight: 1.65
      }
    }, it.body));
  }))));
}

/* ============================== JOURNEY ============================== */
function Journey() {
  const dims = [{
    n: '01',
    name: 'Overworld',
    body: 'Forgiving payouts. Starter pick. The first climb starts here.'
  }, {
    n: '02',
    name: 'Cave',
    body: 'Darker mines. Tighter rooms. The first boss waits below.'
  }, {
    n: '03',
    name: 'Nether',
    body: 'Fire themed mines. Stacking heat. Bigger payouts.'
  }, {
    n: '04',
    name: 'End',
    body: 'Higher payouts. The End boss waits for serious gear.'
  }, {
    n: '05',
    name: 'Aether',
    body: 'Bright side of the shared map. 5 pickaxe tiers per mine.'
  }, {
    n: '06',
    name: 'Abyss',
    body: 'Dark side of the shared map. The final dimension before prestige.'
  }, {
    n: '∞',
    name: 'Prestige',
    body: 'Reset. Unlock the next prestige dimension. Forever.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 lg:py-32 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02",
    label: "// PROGRESSION",
    title: "Your path through",
    italic: "the server.",
    side: "02 / PROGRESSION",
    blurb: "You unlock the next dimension by mastering the current one. Six dimensions and a prestige loop that never lets up."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 gap-3 lg:gap-4 reveal"
  }, dims.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 relative group",
    style: {
      padding: '1.5rem 1.25rem',
      border: '1px solid rgba(165,182,168,0.16)',
      borderRadius: '16px',
      background: 'linear-gradient(180deg, rgba(16,34,24,0.55), rgba(8,18,12,0.55))',
      transition: 'all .3s cubic-bezier(.16,1,.3,1)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'rgba(61,255,91,0.6)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'rgba(165,182,168,0.16)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      color: '#a5b6a8'
    }
  }, "STAGE"), /*#__PURE__*/React.createElement("div", {
    className: "editorial mt-1",
    style: {
      fontSize: '3.6rem',
      color: '#3dff5b',
      lineHeight: 1,
      textShadow: '0 0 30px rgba(61,255,91,0.4)'
    }
  }, d.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem',
      fontFamily: 'Bricolage Grotesque, sans-serif',
      fontWeight: 800,
      fontSize: '1.18rem',
      color: '#f0fff5',
      letterSpacing: '-0.01em'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.4rem',
      fontSize: '0.84rem',
      color: '#b3c7b7',
      lineHeight: 1.55
    }
  }, d.body))))));
}

/* ============================== LOOT (terminal) ============================== */
function LootSection({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 lg:py-32 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02",
    label: "// SLAYER",
    title: "Eight bosses.",
    italic: "Five levels each.",
    side: "02 / SLAYER",
    blurb: "Slayer is the new boss system. Open /slayer to see your progression across all 8 bosses. Summon. Kill. Level. Master each one for a permanent perk."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 gap-6 lg:gap-10 reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "terminal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "terminal-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "terminal-dot",
    style: {
      background: '#ff5f57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "terminal-dot",
    style: {
      background: '#febc2e'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "terminal-dot",
    style: {
      background: '#28c840'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '0.8rem',
      color: '#a5b6a8',
      fontSize: '0.75rem',
      letterSpacing: '0.1em'
    }
  }, "primalmines @ loot ~ boss/pollum")), /*#__PURE__*/React.createElement("div", {
    className: "terminal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term-cmd"
  }, "$ ./roll-drops --boss=pollum"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '0.4rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#6dff85',
      fontSize: '1.55rem',
      fontFamily: 'Bricolage Grotesque, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      marginBottom: '0.6rem'
    }
  }, "POLLUM"), /*#__PURE__*/React.createElement("div", {
    className: "term-line",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-pct"
  }, "80%"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "1x Pollum Shard"), /*#__PURE__*/React.createElement("span", {
    className: "term-tag-common",
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "common")), /*#__PURE__*/React.createElement("div", {
    className: "term-line",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-pct"
  }, "45%"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "3x Pollum Shard"), /*#__PURE__*/React.createElement("span", {
    className: "term-tag-rare",
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "rare")), /*#__PURE__*/React.createElement("div", {
    className: "term-line",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-pct"
  }, "60%"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "$5,000"), /*#__PURE__*/React.createElement("span", {
    className: "term-tag-uncommon",
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "uncommon")), /*#__PURE__*/React.createElement("div", {
    className: "term-line",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-pct"
  }, "10%"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "1x Pollum's Axe"), /*#__PURE__*/React.createElement("span", {
    className: "term-tag-leg",
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "legendary")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '0.6rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "term-cmd"
  }, "$ _")))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 lg:col-span-5 flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      color: '#a5b6a8'
    }
  }, "// 08 BOSSES \xB7 40 LEVELS"), /*#__PURE__*/React.createElement("h3", {
    className: "editorial mt-2",
    style: {
      fontSize: '2.4rem',
      color: '#f0fff5',
      lineHeight: 1
    }
  }, "Pollum. Viper. Tinc. Xenon.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "editorial-italic",
    style: {
      color: '#3dff5b'
    }
  }, "Adam. Malacher. Dredge. Vexor.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-5",
    style: {
      color: '#b3c7b7',
      fontSize: '1rem',
      lineHeight: 1.7
    }
  }, "Summon a boss with ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'rgba(61,255,91,0.1)',
      padding: '2px 8px',
      borderRadius: '5px',
      color: '#a5ffb8',
      fontSize: '0.92em',
      fontFamily: 'JetBrains Mono, monospace'
    }
  }, "/slayer"), ". Each kill rolls one drop. Level the boss five times for a permanent perk."), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('guides'),
    className: "btn btn-ghost mt-7",
    style: {
      alignSelf: 'flex-start'
    }
  }, "See the full system ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    className: "w-3.5 h-3.5"
  }))))));
}

/* ============================== PET PEEK ============================== */
function PetPeek({
  onNavigate
}) {
  const featured = useMemo(() => {
    return ['Cosmic Dragon', 'Frost Wyrm', '81hp_', 'Kasane Teto', 'King Midas', 'Businessman', 'Storm Drake', 'Eclipse Dragon'].map(n => PETS.find(p => p.name === n)).filter(Boolean);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 lg:py-32 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "03",
    label: "// COMPANIONS",
    title: "Companions for",
    italic: "the grind.",
    side: "03 / PETS",
    blurb: "Seven rarities. Each pet has an ability and a passive stat sheet. New pets drop into the roster every season. A taste below. The full list lives in the guide."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 reveal"
  }, featured.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "pet-tile"
  }, /*#__PURE__*/React.createElement("span", {
    className: `rb rb-${p.rarity}`
  }, p.rarity), /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "ab"
  }, p.ability), p.stats.length > 0 && /*#__PURE__*/React.createElement("div", null, p.stats.slice(0, 3).map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "st"
  }, s)))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 reveal"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('guides'),
    className: "btn btn-acid"
  }, "Browse all 124 pets ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    className: "w-3.5 h-3.5"
  })))));
}

/* ============================== RANKS ============================== */
function Ranks() {
  const free = [{
    name: 'Catastro',
    color: '#a06fff',
    glyph: 'C',
    body: 'Starter rank. Base permissions.'
  }, {
    name: 'Gladiator',
    color: '#ff9e3d',
    glyph: 'G',
    body: 'Autocompress unlocks the grind.'
  }, {
    name: 'Sentinel',
    color: '#4abdf0',
    glyph: 'S',
    body: 'More vaults. More homes. Particle trail.'
  }, {
    name: 'Paragon',
    color: '#ff5a5a',
    glyph: 'P',
    body: 'Supercompress. Booster activation.'
  }];
  const paid = [{
    name: 'VIP',
    color: '#ffe14a',
    img: 'ranks/vip.png'
  }, {
    name: 'MVP',
    color: '#5fc8ff',
    img: 'ranks/mvp.png'
  }, {
    name: 'Celestial',
    color: '#ff8df0',
    img: 'ranks/celestial.png'
  }, {
    name: 'Aethereal',
    color: '#a3f1ff',
    img: 'ranks/aethereal.png'
  }, {
    name: 'Immortal',
    color: '#ff5050',
    img: 'ranks/immortal.png'
  }, {
    name: 'Primal',
    color: '#3dff5b',
    img: 'ranks/primal.png'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 lg:py-32 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "04",
    label: "// RANKS",
    title: "Free ranks for the climb.",
    italic: "Paid ranks for the comforts.",
    side: "04 / RANKS",
    blurb: "Free ranks unlock through play. Paid ranks add quality of life and cosmetics. No pay to win. Ever."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 gap-6 lg:gap-10 reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 lg:col-span-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label"
  }, "FREE LADDER"), /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      color: '#a5b6a8'
    }
  }, "EARN IN GAME")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, free.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    className: "rank-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rank-glyph",
    style: {
      background: `${r.color}22`,
      color: r.color,
      border: `1px solid ${r.color}66`
    }
  }, r.glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Bricolage Grotesque, sans-serif',
      fontWeight: 800,
      color: r.color,
      fontSize: '1.1rem',
      letterSpacing: '-0.01em'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: '#b3c7b7'
    }
  }, r.body)))))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 lg:col-span-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label"
  }, "PAID LADDER"), /*#__PURE__*/React.createElement("a", {
    href: "https://store.primalmines.net",
    target: "_blank",
    rel: "noopener",
    className: "mono-label",
    style: {
      color: '#3dff5b',
      textDecoration: 'none'
    }
  }, "VIEW STORE \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, paid.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      aspectRatio: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '14px',
      padding: '1rem',
      background: `linear-gradient(180deg, ${r.color}11, transparent)`,
      border: `1px solid ${r.color}55`,
      color: r.color,
      boxShadow: `inset 0 0 30px ${r.color}11`,
      transition: 'all .25s cubic-bezier(.16,1,.3,1)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.borderColor = r.color;
      e.currentTarget.style.boxShadow = `0 18px 36px -14px ${r.color}88, inset 0 0 30px ${r.color}22`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = `${r.color}55`;
      e.currentTarget.style.boxShadow = `inset 0 0 30px ${r.color}11`;
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: r.img,
    alt: r.name,
    style: {
      width: '62%',
      height: 'auto',
      objectFit: 'contain',
      marginBottom: '0.5rem',
      filter: `drop-shadow(0 0 12px ${r.color}88)`
    },
    onError: e => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.nextSibling.style.display = 'flex';
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none',
      width: '56px',
      height: '56px',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      background: `${r.color}22`,
      border: `1px solid ${r.color}66`,
      marginBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Icon.Crown, {
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Bricolage Grotesque, sans-serif',
      fontWeight: 800,
      fontSize: '1rem',
      letterSpacing: '-0.01em'
    }
  }, r.name)))), /*#__PURE__*/React.createElement("a", {
    href: "https://store.primalmines.net",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-acid mt-6 w-full justify-center",
    style: {
      display: 'inline-flex'
    }
  }, "Browse the Store ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    className: "w-3.5 h-3.5"
  }))))));
}

/* ============================== CTA ============================== */
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 lg:py-32 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      padding: '5rem 2rem',
      borderRadius: '28px',
      border: '1px solid rgba(61,255,91,0.35)',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(61,255,91,0.18) 0%, rgba(4,8,6,0.95) 60%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      justifyContent: 'center',
      display: 'flex'
    }
  }, "// READY"), /*#__PURE__*/React.createElement("h2", {
    className: "editorial mt-4",
    style: {
      fontSize: 'clamp(3rem, 9vw, 7rem)',
      color: '#f0fff5',
      lineHeight: 0.92
    }
  }, "See you at ", /*#__PURE__*/React.createElement("span", {
    className: "editorial-italic",
    style: {
      color: '#3dff5b'
    }
  }, "spawn.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-xl mx-auto",
    style: {
      color: '#b3c7b7',
      fontSize: '1.05rem',
      lineHeight: 1.6
    }
  }, "Copy the IP. Boot Minecraft. Add the server. You will be mining your first block in under a minute."), /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap justify-center items-center gap-3"
  }, /*#__PURE__*/React.createElement(IPChip, null), /*#__PURE__*/React.createElement("a", {
    href: "https://discord.gg/b6quqGmVEY",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost"
  }, "Discord ", /*#__PURE__*/React.createElement(Icon.Discord, {
    className: "w-3.5 h-3.5"
  }))))));
}

/* ============================== FOOTER ============================== */
function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "relative pt-16 pb-10",
    style: {
      borderTop: '1px solid rgba(165,182,168,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 gap-6 mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 md:col-span-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: "server-icon.png",
    alt: "PrimalMines",
    style: {
      width: '42px',
      height: '42px',
      borderRadius: '10px',
      objectFit: 'cover',
      boxShadow: '0 0 14px rgba(61,255,91,0.4)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Bricolage Grotesque, sans-serif',
      fontWeight: 900,
      fontSize: '1.4rem',
      color: '#f0fff5',
      letterSpacing: '-0.02em'
    }
  }, "PRIMALMINES")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#b3c7b7',
      fontSize: '0.92rem',
      maxWidth: '420px',
      lineHeight: 1.65
    }
  }, "A skymining experience built around long term progression, story driven quests and a prestige loop that never lets up."), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(IPChip, null))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-6 md:col-span-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label mb-3"
  }, "NAVIGATE"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    style: {
      background: 'none',
      border: 'none',
      color: '#d5ffe0',
      fontSize: '0.92rem',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, "Home"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('guides'),
    style: {
      background: 'none',
      border: 'none',
      color: '#d5ffe0',
      fontSize: '0.92rem',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, "Guides"), /*#__PURE__*/React.createElement("a", {
    href: "https://store.primalmines.net",
    target: "_blank",
    rel: "noopener",
    style: {
      color: '#d5ffe0',
      fontSize: '0.92rem',
      textDecoration: 'none'
    }
  }, "Store"))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-6 md:col-span-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label mb-3"
  }, "COMMUNITY"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2.5"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://discord.gg/b6quqGmVEY",
    target: "_blank",
    rel: "noopener",
    style: {
      color: '#d5ffe0',
      fontSize: '0.92rem',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Icon.Discord, {
    className: "w-4 h-4"
  }), "Discord"), /*#__PURE__*/React.createElement("a", {
    href: "https://store.primalmines.net",
    target: "_blank",
    rel: "noopener",
    style: {
      color: '#d5ffe0',
      fontSize: '0.92rem',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Icon.Store, {
    className: "w-4 h-4"
  }), "Tebex")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 flex flex-col sm:flex-row items-center justify-between gap-4",
    style: {
      borderTop: '1px solid rgba(165,182,168,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      color: '#a5b6a8'
    }
  }, "PRIMALMINES. NOT AFFILIATED WITH MOJANG OR MICROSOFT."), /*#__PURE__*/React.createElement("div", {
    className: "mono-label"
  }, "BUILD / 2026 / LIVE"))));
}

/* ============================== HOME PAGE ============================== */
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(LootSection, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(PetPeek, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Ranks, null), /*#__PURE__*/React.createElement(CTA, null));
}

/* ============================== GUIDES PAGE ============================== */
function Guides({
  onNavigate
}) {
  const [active, setActive] = useState('getting-started');
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [active]);
  const filtered = useMemo(() => {
    if (!query.trim()) return GUIDE_CATEGORIES;
    const q = query.toLowerCase();
    return GUIDE_CATEGORIES.filter(c => c.name.toLowerCase().includes(q));
  }, [query]);
  const guide = GUIDES[active];
  const idx = GUIDE_CATEGORIES.findIndex(c => c.id === active);
  const prev = idx > 0 ? GUIDE_CATEGORIES[idx - 1] : null;
  const next = idx < GUIDE_CATEGORIES.length - 1 ? GUIDE_CATEGORIES[idx + 1] : null;
  return /*#__PURE__*/React.createElement("section", {
    className: "pt-28 lg:pt-36 pb-24 min-h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 gap-6 lg:gap-10 mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex col-span-1 items-start justify-center pt-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vlabel"
  }, "KNOWLEDGE BASE / V1")), /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 lg:col-span-11"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label mb-3"
  }, "// GUIDES"), /*#__PURE__*/React.createElement("h1", {
    className: "editorial",
    style: {
      fontSize: 'clamp(3rem, 8vw, 6.5rem)',
      color: '#f0fff5'
    }
  }, "Everything about ", /*#__PURE__*/React.createElement("span", {
    className: "editorial-italic",
    style: {
      color: '#3dff5b'
    }
  }, "PrimalMines.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-2xl",
    style: {
      color: '#b3c7b7',
      fontSize: '1.05rem',
      lineHeight: 1.7
    }
  }, "Clear answers for every system on the server. Pick a chapter on the left."))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 gap-6 lg:gap-10"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "col-span-12 lg:col-span-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileOpen(!mobileOpen),
    className: "lg:hidden btn btn-ghost w-full mb-3 justify-between",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Icon.Menu, {
    className: "w-4 h-4"
  }), "Chapters"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#3dff5b',
      fontSize: '0.72rem'
    }
  }, guide.title)), /*#__PURE__*/React.createElement("div", {
    className: `${mobileOpen ? '' : 'hidden lg:block'} lg:sticky lg:top-28`,
    style: {
      padding: '1.2rem',
      borderRadius: '18px',
      background: 'linear-gradient(180deg, rgba(16,34,24,0.6), rgba(10,26,16,0.6))',
      border: '1px solid rgba(165,182,168,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label mb-3"
  }, "CHAPTERS"), /*#__PURE__*/React.createElement("div", {
    className: "relative mb-3"
  }, /*#__PURE__*/React.createElement("input", {
    className: "pet-search",
    placeholder: "Search...",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement("nav", {
    className: "space-y-1 sidebar-scroll",
    style: {
      maxHeight: '60vh',
      overflowY: 'auto',
      paddingRight: '4px'
    }
  }, filtered.map((cat, i) => /*#__PURE__*/React.createElement("button", {
    key: cat.id,
    onClick: () => {
      setActive(cat.id);
      setMobileOpen(false);
    },
    className: `chapter-btn ${cat.id === active ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "chapter-num"
  }, String(GUIDE_CATEGORIES.findIndex(c => c.id === cat.id) + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "chapter-name"
  }, cat.name)))))), /*#__PURE__*/React.createElement("main", {
    className: "col-span-12 lg:col-span-9",
    style: {
      padding: '2.5rem 2rem',
      borderRadius: '24px',
      background: 'linear-gradient(180deg, rgba(16,34,24,0.55), rgba(10,26,16,0.55))',
      border: '1px solid rgba(165,182,168,0.16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label"
  }, "CHAPTER ", String(idx + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '1px',
      background: 'rgba(61,255,91,0.25)'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    className: "editorial",
    style: {
      fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
      color: '#f0fff5'
    }
  }, guide.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 max-w-2xl",
    style: {
      color: '#b3c7b7',
      fontSize: '1.1rem',
      lineHeight: 1.65,
      fontFamily: 'Instrument Serif, Georgia, serif',
      fontStyle: 'italic'
    }
  }, guide.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      margin: '2rem 0',
      background: 'linear-gradient(90deg, rgba(61,255,91,0.4), transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "gprose"
  }, guide.sections.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h3", null, s.h), s.body))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 pt-6 flex flex-col sm:flex-row gap-3 justify-between",
    style: {
      borderTop: '1px solid rgba(165,182,168,0.2)'
    }
  }, prev ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(prev.id),
    className: "group",
    style: {
      flex: 1,
      textAlign: 'left',
      padding: '1rem 1.25rem',
      border: '1px solid rgba(165,182,168,0.2)',
      borderRadius: '14px',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all .2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'rgba(61,255,91,0.5)';
      e.currentTarget.style.background = 'rgba(61,255,91,0.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'rgba(165,182,168,0.2)';
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement(Icon.Arrow, {
    className: "w-4 h-4 rotate-180",
    style: {
      color: '#3dff5b'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      color: '#a5b6a8'
    }
  }, "PREV CHAPTER"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#f0fff5',
      fontWeight: 600,
      marginTop: '2px'
    }
  }, prev.name))) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), next ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(next.id),
    style: {
      flex: 1,
      textAlign: 'right',
      padding: '1rem 1.25rem',
      border: '1px solid rgba(165,182,168,0.2)',
      borderRadius: '14px',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all .2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      justifyContent: 'flex-end'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'rgba(61,255,91,0.5)';
      e.currentTarget.style.background = 'rgba(61,255,91,0.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'rgba(165,182,168,0.2)';
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      color: '#a5b6a8'
    }
  }, "NEXT CHAPTER"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#f0fff5',
      fontWeight: 600,
      marginTop: '2px'
    }
  }, next.name)), /*#__PURE__*/React.createElement(Icon.Arrow, {
    className: "w-4 h-4",
    style: {
      color: '#3dff5b'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }))))));
}

/* ============================== APP ============================== */
function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setW(Math.max(0, Math.min(1, scrolled)) * 100);
    };
    window.addEventListener('scroll', fn);
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "progress",
    style: {
      width: `${w}%`
    }
  });
}
function App() {
  const [page, setPage] = useState('home');
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'guides') setPage('guides');
  }, []);
  const nav = p => {
    setPage(p);
    window.history.replaceState(null, '', p === 'home' ? '#' : '#guides');
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, {
      threshold: 0.12
    });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [page]);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen"
  }, /*#__PURE__*/React.createElement(ScrollProgress, null), /*#__PURE__*/React.createElement(NavBar, {
    onNavigate: nav,
    page: page
  }), page === 'home' && /*#__PURE__*/React.createElement(Home, {
    onNavigate: nav
  }), page === 'guides' && /*#__PURE__*/React.createElement(Guides, {
    onNavigate: nav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: nav
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));