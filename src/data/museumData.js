export const planets = [
  {
    id: "mercury",
    name: "Mercury",
    type: "Terrestrial",
    distanceFromSun: "57.9 million km",
    diameter: "4,879 km",
    moons: 0,
    description:
      "The smallest planet in our solar system and closest to the Sun. Mercury's surface is heavily cratered, resembling Earth's Moon. Despite being closest to the Sun, it's not the hottest planet.",
    color: "#b5b5b5",
    funFact: "A year on Mercury is only 88 Earth days.",
    image: "mercury.jpg",
  },
  {
    id: "venus",
    name: "Venus",
    type: "Terrestrial",
    distanceFromSun: "108.2 million km",
    diameter: "12,104 km",
    moons: 0,
    description:
      "Often called Earth's twin due to similar size and composition. Venus has the hottest surface of any planet in our solar system due to its thick, toxic atmosphere creating a runaway greenhouse effect.",
    color: "#e8c97e",
    funFact: "A day on Venus is longer than its year.",
    image: "venus.jpg",
  },
  {
    id: "earth",
    name: "Earth",
    type: "Terrestrial",
    distanceFromSun: "149.6 million km",
    diameter: "12,742 km",
    moons: 1,
    description:
      "Our home planet and the only known world to harbor life. Earth's diverse ecosystems, liquid water oceans, and protective atmosphere make it uniquely suited for the complex chemistry of life.",
    color: "#4fa3e0",
    funFact: "Earth is the densest planet in the solar system.",
    image: "earth.jpg",
  },
  {
    id: "mars",
    name: "Mars",
    type: "Terrestrial",
    distanceFromSun: "227.9 million km",
    diameter: "6,779 km",
    moons: 2,
    description:
      "The Red Planet hosts the tallest volcano and the longest canyon in the solar system. Mars is a prime target for human exploration and potential colonization in the coming decades.",
    color: "#c1440e",
    funFact: "Mars has the largest dust storms in the solar system.",
    image: "mars.jpg",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Gas Giant",
    distanceFromSun: "778.5 million km",
    diameter: "139,820 km",
    moons: 95,
    description:
      "The largest planet in our solar system — a massive ball of gas with no solid surface. Jupiter's Great Red Spot is a storm larger than Earth that has been raging for centuries.",
    color: "#c88b3a",
    funFact: "Jupiter's Great Red Spot storm has existed for over 350 years.",
    image: "jupiter.jpg",
  },
  {
    id: "saturn",
    name: "Saturn",
    type: "Gas Giant",
    distanceFromSun: "1.43 billion km",
    diameter: "116,460 km",
    moons: 146,
    description:
      "Famous for its stunning ring system made of ice and rock. Saturn is the least dense planet — it would float on water. Its moon Titan has a thick atmosphere and liquid methane lakes.",
    color: "#e4d191",
    funFact: "Saturn's rings are only about 10 meters thick.",
    image: "saturn.jpg",
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "Ice Giant",
    distanceFromSun: "2.87 billion km",
    diameter: "50,724 km",
    moons: 27,
    description:
      "Uranus is a pale blue planet that rotates on its side, making its seasons extremely unusual. It has faint rings and an icy composition of water, ammonia, and methane.",
    color: "#a7e6e6",
    funFact: "Uranus rotates on its side at about a 98-degree tilt.",
    image: "uranus.jpg",
  },
  {
    id: "neptune",
    name: "Neptune",
    type: "Ice Giant",
    distanceFromSun: "4.5 billion km",
    diameter: "49,244 km",
    moons: 14,
    description:
      "Neptune is the farthest planet from the Sun and is known for its deep blue color and extremely strong winds. It has storms similar to Jupiter’s but with even faster wind speeds.",
    color: "#3f54ff",
    funFact: "Neptune has the fastest winds in the solar system, reaching over 2,000 km/h.",
    image: "neptune.jpg",
  }
];

