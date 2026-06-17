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
  name: 'Mining and Fortune',
  icon: 'Pickaxe'
}, {
  id: 'levels-xp',
  name: 'Levels and XP',
  icon: 'Bolt'
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
  name: 'Bosses',
  icon: 'Trophy'
}, {
  id: 'quests',
  name: 'Quests',
  icon: 'Book'
}, {
  id: 'mining-events',
  name: 'Mining Events',
  icon: 'Sparkle'
}, {
  id: 'skills',
  name: 'Skills',
  icon: 'Star'
}, {
  id: 'daily-rewards',
  name: 'Daily Rewards',
  icon: 'Sparkle'
}, {
  id: 'economy',
  name: 'Economy and Cash Notes',
  icon: 'Gem'
}, {
  id: 'stash',
  name: 'Stash',
  icon: 'Cube'
}, {
  id: 'keys-shop',
  name: 'Keys Shop',
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
  name: 'Tags, Prefix and Glow',
  icon: 'Wand'
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
  ability: "No active ability.",
  stats: ["+4 max health"]
}, {
  name: "Rat",
  rarity: "Common",
  ability: "Grants Speed II.",
  stats: []
}, {
  name: "Turtle",
  rarity: "Common",
  ability: "Grants Resistance VI. Drawback Slowness IV.",
  stats: []
}, {
  name: "Lizard",
  rarity: "Common",
  ability: "Grants Night Vision II.",
  stats: []
}, {
  name: "Snail",
  rarity: "Common",
  ability: "No active ability.",
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
  ability: "No active ability.",
  stats: ["+0.2 attack speed"]
}, {
  name: "Bee",
  rarity: "Common",
  ability: "5% chance to gain Regeneration for 3 seconds when hit.",
  stats: []
}, {
  name: "Pebble Golem",
  rarity: "Common",
  ability: "Grants Resistance when standing still for 5 seconds.",
  stats: ["+2 armor"]
}, {
  name: "Moth",
  rarity: "Common",
  ability: "Outlines souls of nearby entities within 20 blocks.",
  stats: []
}, {
  name: "Duckling",
  rarity: "Common",
  ability: "Grants Slow Falling II.",
  stats: []
}, {
  name: "Porcupine",
  rarity: "Common",
  ability: "30% chance to ignite attackers for 2 seconds.",
  stats: ["+1 armor toughness"]
}, {
  name: "Caterpillar",
  rarity: "Common",
  ability: "15% chance on being hit to gain Saturation for 4 seconds.",
  stats: []
}, {
  name: "Hermit Crab",
  rarity: "Common",
  ability: "Grants Resistance when standing still for 4 seconds.",
  stats: ["+1 armor"]
}, {
  name: "Golem",
  rarity: "Uncommon",
  ability: "Grants Resistance III. Drawback Slowness III.",
  stats: ["+20 max health"]
}, {
  name: "Mutt",
  rarity: "Uncommon",
  ability: "No active ability.",
  stats: ["+1 attack damage"]
}, {
  name: "Hamster",
  rarity: "Uncommon",
  ability: "No active ability.",
  stats: ["+5% movement speed"]
}, {
  name: "Strider",
  rarity: "Uncommon",
  ability: "Fire immunity. Regenerates health while near lava.",
  stats: []
}, {
  name: "Arctic Fox",
  rarity: "Uncommon",
  ability: "15% chance to deep freeze enemies on hit for 3 seconds.",
  stats: ["+1 attack damage"]
}, {
  name: "Honey Pot",
  rarity: "Uncommon",
  ability: "10% chance on being hit to gain Saturation for 5 seconds.",
  stats: []
}, {
  name: "Alert Dog",
  rarity: "Uncommon",
  ability: "While sneaking growls when another player enters a 10 block radius.",
  stats: []
}, {
  name: "Hedgehog",
  rarity: "Uncommon",
  ability: "Slows attackers in retaliation for 3 seconds.",
  stats: ["+1 armor toughness"]
}, {
  name: "Baby Goat",
  rarity: "Uncommon",
  ability: "15% chance to launch enemies skyward on hit.",
  stats: ["+1 attack damage"]
}, {
  name: "Ferret",
  rarity: "Uncommon",
  ability: "Bonus Speed while sprinting.",
  stats: ["+3% movement speed"]
}, {
  name: "Flamingo",
  rarity: "Uncommon",
  ability: "Regenerates health while standing in water.",
  stats: []
}, {
  name: "Meerkat",
  rarity: "Uncommon",
  ability: "Warns you when hostile mobs come within 12 blocks while sneaking.",
  stats: []
}, {
  name: "Mongoose",
  rarity: "Uncommon",
  ability: "Grants immunity to Poison.",
  stats: []
}, {
  name: "Lynx",
  rarity: "Uncommon",
  ability: "Bonus Speed while sneaking.",
  stats: ["+2% movement speed"]
}, {
  name: "Axolotl",
  rarity: "Uncommon",
  ability: "Regenerates health in water. Grants Water Breathing II.",
  stats: []
}, {
  name: "Platypus",
  rarity: "Uncommon",
  ability: "20% chance to poison enemies on hit for 4 seconds.",
  stats: []
}, {
  name: "Panda Cub",
  rarity: "Uncommon",
  ability: "Heals you when no one is attacking.",
  stats: ["+4 max health"]
}, {
  name: "Armadillo",
  rarity: "Uncommon",
  ability: "Curls up when hit. Resistance II for 2 seconds.",
  stats: ["+2 armor"]
}, {
  name: "Skeleton",
  rarity: "Rare",
  ability: "25% chance to fire a double arrow.",
  stats: []
}, {
  name: "Tiger",
  rarity: "Rare",
  ability: "Grants Strength II and Speed II.",
  stats: ["+6 max health"]
}, {
  name: "The Third Eye",
  rarity: "Rare",
  ability: "Grants Night Vision II. Outlines souls within 30 blocks.",
  stats: []
}, {
  name: "Husk",
  rarity: "Rare",
  ability: "Applies Anti Heal to enemies for 10 seconds.",
  stats: ["+5 max health"]
}, {
  name: "Spring Coil",
  rarity: "Rare",
  ability: "No active ability.",
  stats: ["+1.0 step height"]
}, {
  name: "Thimble",
  rarity: "Rare",
  ability: "5% chance to reflect incoming projectiles.",
  stats: ["+2 armor toughness"]
}, {
  name: "Blaze",
  rarity: "Rare",
  ability: "20% chance to ignite enemies on hit for 3 seconds.",
  stats: ["+15% movement speed"]
}, {
  name: "Tortoise",
  rarity: "Rare",
  ability: "Resistance while standing still for 5 seconds. Drawback Slowness III.",
  stats: ["+6 armor", "+2 armor toughness"]
}, {
  name: "Boar",
  rarity: "Rare",
  ability: "Charge attacks while sprinting deal +4 bonus damage.",
  stats: ["+4 max health", "+2 attack damage"]
}, {
  name: "Pangolin",
  rarity: "Rare",
  ability: "20% chance to reflect incoming projectiles.",
  stats: ["+2 armor toughness"]
}, {
  name: "Hyena",
  rarity: "Rare",
  ability: "+4 bonus damage to enemies below 35% HP.",
  stats: ["+1.5 attack damage"]
}, {
  name: "Falcon",
  rarity: "Rare",
  ability: "Grants Strength II.",
  stats: ["+1 attack damage"]
}, {
  name: "Hornet",
  rarity: "Rare",
  ability: "30% chance to poison enemies on hit for 5 seconds.",
  stats: []
}, {
  name: "Komodo Dragon",
  rarity: "Rare",
  ability: "25% chance to poison enemies on hit for 6 seconds.",
  stats: ["+1.5 attack damage"]
}, {
  name: "Mantis",
  rarity: "Rare",
  ability: "No active ability.",
  stats: ["+3 attack damage", "+0.2 attack speed"]
}, {
  name: "Quetzal",
  rarity: "Rare",
  ability: "Grants Slow Falling II. 60% fall damage reduction.",
  stats: []
}, {
  name: "Rhino Beetle",
  rarity: "Rare",
  ability: "Resistance while standing still for 4 seconds.",
  stats: ["+4 armor", "+0.3 knockback resistance"]
}, {
  name: "Scorpion",
  rarity: "Rare",
  ability: "40% chance on fist strikes to poison enemies for 5 seconds.",
  stats: []
}, {
  name: "Silverfish",
  rarity: "Epic",
  ability: "Grants Haste III while held.",
  stats: ["+4 max health"]
}, {
  name: "The Shadow",
  rarity: "Epic",
  ability: "Grants Invisibility II and Speed II.",
  stats: ["-8 max health"]
}, {
  name: "Cactus",
  rarity: "Epic",
  ability: "Prickly aura. Damages enemies within 1.5 blocks.",
  stats: ["+2 armor toughness"]
}, {
  name: "Relic",
  rarity: "Epic",
  ability: "50% chance to deal double damage or no damage.",
  stats: []
}, {
  name: "Tectonic Shard",
  rarity: "Epic",
  ability: "Step up 1.5 blocks. Triggers a Tremor ability.",
  stats: ["+1.5 step height"]
}, {
  name: "Emergency Flare",
  rarity: "Epic",
  ability: "At 2 hearts or below blinds entities within 5 blocks for 3 seconds.",
  stats: []
}, {
  name: "Tax Collector",
  rarity: "Epic",
  ability: "Passively earns 2% of nearby players currency gains within 10 blocks.",
  stats: []
}, {
  name: "Ember Wolf",
  rarity: "Epic",
  ability: "Fire immunity. 35% chance to ignite attackers for 4 seconds.",
  stats: ["+6 max health", "+2 attack damage"]
}, {
  name: "Storm Hawk",
  rarity: "Epic",
  ability: "12% chance to call lightning on hit.",
  stats: ["+3 attack damage"]
}, {
  name: "Lava Salamander",
  rarity: "Epic",
  ability: "Fire immunity. Regenerates health while near lava.",
  stats: []
}, {
  name: "Blood Bat",
  rarity: "Epic",
  ability: "10% chance for lifesteal on hit.",
  stats: ["+0.3 attack speed"]
}, {
  name: "Mud Golem",
  rarity: "Epic",
  ability: "Resistance when standing still for 6 seconds. Drawback Slowness III.",
  stats: ["+8 armor", "+3 armor toughness"]
}, {
  name: "Thunder Boar",
  rarity: "Epic",
  ability: "Charge attack deals +6 bonus damage. 8% chance to call lightning.",
  stats: ["+3 attack damage", "+6 max health"]
}, {
  name: "Jungle Panther",
  rarity: "Epic",
  ability: "Backstab. +5 damage when attacking from behind.",
  stats: ["+2 attack damage", "+4% movement speed"]
}, {
  name: "Crystal Turtle",
  rarity: "Epic",
  ability: "Resistance III at low HP for 4 seconds.",
  stats: ["+5 armor", "+8 max health"]
}, {
  name: "Plague Rat",
  rarity: "Epic",
  ability: "Infection aura within 3.5 blocks. Wither I.",
  stats: []
}, {
  name: "Shadow Crow",
  rarity: "Epic",
  ability: "Invisible for 3 seconds after killing an enemy.",
  stats: ["+4% movement speed"]
}, {
  name: "Spore Mushroom",
  rarity: "Epic",
  ability: "Prickly aura within 2.5 blocks. Infection aura within 2 blocks.",
  stats: []
}, {
  name: "Razor Mantis",
  rarity: "Epic",
  ability: "Speed boost after each kill for 5 seconds.",
  stats: ["+3 attack damage", "+0.3 attack speed"]
}, {
  name: "Iron Colossus",
  rarity: "Epic",
  ability: "15% chance to reflect projectiles. Drawback Slowness III.",
  stats: ["+10 armor", "+4 armor toughness"]
}, {
  name: "Piglin Brute",
  rarity: "Legendary",
  ability: "Grants Strength III.",
  stats: ["+10 max health", "+0.5 attack speed"]
}, {
  name: "Frost Spirit",
  rarity: "Legendary",
  ability: "Slows enemies within 3 block aura at amplifier II.",
  stats: ["+4 armor toughness"]
}, {
  name: "Void Eye",
  rarity: "Legendary",
  ability: "Grants Night Vision II and Blink. 60 tick teleport.",
  stats: []
}, {
  name: "The Echo",
  rarity: "Legendary",
  ability: "10% chance to deal a duplicate double tap attack.",
  stats: []
}, {
  name: "Obsidian Golem",
  rarity: "Legendary",
  ability: "Fire immunity. 25% chance to ignite attackers. Drawback -5% movement speed.",
  stats: ["+10 armor"]
}, {
  name: "Vampire",
  rarity: "Legendary",
  ability: "5% chance for lifesteal on hit.",
  stats: ["+0.1 attack speed"]
}, {
  name: "King Midas",
  rarity: "Legendary",
  ability: "10% chance for any mining currency earned to be doubled.",
  stats: []
}, {
  name: "Deep Roots",
  rarity: "Legendary",
  ability: "Stand still 3 seconds to gain Resistance II and Regeneration I.",
  stats: []
}, {
  name: "Iron Titan",
  rarity: "Legendary",
  ability: "Resistance when standing still for 6 seconds. Drawback Slowness IV.",
  stats: ["+12 armor", "+6 armor toughness", "+6 attack damage"]
}, {
  name: "Time Warden",
  rarity: "Legendary",
  ability: "Every 2 minutes health is rewound to what it was 10 seconds ago.",
  stats: []
}, {
  name: "Void Leech",
  rarity: "Legendary",
  ability: "15% chance for lifesteal. Brief invisibility after kills.",
  stats: ["+4 attack damage"]
}, {
  name: "Storm Drake",
  rarity: "Legendary",
  ability: "20% chance to call lightning. 15% chance to ignite for 4 seconds.",
  stats: ["+5 attack damage"]
}, {
  name: "Galactic Bear",
  rarity: "Legendary",
  ability: "Berserk. Strength III at 50% HP or lower.",
  stats: ["+10 max health", "+4 attack damage"]
}, {
  name: "Titan Crab",
  rarity: "Legendary",
  ability: "Resistance when standing still for 5 seconds. Drawback Slowness III.",
  stats: ["+10 armor", "+5 armor toughness", "+0.4 knockback resistance"]
}, {
  name: "Eclipse Dragon",
  rarity: "Legendary",
  ability: "Night Vision II. Invisible for 4 seconds after kills.",
  stats: ["+4 attack damage"]
}, {
  name: "Frost Wyrm",
  rarity: "Legendary",
  ability: "30% chance to deep freeze enemies on hit for 5 seconds. Slow aura within 3 blocks.",
  stats: ["+4 attack damage"]
}, {
  name: "Gravity Hound",
  rarity: "Legendary",
  ability: "Pulls enemies within 5 blocks toward you.",
  stats: ["+3 attack damage", "+5% movement speed"]
}, {
  name: "Ancient Tortoise",
  rarity: "Legendary",
  ability: "Resistance when standing still for 6 seconds. Drawback Slowness IV.",
  stats: ["+14 armor", "+6 armor toughness", "+12 max health"]
}, {
  name: "Nether Hellhound",
  rarity: "Legendary",
  ability: "Fire immunity. 30% chance to ignite enemies for 4 seconds. Slow aura within 3 blocks.",
  stats: ["+8 max health", "+4 attack damage"]
}, {
  name: "Businessman",
  rarity: "Mythic",
  ability: "Doubles all coins earned.",
  stats: []
}, {
  name: "Anvil",
  rarity: "Mythic",
  ability: "Massive damage. Drawback cannot jump at all.",
  stats: ["+10 attack damage", "Jump strength 0"]
}, {
  name: "Chronos",
  rarity: "Mythic",
  ability: "Every 2 minutes restores health to what it was 10 seconds ago.",
  stats: []
}, {
  name: "Heavyweight Champion",
  rarity: "Mythic",
  ability: "Drawback cannot sprint.",
  stats: ["+20 max health", "+5 attack damage"]
}, {
  name: "Ghost",
  rarity: "Mythic",
  ability: "Sneak for 5 continuous seconds to become invisible for 10 seconds. 30 second cooldown.",
  stats: []
}, {
  name: "Void Serpent",
  rarity: "Mythic",
  ability: "25% chance to double tap attack. Invisibility for 2.5 seconds after kill.",
  stats: ["+5 attack damage"]
}, {
  name: "Dread Reaper",
  rarity: "Mythic",
  ability: "Strength II for 10 seconds after each kill.",
  stats: ["+4 attack damage"]
}, {
  name: "Soul Harvester",
  rarity: "Mythic",
  ability: "12% chance for lifesteal. Invisibility for 3 seconds after kills.",
  stats: ["+4 attack damage"]
}, {
  name: "Chaos Imp",
  rarity: "Mythic",
  ability: "50% double or nothing damage and Blink teleport.",
  stats: []
}, {
  name: "Dark Matter Cat",
  rarity: "Mythic",
  ability: "Ghost phase invisibility after sneaking. 20% double tap attack.",
  stats: ["+8% movement speed"]
}, {
  name: "Arcane Hydra",
  rarity: "Mythic",
  ability: "40% double or nothing damage. 8% lifesteal.",
  stats: ["+8 max health", "+3 attack damage"]
}, {
  name: "Nightmare Stallion",
  rarity: "Mythic",
  ability: "Ghost invisibility after sneaking. Speed III boost while sprinting for 2 seconds.",
  stats: ["+12% movement speed"]
}, {
  name: "Eldritch Horror",
  rarity: "Mythic",
  ability: "Anti Heal applied to enemies. Infection aura within 4 blocks at Wither II.",
  stats: ["+5 attack damage", "+6 max health"]
}, {
  name: "Abomination",
  rarity: "Mythic",
  ability: "Berserk. Strength IV at 40% HP or lower.",
  stats: ["+12 max health", "+4 attack damage"]
}, {
  name: "Cosmic Dragon",
  rarity: "Mythic",
  ability: "20% chance to call lightning. 20% chance to ignite for 5 seconds. 8% lifesteal.",
  stats: ["+7 attack damage", "+10 max health"]
}, {
  name: "81hp_",
  rarity: "Special",
  ability: "Regeneration III. Smite at low HP. Last Stand at low HP. Fortune Fiesta chance for 2x drops and money while mining.",
  stats: ["+30 max health", "+20 attack damage", "+2.0 attack speed", "+30% movement speed"]
}, {
  name: "Kasane Teto",
  rarity: "Special",
  ability: "Soulbound Bread for fall and knockback immunity. Drill Breaker dash with stun. Territory heal.",
  stats: ["+40 max health", "+40% movement speed", "+12 attack damage", "+5 armor toughness", "+1.0 knockback resistance"]
}, {
  name: "MECHA-PET 9000",
  rarity: "Special",
  ability: "Grants Haste IV and Rocket Jump boost at 1.8x.",
  stats: ["+8 max health"]
}, {
  name: "Omega Slime",
  rarity: "Special",
  ability: "Resistance when standing still for 5 seconds.",
  stats: ["+8 armor", "+1.0 knockback resistance", "+10 max health"]
}, {
  name: "Glitch Fox",
  rarity: "Special",
  ability: "Blink teleport and Ghost invisibility while sneaking.",
  stats: ["+6% movement speed"]
}, {
  name: "Neon Jellyfish",
  rarity: "Special",
  ability: "Outlines souls within 25 blocks. Slow aura within 3 blocks.",
  stats: []
}, {
  name: "Cursed Doll",
  rarity: "Special",
  ability: "Retaliation slow on attackers for 4 seconds at amplifier III. Anti Heal for 5 seconds.",
  stats: []
}, {
  name: "Prism Cat",
  rarity: "Special",
  ability: "Speed II. Luck II. Outlines souls within 15 blocks.",
  stats: ["+5% movement speed"]
}, {
  name: "Ancient Beetle",
  rarity: "Special",
  ability: "Resistance when standing still for 6 seconds. 25% chance to reflect projectiles.",
  stats: ["+10 armor", "+0.5 knockback resistance"]
}, {
  name: "Pixel Dragon",
  rarity: "Special",
  ability: "30% chance to double tap attack. Ghost invisibility phase.",
  stats: ["+5 attack damage"]
}, {
  name: "Warp Bunny",
  rarity: "Special",
  ability: "20% chance to swap positions with attacker on being hit.",
  stats: ["+8% movement speed"]
}, {
  name: "Pollum",
  rarity: "Special",
  ability: "30% chance to poison enemies on hit for 5 seconds. Infection aura within 3 blocks. Anti Heal for 6 seconds.",
  stats: ["+6 max health"]
}];
const RARITY_ORDER = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic', 'Special'];
const BOSSES = [{
  name: "Pollum",
  drops: [{
    pct: "80%",
    item: "1x Pollum Shard",
    tag: "common"
  }, {
    pct: "45%",
    item: "3x Pollum Shard",
    tag: "rare"
  }, {
    pct: "60%",
    item: "$5,000",
    tag: "uncommon"
  }, {
    pct: "10%",
    item: "1x Pollum's Axe",
    tag: "leg"
  }]
}, {
  name: "Viper",
  drops: [{
    pct: "80%",
    item: "1x Viper Shard",
    tag: "common"
  }, {
    pct: "45%",
    item: "3x Viper Shard",
    tag: "rare"
  }, {
    pct: "60%",
    item: "$7,500",
    tag: "uncommon"
  }, {
    pct: "10%",
    item: "1x Levelup Voucher",
    tag: "leg"
  }]
}, {
  name: "Tinc",
  drops: [{
    pct: "70%",
    item: "1x Tinc Shard",
    tag: "common"
  }, {
    pct: "45%",
    item: "2x Tinc Shard",
    tag: "rare"
  }, {
    pct: "60%",
    item: "$5,000",
    tag: "uncommon"
  }, {
    pct: "5%",
    item: "1x Tinc's Sword",
    tag: "leg"
  }, {
    pct: "5%",
    item: "1x Tinc's Scythe",
    tag: "leg"
  }]
}, {
  name: "Xenon",
  drops: [{
    pct: "80%",
    item: "1x Xenon Shard",
    tag: "common"
  }, {
    pct: "45%",
    item: "3x Xenon Shard",
    tag: "rare"
  }, {
    pct: "60%",
    item: "$12,000",
    tag: "uncommon"
  }, {
    pct: "10%",
    item: "1x Xenon's Scepter",
    tag: "leg"
  }]
}, {
  name: "Adam",
  drops: [{
    pct: "70%",
    item: "1x Adam Shard",
    tag: "common"
  }, {
    pct: "45%",
    item: "2x Adam Shard",
    tag: "rare"
  }, {
    pct: "60%",
    item: "$10,000",
    tag: "uncommon"
  }, {
    pct: "5%",
    item: "1x Adam's Sword",
    tag: "leg"
  }, {
    pct: "5%",
    item: "1x Adam's Axe",
    tag: "leg"
  }]
}, {
  name: "Malacher",
  drops: [{
    pct: "70%",
    item: "1x Malacher Shard",
    tag: "common"
  }, {
    pct: "45%",
    item: "2x Malacher Shard",
    tag: "rare"
  }, {
    pct: "60%",
    item: "$15,000",
    tag: "uncommon"
  }, {
    pct: "5%",
    item: "1x Malacher's Scythe",
    tag: "leg"
  }]
}];
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
function BossTerminal() {
  return /*#__PURE__*/React.createElement("div", null, BOSSES.map((b, bi) => /*#__PURE__*/React.createElement("div", {
    key: b.name,
    className: "terminal mb-5"
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
  }, "primalmines @ loot ~ boss/", b.name.toLowerCase())), /*#__PURE__*/React.createElement("div", {
    className: "terminal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term-cmd"
  }, "$ ./roll-drops --boss=", b.name.toLowerCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '0.4rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#6dff85',
      fontSize: '1.5rem',
      fontFamily: 'Bricolage Grotesque, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      marginBottom: '0.6rem'
    }
  }, b.name), b.drops.map((d, di) => /*#__PURE__*/React.createElement("div", {
    key: di,
    className: "term-line",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "term-pct"
  }, d.pct), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, d.item), /*#__PURE__*/React.createElement("span", {
    className: `term-tag-${d.tag}`,
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, d.tag === 'leg' ? 'legendary' : d.tag)))))));
}
const GUIDES = {
  'getting-started': {
    title: 'Getting Started',
    intro: 'Everything you need to log in and start mining.',
    sections: [{
      h: 'How to Join',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "PrimalMines runs on Paper for Minecraft Java Edition. You can connect from any recent Java version that the server supports."), /*#__PURE__*/React.createElement("p", null, "Open Minecraft. Click Multiplayer. Add Server. Paste the IP below and you are in."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("code", null, "play.primalmines.net")), /*#__PURE__*/React.createElement("p", null, "Keep Inventory is on so you never lose your loot when you die."))
    }, {
      h: 'Your First Hour',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Start with the Overworld mine. Break blocks to earn money and XP at the same time. Money lets you afford better pickaxes. XP raises your level which unlocks prestige later on."), /*#__PURE__*/React.createElement("p", null, "Open your inventory and check the bottom bar. Your XP bar fills as you mine. Your level number sits next to it. The longer you mine the faster you progress because boosters and rank perks stack on top of your base earnings."), /*#__PURE__*/React.createElement("p", null, "Use ", /*#__PURE__*/React.createElement("code", null, "/menu"), " to open the main menu. Use ", /*#__PURE__*/React.createElement("code", null, "/help"), " any time you need a refresher."))
    }, {
      h: 'Hub and Spawn',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Spawn is the hub. From there you can reach mines, shops and the NPCs that hand out quests. Talk to anyone glowing."), /*#__PURE__*/React.createElement("p", null, "If you ever get lost type ", /*#__PURE__*/React.createElement("code", null, "/spawn"), "."))
    }, {
      h: 'The Main Menu',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Type ", /*#__PURE__*/React.createElement("code", null, "/menu"), " or ", /*#__PURE__*/React.createElement("code", null, "/m"), " to open the Main Menu. It is the easiest way to reach every system on the server without remembering individual commands. From the menu you can jump straight into Daily Rewards, Stats, Warps, Ranks, the Store, your Stash, Prestige, Skills, Compressors, Boosters, the Pet Shop, the Keys Shop, Chat Colors, Tags, Glow, Help and Options."), /*#__PURE__*/React.createElement("p", null, "Submenus that you open from the Main Menu pop back to the menu when you close them. When in doubt type ", /*#__PURE__*/React.createElement("code", null, "/menu"), "."))
    }]
  },
  'mining-fortune': {
    title: 'Mining and Fortune',
    intro: 'Fortune is the heart of progression. Here is how it works.',
    sections: [{
      h: 'How Fortune Works',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Every block you break rolls Fortune. The higher your Fortune number the more blocks drop per break. PrimalMines uses a custom Fortune plugin that handles Fortune 1000 and beyond so the late game still feels rewarding."), /*#__PURE__*/React.createElement("p", null, "Your pickaxe shows its Fortune level in the lore. Top tier mining picks reach Fortune 20."))
    }, {
      h: 'Autocompression',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Your inventory would fill up instantly without compression. PrimalMines compresses your drops automatically once you unlock the perk."), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "From"), /*#__PURE__*/React.createElement("th", null, "To"), /*#__PURE__*/React.createElement("th", null, "Ratio"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Normal"), /*#__PURE__*/React.createElement("td", null, "Enchanted"), /*#__PURE__*/React.createElement("td", null, "64 to 1")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Enchanted"), /*#__PURE__*/React.createElement("td", null, "Super Enchanted"), /*#__PURE__*/React.createElement("td", null, "32 to 1")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Super Enchanted"), /*#__PURE__*/React.createElement("td", null, "Ultra Enchanted"), /*#__PURE__*/React.createElement("td", null, "32 to 1")))), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/autocompress"), " unlocked at Gladiator rank or VIP"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/supercompress"), " unlocked at Paragon rank or Aethereal"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/ultracompress"), " Primal rank only")))
    }, {
      h: 'Boosters',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Boosters multiply your earnings or your XP for a limited time. You can stack them with your prestige multiplier and your rank perks."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Block boosters"), " increase how many blocks you collect per break. They run for 30 or 40 minutes depending on the booster."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "XP boosters"), " do the same for level XP.")), /*#__PURE__*/React.createElement("p", null, "Find boosters as rewards from crates, quests, the daily menu and the store. Paragon rank and above can activate server wide boosters at no cost on a cooldown."))
    }]
  },
  'levels-xp': {
    title: 'Levels and XP',
    intro: 'Your level decides when you can prestige and unlocks long term goals.',
    sections: [{
      h: 'Base Rate',
      body: /*#__PURE__*/React.createElement("p", null, "Every block you break gives 1 XP. That XP is multiplied by your XP multiplier which starts at 1 and goes up by 1 every time you prestige. Boosters multiply on top of that.")
    }, {
      h: 'Where it Shows',
      body: /*#__PURE__*/React.createElement("p", null, "Your Minecraft XP bar is repurposed to show your PrimalMines level. The number is your level. The bar fills as you progress toward the next one.")
    }, {
      h: 'Prestige Threshold',
      body: /*#__PURE__*/React.createElement("p", null, "First prestige requires level 100. After that the requirement climbs by 100 every prestige. So your second prestige needs level 200, your third needs level 300 and so on.")
    }]
  },
  'prestige': {
    title: 'Prestige',
    intro: 'Prestige is how you reset to push further.',
    sections: [{
      h: 'How to Prestige',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Open the prestige menu with ", /*#__PURE__*/React.createElement("code", null, "/prestige"), " or ", /*#__PURE__*/React.createElement("code", null, "/rebirth"), ". The GUI lists your current requirements with a green checkmark next to anything you already have."), /*#__PURE__*/React.createElement("p", null, "You need the max gear of your current dimension plus the level threshold. The level threshold starts at 100 and grows by 100 every prestige you complete."))
    }, {
      h: 'What You Lose',
      body: /*#__PURE__*/React.createElement("p", null, "You lose the max gear of whatever prestige dimension you are currently in. Armor, sword and pickaxe are all consumed by the ritual. You earn it back with a permanent multiplier boost so every climb is faster than the last.")
    }, {
      h: 'What You Gain',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "+1 block multiplier permanently"), /*#__PURE__*/React.createElement("li", null, "+1 XP multiplier permanently"), /*#__PURE__*/React.createElement("li", null, "1 Prestige Coin"), /*#__PURE__*/React.createElement("li", null, "Access to the next prestige dimension"), /*#__PURE__*/React.createElement("li", null, "A server broadcast for players who have the option enabled"))
    }, {
      h: 'The Altar',
      body: /*#__PURE__*/React.createElement("p", null, "There is a physical altar at the end of the Abyss mine line. An NPC there gives an ominous speech before the ritual. The actual prestige still happens through the command but the altar makes the moment feel earned.")
    }]
  },
  'pets': {
    title: 'Pets',
    intro: 'Pets follow you around the server and boost your stats passively.',
    sections: [{
      h: 'How Pets Work',
      body: /*#__PURE__*/React.createElement("p", null, "You can equip one pet at a time. The pet floats next to you wherever you go. While equipped its ability and its passive stats are active. Some abilities trigger on hit. Others run constantly. A few only activate on certain actions like sneaking or standing still.")
    }, {
      h: 'Rarities',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common"), /*#__PURE__*/React.createElement("li", null, "Uncommon"), /*#__PURE__*/React.createElement("li", null, "Rare"), /*#__PURE__*/React.createElement("li", null, "Epic"), /*#__PURE__*/React.createElement("li", null, "Legendary"), /*#__PURE__*/React.createElement("li", null, "Mythic"), /*#__PURE__*/React.createElement("li", null, "Special"))
    }, {
      h: 'How to Get Pets',
      body: /*#__PURE__*/React.createElement("p", null, "Pets come from crates, quests, mob drops and the pet shop. Boss pets drop at a small percent chance from the matching boss.")
    }, {
      h: 'Every Pet',
      body: /*#__PURE__*/React.createElement(PetRoster, null)
    }]
  },
  'bosses': {
    title: 'Bosses',
    intro: 'Every boss has its own loot table. Listed below in full.',
    sections: [{
      h: 'How Drops Work',
      body: /*#__PURE__*/React.createElement("p", null, "When a boss dies it rolls its drops in order from top to bottom. The first chance that lands hands you the drop and the roll stops. Bosses must be killed many times so do not stop after one attempt.")
    }, {
      h: 'Loot Tables',
      body: /*#__PURE__*/React.createElement(BossTerminal, null)
    }]
  },
  'quests': {
    title: 'Quests',
    intro: 'Story driven quests with NPC dialogue, choices and named rewards.',
    sections: [{
      h: 'How Dialogue Works',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "NPC dialogue runs in your actionbar so the chat never floods. Each line plays a soft note block bell sound. Choice menus open as small chest GUIs so you can click your answer."), /*#__PURE__*/React.createElement("p", null, "NPCs are shown or hidden per player based on your current quest stage. You always see the NPC that matters for your stage."))
    }, {
      h: 'The Dragon Quest',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The Dragon Quest is the main rank unlock chain on the server. It is given by Dragon13215 the wandering NPC who makes the rank vouchers himself. He is terse and a little grumpy. He talks like a guy who would rather be somewhere else. The whole questline runs through him and unlocks every free rank as you progress."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Stage 0"), ". First contact. Dragon asks you to bring him 5 Super Enchanted Endstone. He will not say why."), /*#__PURE__*/React.createElement("blockquote", null, "Don't ask questions. I'll explain when you're back."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Stage 1"), ". Hand in the endstone. He reveals he makes rank vouchers and hands you Shopping List 1."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Stage 2 Catastro List"), ". Bring 32 purpur, voucher paper, a rank pen and $35,000. Reward is the Dragonsword diamond sword plus the Catastro voucher unlocked in his shop."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Stage 3 Gladiator tease"), ". At level 50 or higher he mentions he found something weird down in the Deep Dark. Eggs."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Stage 4 to 5 Gladiator List"), ". Bring 32 glowstone, a rank pen, voucher paper and dye. Unlocks the Gladiator voucher in his shop."), /*#__PURE__*/React.createElement("blockquote", null, "Something about these eggs just feels.. off. In a good way I think."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Stage 6 to 8 Sentinel List"), ". At level 100 or 200 prestige XP he tells you about more eggs. Different ones. Bring 3 Deep Dark Eggs, Sentinel dye, a rank pen and voucher paper. Unlocks the Sentinel voucher."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Stage 9 to 11 Paragon List"), ". At level 200 he hands you the last list. Bring an Omega Pickaxe, 2 voucher paper, 2 rank pen, Paragon dye, 32 Primoa Ore and $500,000. Unlocks the Paragon voucher."), /*#__PURE__*/React.createElement("blockquote", null, "You'll probably never need to talk to me again after this. No offence. Come back anyway sometime."), /*#__PURE__*/React.createElement("p", null, "At stage 12 his shop stays open for life so you can revisit and grab anything you missed."))
    }]
  },
  'mining-events': {
    title: 'Mining Events',
    intro: 'Server wide events that drop in on the hour.',
    sections: [{
      h: 'How it Works',
      body: /*#__PURE__*/React.createElement("p", null, "Every hour a random block type is chosen. Players race to mine that block. The first to hit the target count wins the round.")
    }]
  },
  'skills': {
    title: 'Skills',
    intro: 'Five skills track different ways you play and pay you for leveling each one.',
    sections: [{
      h: 'The Skills',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Mining"), " levels as you break blocks"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Combat"), " levels as you kill mobs"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Bosses"), " levels as you defeat bosses"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Experience"), " levels as you gain XP from any source"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Taming"), " levels as you raise pet rarities and unlock pet abilities"))
    }, {
      h: 'Rewards',
      body: /*#__PURE__*/React.createElement("p", null, "Every skill level pays out money and PrimalMines XP. So leveling Skills feeds your prestige threshold and your wallet at once.")
    }]
  },
  'ranks-free': {
    title: 'Free Ranks',
    intro: 'Four ranks you earn through play. They unlock quality of life and progression perks.',
    sections: [{
      h: 'The Ladder',
      body: /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Rank"), /*#__PURE__*/React.createElement("th", null, "Color"), /*#__PURE__*/React.createElement("th", null, "Unlock"), /*#__PURE__*/React.createElement("th", null, "Key Perks"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "Catastro")), /*#__PURE__*/React.createElement("td", null, "Purple"), /*#__PURE__*/React.createElement("td", null, "Default"), /*#__PURE__*/React.createElement("td", null, "Starter rank. Base permissions.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "Gladiator")), /*#__PURE__*/React.createElement("td", null, "Orange"), /*#__PURE__*/React.createElement("td", null, "Dragon Quest Catastro List"), /*#__PURE__*/React.createElement("td", null, "/autocompress, 2 vaults, colored name")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "Sentinel")), /*#__PURE__*/React.createElement("td", null, "Blue"), /*#__PURE__*/React.createElement("td", null, "Dragon Quest Gladiator List"), /*#__PURE__*/React.createElement("td", null, "More vaults, more homes, particle trail")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "Paragon")), /*#__PURE__*/React.createElement("td", null, "Red"), /*#__PURE__*/React.createElement("td", null, "Dragon Quest Sentinel List"), /*#__PURE__*/React.createElement("td", null, "/supercompress, 5 vaults, 4 homes, white chatcolor, booster activation"))))
    }, {
      h: 'What You Do Not Get',
      body: /*#__PURE__*/React.createElement("p", null, "Free ranks never include /fly, /feedall, /healall, /resetmine, /invsee or /ec. Those are paid rank perks. This is intentional so the paid ranks always feel meaningful while the free ranks still cover real progression.")
    }]
  },
  'ranks-paid': {
    title: 'Paid Ranks',
    intro: 'Six tiers each stacking on top of the last.',
    sections: [{
      h: 'The Ladder',
      body: /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Rank"), /*#__PURE__*/React.createElement("th", null, "Key Unique Perks"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "VIP")), /*#__PURE__*/React.createElement("td", null, "/feed, /boop, 5 vaults, 14 tags, /autocompress, yellow and white chatcolors")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "MVP")), /*#__PURE__*/React.createElement("td", null, "/fly, 10 vaults, /sethome, /heal, blue chatcolors plus all VIP")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "Celestial")), /*#__PURE__*/React.createElement("td", null, "/resetmine, /feedall, /healall, 15 vaults, pink chatcolors plus all MVP")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "Aethereal")), /*#__PURE__*/React.createElement("td", null, "/supercompress, 17 vaults, /back, Aethereal chatcolor plus all Celestial")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "Immortal")), /*#__PURE__*/React.createElement("td", null, "/ec, /invsee, /prefix color change, 20 vaults, red chatcolors plus all Aethereal")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, "Primal")), /*#__PURE__*/React.createElement("td", null, "/ultracompress, 50 vaults, /claimboost on a 5 day cooldown, all chatcolors plus all Immortal"))))
    }, {
      h: 'Buying a Rank',
      body: /*#__PURE__*/React.createElement("p", null, "Head to ", /*#__PURE__*/React.createElement("code", null, "store.primalmines.net"), ". Pick the rank. Pay. The rank applies in game within a minute. If anything ever goes wrong open a ticket in the Discord and a staff member will sort it.")
    }]
  },
  'enchants': {
    title: 'Custom Enchants',
    intro: 'Two custom enchants live alongside the vanilla list.',
    sections: [{
      h: 'List',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Monopoly"), " gives more money per block broken. Top mining picks carry it at level 13."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Plunder"), " raises your chance to roll rare boss drops. Stack it on your combat gear before going boss hunting."))
    }]
  },
  'store-info': {
    title: 'Store',
    intro: 'Three categories. Cosmetics, ranks and rank upgrades only.',
    sections: [{
      h: 'Where',
      body: /*#__PURE__*/React.createElement("p", null, "The store lives at ", /*#__PURE__*/React.createElement("code", null, "store.primalmines.net"), ". It runs on Tebex which is the standard hosted checkout for Minecraft servers.")
    }, {
      h: 'What is For Sale',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Ranks"), ". The six paid ranks. VIP through Primal."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Rank Upgrades"), ". Pay the difference to move from your current paid rank up the ladder without rebuying."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Cosmetics"), ". Chat color bundles and tag bundles."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Chat color bundles"), ": Fire with 7 colors. Jungle with 4 colors. Aquatic with 3 colors. Celestial with 7 colors. Neutral with 5 colors."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Tag bundles"), ": VIP Tags Bundle, the Nature bundle, the Dark bundle. Plus individual tags like Sigma, Owner, Grinder, Supporter and Premium."))
    }]
  },
  'commands': {
    title: 'Commands Cheatsheet',
    intro: 'Every player facing command with no permission required.',
    sections: [{
      h: 'Core',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/prestige"), " or ", /*#__PURE__*/React.createElement("code", null, "/rebirth"), " opens the prestige GUI"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/daily"), " opens the daily rewards GUI"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/menu"), " or ", /*#__PURE__*/React.createElement("code", null, "/m"), " opens the main menu"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/store"), " opens the rank store GUI"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/ranks"), " browse every server rank and its perks"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/stats"), " view your stats or another players"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/balance"), " view your balance or another players"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/playtime"), " view your playtime or another players"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/stash"), " claim items that overflowed your inventory"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/convert"), " turn balance into paper money items"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/mineshop"), " open the shop for the mine you are in"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/prefix"), " change your prefix"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/glow"), " toggle your glow effect"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/offhand"), " swap held item to off hand"))
    }, {
      h: 'Help and Info',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/help"), " opens the help GUI"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/?"), " alias for help"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/info"), " server info"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/information"), " server info"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/health"), " check your health or another players"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/staff"), " or ", /*#__PURE__*/React.createElement("code", null, "/apply"), " link to Discord staff applications"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/ip"), " shows the server IP as a clickable link"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/addfavorite"), " clickable prompt to favorite the server"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/ad"), " broadcast a paid rank advertisement"))
    }, {
      h: 'Discord Link',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/link"), " generate a Discord link code"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/unlink"), " remove your Discord link"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/claimreward"), " claim a pending Discord link reward"))
    }, {
      h: 'Warps',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/spawn"), " warp back to the hub"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/overworld"), " warp to the Overworld mines"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/cave"), " warp to the Cave dimension"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/nether"), " warp to the Nether dimension"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/end"), " warp to the End dimension"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/aether"), " warp to the Aether dimension"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/abyss"), " warp to the Abyss dimension"))
    }]
  },
  'daily-rewards': {
    title: 'Daily Rewards',
    intro: 'Free rewards every day. Open the menu with /daily.',
    sections: [{
      h: 'How it Works',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Open the menu with ", /*#__PURE__*/React.createElement("code", null, "/daily"), ". The GUI has three tiers of rewards. Tier one is the crate row that anyone can claim. Tier two is the free rank dailies. Tier three is the paid rank dailies."), /*#__PURE__*/React.createElement("p", null, "Each reward has its own cooldown so you can claim them one at a time as soon as each one resets. The cooldowns do not share. If you own a paid rank you can still claim your free rank tier on top of the paid one."))
    }, {
      h: 'Tier One Crates',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Daily Crate key"), " on a 16 hour cooldown"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Weekly Crate key"), " on a 7 day cooldown"))
    }, {
      h: 'Free Rank Dailies',
      body: /*#__PURE__*/React.createElement("p", null, "Catastro, Gladiator, Sentinel and Paragon each have their own slot in the second tier. You need that rank or higher to claim the slot. Each one resets on its own 16 hour cooldown.")
    }, {
      h: 'Paid Rank Dailies',
      body: /*#__PURE__*/React.createElement("p", null, "VIP, MVP, Celestial, Aethereal, Immortal and Primal each have their own slot in the third tier. Same rule as free ranks. Same 16 hour cooldown per slot. Higher ranks always include the lower ranks slots so a Primal player can claim all six.")
    }, {
      h: 'Primal Bonus Commands',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/claimboost"), " grants one 2x block booster and one 2x XP booster every 5 days"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "/claim"), " grants $20,000 and 2 Chatcolor crate keys every 3 days"))
    }]
  },
  'economy': {
    title: 'Economy and Cash Notes',
    intro: 'Cash lives in your balance. Notes let you carry it.',
    sections: [{
      h: 'Your Balance',
      body: /*#__PURE__*/React.createElement("p", null, "Your money sits in your EssentialsX balance. It is digital. You spend it through shop GUIs, voucher purchases and the prestige altar. Check it with ", /*#__PURE__*/React.createElement("code", null, "/balance"), " or look at the scoreboard.")
    }, {
      h: 'Cash Notes',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Open ", /*#__PURE__*/React.createElement("code", null, "/convert"), " to turn balance into physical paper notes you can hand carry, drop or trade. Pick a denomination: $1,000 or $10,000 or $100,000 or $1,000,000. The matching amount comes off your balance and the note item drops into your inventory."), /*#__PURE__*/React.createElement("p", null, "To cash a note back in just hold the paper item and right click. The note vanishes and the cash returns to your balance instantly."))
    }, {
      h: 'Why You Care',
      body: /*#__PURE__*/React.createElement("p", null, "Cash notes are the main way players trade money without using ", /*#__PURE__*/React.createElement("code", null, "/pay"), ". Drop them in trade chests, hand them across the table, leave them as gifts in chests. The note is the receipt.")
    }]
  },
  'stash': {
    title: 'Stash',
    intro: 'The safety net for any item that could not fit in your inventory.',
    sections: [{
      h: 'How it Fills Up',
      body: /*#__PURE__*/React.createElement("p", null, "When a reward drop, a shop purchase, a quest payout or a pet drop would land in your inventory but you have no free slots the item goes into your Stash instead. You will see an actionbar message telling you to collect it.")
    }, {
      h: 'Claiming Items',
      body: /*#__PURE__*/React.createElement("p", null, "Open ", /*#__PURE__*/React.createElement("code", null, "/stash"), " to see everything that has piled up. The GUI is sized dynamically based on how many items are in there. Click any item to send it to your inventory. If your inventory is still full it tells you on the actionbar and the item stays in the stash.")
    }, {
      h: 'Bulk Pickup',
      body: /*#__PURE__*/React.createElement("p", null, "Type ", /*#__PURE__*/React.createElement("code", null, "/pickupstash"), " to grab everything from the stash at once. Anything that does not fit stays put. This is the fastest way to clear the stash after an AFK mining session.")
    }]
  },
  'keys-shop': {
    title: 'Keys Shop',
    intro: 'Spend in game cash for crate keys. Open with /keys.',
    sections: [{
      h: 'What is For Sale',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The Keys Shop is a cash for keys exchange. Type ", /*#__PURE__*/React.createElement("code", null, "/keys"), " to open it. Stock is fixed and prices are listed on each item."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Dimension keys")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Overworld key $5,000"), /*#__PURE__*/React.createElement("li", null, "Cave key $7,500"), /*#__PURE__*/React.createElement("li", null, "Nether key $10,000"), /*#__PURE__*/React.createElement("li", null, "End key $15,000"), /*#__PURE__*/React.createElement("li", null, "Aether key $20,000")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Free rank keys")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Catastro key $40,000"), /*#__PURE__*/React.createElement("li", null, "Gladiator key $50,000"), /*#__PURE__*/React.createElement("li", null, "Sentinel key $60,000"), /*#__PURE__*/React.createElement("li", null, "Paragon key $70,000")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Themed keys")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Food key $15,000"), /*#__PURE__*/React.createElement("li", null, "Pet key $50,000"), /*#__PURE__*/React.createElement("li", null, "Party key $35,000"), /*#__PURE__*/React.createElement("li", null, "Chatcolor key $750,000")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Pet rarity keys")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Pet key $10,000"), /*#__PURE__*/React.createElement("li", null, "Uncommon Pet key $25,000"), /*#__PURE__*/React.createElement("li", null, "Rare Pet key $50,000"), /*#__PURE__*/React.createElement("li", null, "Epic Pet key $100,000"), /*#__PURE__*/React.createElement("li", null, "Legendary Pet key $250,000"), /*#__PURE__*/React.createElement("li", null, "Mythic Pet key $500,000")))
    }, {
      h: 'Not the Same as the Store',
      body: /*#__PURE__*/React.createElement("p", null, "The Keys Shop is the in game cash for keys exchange. It is not the Tebex store. If you want to buy keys with real money use ", /*#__PURE__*/React.createElement("code", null, "store.primalmines.net"), ". If you want to spend hoarded server cash on key runs use ", /*#__PURE__*/React.createElement("code", null, "/keys"), ".")
    }]
  },
  'leaderboards': {
    title: 'Leaderboards',
    intro: 'Weekly stats that decide the weekly competition.',
    sections: [{
      h: 'The Four Stats',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Blocks Mined"), " counts ores, logs, stone, deepslate and dimensional decoration blocks"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Player Kills"), " counts PvP kills"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Playtime"), " ticks up every 5 minutes for every online player so AFK time counts"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Bosses Killed"), " counts every boss kill across every dimension"))
    }, {
      h: 'Weekly Reset',
      body: /*#__PURE__*/React.createElement("p", null, "The board resets on a schedule with a server wide broadcast. Top spots win the weekly competition reward when the staff runs one.")
    }, {
      h: 'How to Check',
      body: /*#__PURE__*/React.createElement("p", null, "Type ", /*#__PURE__*/React.createElement("code", null, "/leaderboards"), " or warp to the leaderboards NPC at spawn. Your lifetime stats live in ", /*#__PURE__*/React.createElement("code", null, "/stats"), " and are separate from the weekly board.")
    }]
  },
  'settings': {
    title: 'Settings and PvP',
    intro: 'Toggle your personal preferences. Including PvP.',
    sections: [{
      h: 'Opening the Menu',
      body: /*#__PURE__*/React.createElement("p", null, "Type ", /*#__PURE__*/React.createElement("code", null, "/options"), " or ", /*#__PURE__*/React.createElement("code", null, "/settings"), " or ", /*#__PURE__*/React.createElement("code", null, "/setting"), ". The menu uses lime panes for enabled and red panes for disabled. Click any pane to flip it.")
    }, {
      h: 'What You Can Toggle',
      body: /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "PvP"), " on or off. Off makes you immune to other players damage"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "XP gain sounds")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Full inventory warning")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Server broadcasts")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Item drops"), " on death"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "AFK reward messages")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Prestige messages")))
    }, {
      h: 'Settings Stick',
      body: /*#__PURE__*/React.createElement("p", null, "Every toggle saves to your account so your preferences carry across sessions. The settings only affect your own client. Turning off broadcasts mutes them for you. Turning off PvP makes you untouchable to players.")
    }]
  },
  'cosmetics': {
    title: 'Tags, Prefix and Glow',
    intro: 'Show off in chat and in the world.',
    sections: [{
      h: 'Tags',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Tags are colored brackets next to your name in chat and tab. The full list lives in ", /*#__PURE__*/React.createElement("code", null, "/tags"), ". There are two pages broken into themes like Elements, Renegade, Forces and Intensity. Each tag is locked behind its own permission so you unlock them through ranks, store bundles, vouchers or special rewards."), /*#__PURE__*/React.createElement("p", null, "Click any unlocked tag in the menu to equip it. Tags stack on top of your rank prefix and your chatcolor."))
    }, {
      h: 'Custom Prefix Color',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Immortal and Primal rank holders can change the color of their rank prefix. Open ", /*#__PURE__*/React.createElement("code", null, "/prefix"), ". Roughly 26 color options from red through dark purple. Pick one and your rank tag flips to that shade for everyone."), /*#__PURE__*/React.createElement("p", null, "Lower ranks can still see the menu but cannot pick a color. There is a Reset option that puts you back on the default rank color."))
    }, {
      h: 'Glow',
      body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Glow puts a colored outline around your player model so other players can see your silhouette through walls. Each color is tied to a permission you earn through ranks or the store."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Yellow"), " VIP"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Aqua"), " MVP"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Red"), " Immortal"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Green"), " Primal"), /*#__PURE__*/React.createElement("li", null, "Extras for store bundles: white, blue, orange, gray and purple")), /*#__PURE__*/React.createElement("p", null, "Type ", /*#__PURE__*/React.createElement("code", null, "/glow color"), " where color is the one you want. The change is instant. Bare ", /*#__PURE__*/React.createElement("code", null, "/glow"), " opens a small menu shell but most players just type the color directly."))
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
    title: 'Boss Loot',
    body: 'Every boss has its own loot table. Shards, gold and rare legendary gear roll on every kill.'
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
    title: '117 Pets',
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
    body: 'Dark side of the shared map. Prestige altar at the end.'
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
    label: "// COMBAT",
    title: "Bosses drop",
    italic: "loot tables.",
    side: "02 / LOOT",
    blurb: "Six named bosses. Each one rolls its table from top to bottom. The first chance that lands hands you the drop. Sample below. Full tables in the guide."
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
  }, "// 06 BOSSES"), /*#__PURE__*/React.createElement("h3", {
    className: "editorial mt-2",
    style: {
      fontSize: '2.4rem',
      color: '#f0fff5',
      lineHeight: 1
    }
  }, "Pollum. Viper. Tinc.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "editorial-italic",
    style: {
      color: '#3dff5b'
    }
  }, "Xenon. Adam. Malacher.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-5",
    style: {
      color: '#b3c7b7',
      fontSize: '1rem',
      lineHeight: 1.7
    }
  }, "Bring a sword. Bring a friend. The boss rolls each drop tier in order and stops at the first one that hits."), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('guides'),
    className: "btn btn-ghost mt-7",
    style: {
      alignSelf: 'flex-start'
    }
  }, "See all loot tables ", /*#__PURE__*/React.createElement(Icon.Arrow, {
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
  }, "Browse all 117 pets ", /*#__PURE__*/React.createElement(Icon.Arrow, {
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