export const spacecrafts = [
  {
    id: "voyager1",
    name: "Voyager 1",
    agency: "NASA",
    launchYear: 1977,
    status: "Active",
    type: "Interstellar Probe",
    description:
      "The farthest human-made object from Earth, Voyager 1 has entered interstellar space. It carries a golden record containing sounds and images from Earth, a message in a bottle for any civilization that may find it.",
    achievement: "First spacecraft to reach interstellar space",
    distanceTraveled: "23.5 billion km",
   
  },
  {
    id: "apollo11",
    name: "Apollo 11",
    agency: "NASA",
    launchYear: 1969,
    status: "Mission Complete",
    type: "Crewed Lunar Mission",
    description:
      "The mission that fulfilled President Kennedy's challenge and landed humans on the Moon for the first time. Neil Armstrong's 'one small step' was watched by an estimated 600 million people worldwide.",
    achievement: "First crewed lunar landing",
    distanceTraveled: "953,054 km (round trip)",
    
  },
  {
    id: "hubble",
    name: "Hubble Space Telescope",
    agency: "NASA / ESA",
    launchYear: 1990,
    status: "Active",
    type: "Space Observatory",
    description:
      "Orbiting above Earth's atmosphere, Hubble has revolutionized astronomy. Its iconic deep field images revealed thousands of galaxies in a patch of sky that appeared empty to the naked eye.",
    achievement: "Over 1.5 million scientific observations",
    distanceTraveled: "7.3 billion km in orbit",
   
  },
  {
    id: "perseverance",
    name: "Perseverance Rover",
    agency: "NASA",
    launchYear: 2020,
    status: "Active",
    type: "Mars Rover",
    description:
      "Currently exploring Jezero Crater on Mars, searching for signs of ancient microbial life. Perseverance also carried Ingenuity, the first powered aircraft to fly on another planet.",
    achievement: "First powered flight on another planet (Ingenuity)",
    distanceTraveled: "472 million km to Mars",
   
  },
  {
    id: "jwst",
    name: "James Webb Space Telescope",
    agency: "NASA / ESA / CSA",
    launchYear: 2021,
    status: "Active",
    type: "Space Observatory",
    description:
      "The most powerful space telescope ever built, JWST observes in infrared light to see through cosmic dust and peer back to the first light after the Big Bang. Its images have rewritten our understanding of the early universe.",
    achievement: "Deepest infrared images of the universe ever captured",
    distanceTraveled: "1.5 million km from Earth",
    
  },
];

export const missions = [
  {
    id: "artemis",
    name: "Artemis Program",
    agency: "NASA",
    goal: "Return humans to the Moon and establish sustainable lunar presence",
    startYear: 2017,
    targetYear: "2026",
    status: "In Progress",
    phase: "Active",
    description:
      "NASA's Artemis program aims to land the first woman and first person of color on the Moon. It serves as a stepping stone for future crewed missions to Mars, establishing the Gateway lunar space station.",
    keyMilestones: ["Artemis I (2022) — uncrewed test", "Artemis II — crewed lunar flyby", "Artemis III — crewed lunar landing"],
  },
  {
    id: "mars2030",
    name: "Mars Human Mission",
    agency: "NASA / SpaceX",
    goal: "Land humans on Mars for the first time",
    startYear: 2020,
    targetYear: "2030s",
    status: "Planning",
    phase: "Development",
    description:
      "Multiple agencies and private companies are developing technologies for the first crewed Mars mission. Challenges include radiation protection, life support, and the 7-month journey each way.",
    keyMilestones: ["Starship development", "Nuclear propulsion research", "Mars base camp concepts"],
  },
  {
    id: "europa",
    name: "Europa Clipper",
    agency: "NASA",
    goal: "Investigate whether Europa's subsurface ocean could support life",
    startYear: 2024,
    targetYear: "2030",
    status: "En Route",
    phase: "Travel",
    description:
      "Jupiter's moon Europa hides a vast liquid water ocean beneath its icy crust. Europa Clipper will make dozens of close flybys, mapping the surface and analyzing the composition of the subsurface ocean.",
    keyMilestones: ["Launch October 2024", "Mars flyby 2025", "Jupiter arrival 2030"],
  },
];

