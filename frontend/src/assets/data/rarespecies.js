import Img01 from "../images/animal-01.jpg";
import Img02 from "../images/animal-02.jpg";
import Img03 from "../images/animal-03.jpg";
import Img04 from "../images/animal-04.jpeg";
import Img05 from "../images/animal-05.jpg";
import Img06 from "../images/animal-06.jpeg";
import Img07 from "../images/animal-07.jpg";
import Img08 from "../images/animal-08.jpg";

const rarespecies = [
  {
    id: "01",
    title: "Wallace’s Tarsier",
    desc: "Wallace’s Tarsier, the Southeast Asian rainforest's enigmatic jewel, boasts saucer-like eyes and unparalleled agility. As the 'Night's Watchman', this diminutive primate is indispensable to its ecosystem: feasting on insects, it aids in maintaining ecological equilibrium, ensuring a balanced and thriving forest environment. However, amidst the symphony of the rainforest, its distinct chirrups wane. The creeping tendrils of deforestation and relentless human encroachment cast shadows over its future. As the natural tapestry unravels, the role of this nocturnal guardian becomes ever more crucial, emphasizing an urgent call to action.",
    characteristics: [
      {
        feature: "Head-and-body length of between 10 and 15 cm (4 and 6 in)"
      },
      {
        feature: "Large eyes, clearly defined facial mask, white spots behind ears"
      },
      {
        feature: "Long tail with large bushy tail-tuft"
      },
      {
        feature: "Fur is yellowish-brown, throat is copper-colored"
      },
      {
        feature: "Has distinctive duetting call"
      }
    ],
    number: "NULL",
    status: "VULNERABLE",
    habitat: "Forest, Wetlands (inland), Artificial/Terrestrial",
    native: "Indonesia (Sulawesi)",
    photo: Img01,
    featured: true,
  },
  {
    id: "02",
    title: "Red Panda",
    desc: "In the dappled light of the Eastern Himalayas' dense forests, the Red Panda, with its fiery-red coat, treads softly. This enchanting creature not only mesmerizes with its beauty but also plays a vital role: by foraging on bamboo leaves, it shapes the forest's understory, ensuring a rich tapestry of plant growth. But with each rustling leaf and cautious step, there's an underlying tension. Encroachment from human developments and the relentless march of deforestation threatens to unravel the tranquil world of this 'Fire Fox', imperiling the gentle rhythm of life in the mountains.",
    characteristics: [
      {
        feature: "Slightly larger than a domestic cat.",
      },
      {
        feature: "Bear-like body, thick russet fur, black belly and limbs."
      },
      {
        feature: "White markings on the head, small eyes."
      },
      {
        feature: "Skillful, acrobatic, predominantly stays in trees."
      }
    ],
    number: "less than 10,000 ",
    status: "ENDANGERED",
    habitat: "Forest, Shrubland",
    native: "Bhutan; China; India; Myanmar; Nepal",
    photo: Img02,
    featured: true,
  },
  {
    id: "03",
    title: "Giant Panda",
    desc: "The Giant Panda, an emblem of China's lush bamboo forests, is a sight to behold with its stark black-and-white contrast. Beyond being a symbol of conservation, this majestic bear plays a central role in its ecosystem. By predominantly feeding on bamboo, the panda aids in the plant's lifecycle, ensuring that these forests remain dense and thriving for countless other species. Yet, as we stand in awe of its serene demeanor, there lies a troubling undercurrent. Rampant deforestation, coupled with agricultural expansion, gnaws at the very fabric of its habitat. As the bamboo thickets thin out, the intricate balance of the forest ecosystem teeters.",
    characteristics: [
      {
        feature: "Distinctive black-and-white coat, with black fur around its eyes, ears, legs, and shoulders, and white fur on the rest of its body.",
      },
      {
        feature: "Roundhead, small eyes, short snout",
      },
      {
        feature: "Large molar teeth adapted for eating bamboo",
      },
      {
        feature: "Thick and oily fur protects from cold and wet climate",
      },
      {
        feature: "Communicate through scent marks, vocalizations, and body postures"
      },
      {
        feature: "Omnivores but mainly eat bamboo, consuming up to 38 kg per day"
      }
    ],
    number: "500-1000",
    status: "VULNERABLE",
    habitat: "Forest",
    native: "China (Sichuan, Shaanxi, Gansu)",
    photo: Img03,
    featured: true,
  },
  {
    id: "04",
    title: "Snow Leopard",
    desc: "High in Central Asia's rugged mountains, the Snow Leopard moves with grace, its dappled coat mirroring the icy terrains. As a predator, it maintains a balance, controlling herbivore populations, and ensuring the delicate alpine meadows thrive. Yet, shadows loom; habitat loss, human conflict, and poaching threaten to silence the 'Ghosts of the Mountains', leaving a void in the high-altitude symphony.",
    characteristics: [
      {
        feature: "Whitish to gray fur with black spots.",
      },
      {
        feature: "Green or grey eyes, domed forehead, short muzzle.",
      },
      {
        feature: "Bushy tail, large nasal cavity.",
      },
      {
        feature: "Powerful legs, tremendous jumpers.",
      },
      {
        feature: "Long tails for balance and warmth.",
      },
      {
        feature: "Shy and reclusive, rarely seen in the wild."
      }
    ],
    number: "2710-3386",
    status: "VULNERABLE",
    habitat: "Forest, Shrubland, Grassland, Rocky areas (eg. inland cliffs, mountain peaks)",
    native: "Afghanistan; Bhutan; China (Yunnan, Qinghai, Sichuan, Gansu, Xinjiang, Nei Mongol); India,.....",
    photo: Img04,
    featured: true,
  },
  {
    id: "05",
    title: "Great Green Macaw",
    desc: "Soaring above the verdant canopies of Central and South America, the Great Green Macaw is a symphony of colors against the sky. With its robust beak, it cracks open hard nuts and seeds, aiding in the dispersal and regeneration of many tree species. This avian artist not only paints the skies but also ensures the continual bloom of its rainforest home. However, the resounding calls of this vibrant parrot are increasingly stifled. Rampant deforestation and the illegal pet trade threaten to cage its spirit, dimming the radiant hues of the forest's aerial tapestry.",
    characteristics: [
      {
        feature: "Green body, reddish forehead, pale blue on the lower back, rump, and upper tail cover.",
      },
      {
        feature: "Brownish-red tails with pale blue tips.",
      },
      {
        feature: "Largest parrots in their natural range; second heaviest macaw species.",
      },
      {
        feature: "Blue flight feathers, red on tail and forehead.",
      },
      {
        feature: "Prefer forested areas; fly in pairs or small flocks."
      },
      {
        feature: "Feed on fruits; inconspicuous in the canopy.",
      },
      {
        feature: "Have loud, raucous calls similar to other macaws."
      }
    ],
    number: "500-1000",
    status: "CRITICALLY ENDANGERED",
    habitat: "Forest, Artificial/Terrestrial",
    native: "Colombia; Costa Rica; Ecuador; Honduras; Nicaragua; Panama",
    photo: Img05,
    featured: false,
  },
  {
    id: "06",
    title: "Panamanian Golden Frog",
    desc: "Panamanian Golden Frog In Panama's misty highlands, the Panamanian Golden Frog, a beacon of yellow, hops along streams. An integral part of the aquatic ecosystem, it keeps insect populations in check. But the melody of its chirps grows faint. Habitat destruction and a deadly fungus cast long shadows, threatening to mute this golden harbinger's songs.",
    characteristics: [
      {
        feature: "Brightly colored, varying from gold to greenish with black spots.",
      },
      {
        feature: "Native to the rainforests and cloud forests of Panama.",
      },
      {
        feature: "Communicate using a form of sign language due to noisy environment.",
      },
      {
        feature: "Toxic skin secretion; a defense against predators.",
      },
      {
        feature: "Now extinct in the wild, mostly seen in captivity due to conservation programs.",
      },
    ],
    number: "0-49",
    status: "CRITICALLY ENDANGERED",
    habitat: "Terrestrial, Freshwater (=Inland waters)",
    native: "Panama",
    photo: Img06,
    featured: false,
  },
  {
    id: "07",
    title: "Whooping Crane",
    desc: "The elegant Whooping Crane graces North America's wetlands, its calls echoing through the reeds. Key to wetland health, it feeds on invertebrates, helping maintain aquatic balance. Their balletic courtship, however, dances on the edge. Habitat loss and human disturbances jeopardize the return of their sonorous calls, casting a hush over the marshlands.",
    characteristics: [
      {
        feature: "Tall, white bird with a long neck and long legs.",
      },
      {
        feature: "Red crown on the head and a long, pointed bill.",
      },
      {
        feature: "Only about 800 individuals remain in the wild.",
      },
      {
        feature: "Migrate long distances: from northern Canada to the Gulf Coast of Texas.",
      },
      {
        feature: "Known for its loud and resonant 'whooping' calls.",
      },
    ],
    number: "50-249",
    status: "ENDANGERED",
    habitat: "Wetlands (inland), Marine Coastal/Supratidal, Artificial/Terrestrial",
    native: "Canada; United States",
    photo: Img07,
    featured: false,
  },
  {
    id: "08",
    title: "Dhole",
    desc: "The Dhole, Asia's wild dog, roams the forests with a fiery spirit, its pack calls resonating through the woods. A predator, it keeps herbivore numbers in balance, preserving forest undergrowth. Yet, a silent challenge emerges. Habitat fragmentation and competition with other predators push the Dhole towards an uncertain path, as the harmonious chorus of the forest faces potential disruption.",
    characteristics: [
      {
        feature: "Also known as the Asian wild dog.",
      },
      {
        feature: "Reddish-brown fur, bushy tail, and rounded ears.",
      },
      {
        feature: "Pack hunters, known for their incredible stamina and hunting skills.",
      },
      {
        feature: "Communicate using a variety of whistles, screams, and other vocalizations.",
      },
      {
        feature: "Inhabit a range of habitats, from alpine forests to tropical rainforests",
      },
    ],
    number: "949-2215",
    status: "ENDANGERED",
    habitat: "Forest, Shrubland, Grassland",
    native: "Afghanistan; Kazakhstan; Korea, Republic of; Kyrgyzstan; Mongolia; Russian Federation,......",
    photo: Img08,
    featured: false,
  },

  {
    id: "09",
    title: "Ramondie des Pyrénées/ Ramonda myconi",
    desc: "In the Pyrenees' rugged terrains, the Ramondie des Pyrénées stands as an emblem of resilience. Beyond its beauty, it's pivotal to the ecosystem, offering nectar to high-altitude pollinators and anchoring the fragile soil with its roots, preventing erosion. Yet, with changing climates and human activity, its delicate role in maintaining mountain biodiversity hangs in the balance.",
    characteristics: [
      {
        feature: "Rosette-forming perennial herb."
      },
      {
        feature: "Leaves are spoon-shaped, green, and covered with fine hairs."
      },
      {
        feature: "Produces purple, five-petalled flowers with a yellow center."
      },
      {
        feature: "Typically grows in rocky limestone crevices."
      },
      {
        feature: "Prefers shaded, cool, and moist locations."
      },
      {
        feature: "Resilient to desiccation; can recover from severe dehydration."
      },
      {
        feature: "Blooms in late spring to early summer."
      }
    ],
    number: "NULL",
    status: "LEAST CONCERN",
    habitat: "Forest, Rocky areas (eg. inland cliffs, mountain peaks)",
    native: "Andorra; France (France (mainland)); Spain (Spain (mainland))",
    photo: Img01,
    featured: true,
  },
  {
    id: "10",
    title: "Juncus heterophyllus",
    desc: "Gracefully rising from Mediterranean wetlands, Juncus heterophyllus stands sentinel. More than just a plant, it filters water, stabilizes marshland, and provides crucial nesting. But as wetlands shrink from agricultural and urban pressures, the future of this ecological keystone wavers, underscoring the fragility of its habitat.",
    characteristics: [
      {
        feature: "Juncus heterophyllus is a perennial species and Helophyte.",
      },
      {
        feature: "It is an aquatic species of rush that is native to the Mediterranean."
      },
      {
        feature: "It is found in temporarily or permanently flooded places such as marshes, ponds, small streams on acidic substrate, peat or sand."
      },
      {
        feature: "Flowering takes places in spring or summer according to latitude, altitude and hydroperiod."
      }
    ],
    number: "NULL",
    status: "NOT EVALUATED",
    habitat: "Wetlands (inland)",
    native: "Algeria; France (Corsica, France (mainland)); Italy (Sicilia, Italy (mainland), Sardegna); Morocco,....",
    photo: Img02,
    featured: true,
  },
  {
    id: "11",
    title: "Spotted Gentian",
    desc: "The Spotted Gentian blooms vividly in open meadows, its petals a dance of blue and delicate dots. A magnet for pollinators, it fosters grassland biodiversity. Yet, as land-use shifts, this floral beacon's brilliance dims, signaling a pressing need to cherish and protect our meadow tapestries.",
    characteristics: [
      {
        feature: "perennial herb that can grow up to 0.35 m tall",
      },
      {
        feature: "ovate, petiolate leaves and capsule fruit",
      },
      {
        feature: "bell-shaped, yellow flowers with dark violet spots, flowers from June to July",
      },
      {
        feature: "grows in mountain meadows and pastures at an altitude between 1800 and 2700 m",
      },
    ],
    number: "NULL",
    status: "LEAST CONCERN",
    habitat: "Shrubland, Grassland, Rocky areas",
    native: "Albania; Austria; Bulgaria; Croatia; Czechia; France (France (mainland)); Germany,...",
    photo: Img03,
    featured: true,
  },
  {
    id: "12",
    title: "Pseudolarix amabilis",
    desc: "In the temperate forests of China, the Golden Larch, or Pseudolarix amabilis, stands tall, its needles turning a striking gold in autumn. This deciduous conifer plays a role in forest health, supporting various fauna with its seeds and shelter. However, habitat loss and logging challenge its regal stance, hinting at the broader threats faced by its native ecosystem.",
    characteristics: [
      {
        feature: "Needles turn bright yellow in autumn before shedding.",
      },
      {
        feature: "The tree's cones are distinctive, being broad and flat, resembling small rosettes.",
      },
      {
        feature: "Bark is often flaky and can peel off in strips, revealing a reddish-brown inner layer.",
      },
      {
        feature: "Grows best in acidic, well-drained soils.",
      },
    ],
    number: "NULL",
    status: "VULNERABLE",
    habitat: "Forest",
    native: "China (Jiangxi, Fujian, Zhejiang, Hunan)",
    photo: Img04,
    featured: true,
  },
  {
    id: "13",
    title: "Pássaras",
    desc: "From the lush terrains of Madeira, the Pássaras, or Geranium maderense, unveils its vivid pink blooms. Often termed the 'Madeiran Cranesbill', this geranium is not just a spectacle but a beacon for local pollinators, underpinning the island's intricate web of life. Yet, as it thrives, the encroachments of modernity and shifts in weather whisper of the need to safeguard such natural treasures.",
    characteristics: [
      {
        feature: "The largest of the geranium species, producing pink to magenta flowers",
      },
      {
        feature: "Biennial plant that typically flowers in its second year.",
      },
      {
        feature: "Large, deeply divided green leaves form a rosette at the base.",
      },
      {
        feature: "When in full bloom, the plant can reach up to 1.5 meters in height.",
      },
      {
        feature: "Grows well in mild climates and is often used as an ornamental plant in gardens."
      },
    ],
    number: "1-50",
    status: "CRITICALLY ENDANGERED",
    habitat: "Marine Coastal/Supratidal",
    native: "Portugal (Madeira)",
    photo: Img05,
    featured: false,
  },
  {
    id: "14",
    title: "Jurinea fontqueri",
    desc: "Tucked within the Iberian Peninsula's rocky landscapes, the Jurinea fontqueri emerges, a testament to botanical tenacity. This rare thistle, with its intricate blossoms, supports various pollinators, fostering a biodiverse enclave. Yet, as human activities encroach and climates shift, the delicate dance of the Jurinea and its pollinators becomes increasingly precarious",
    characteristics: [
      {
        feature: "A genus in the Asteraceae family, and members of this genus are generally herbaceous perennials.",
      },
      {
        feature: "They typically grow in temperate regions and can be found in various habitats, including meadows and rocky areas.",
      },
    ],
    number: "2,231",
    status: "CRITICALLY ENDANGERED",
    habitat: "Rocky areas (eg. inland cliffs, mountain peaks)",
    native: "Spain (mainland)",
    photo: Img06,
    featured: false,
  },
  {
    id: "15",
    title: "Limonium spectabile",
    desc: "Amidst rocky terrains and arid landscapes, the Siempreviva de Guelgue stands resilient, its succulent leaves a testament to nature's ability to adapt. This perennial not only conserves precious water in its surroundings but serves as a refuge for various insects in its habitat. However, its endurance is tested by human encroachment and changing climates, reminding us of the fragile balance of desert ecosystems.",
    characteristics: [
      {
        feature: "Endemic to Teno area of Tenerife",
      },
      {
        feature: "Can grow up to 50 cm",
      },
      {
        feature: "Pinnatisect ovate-lanceolate leaves",
      },
      {
        feature: "Glabrous and apterous panicle inflorescence",
      },
      {
        feature: "Triads or solitary flowers",
      },
      {
        feature: "Intense mauve calyx and white corolla",
      },
    ],
    number: "160",
    status: "CRITICALLY ENDANGERED",
    habitat: "Shrubland, Rocky areas",
    native: "Spain (Canary Is.)",
    photo: Img07,
    featured: false,
  },
  {
    id: "16",
    title: "Cardón de Jandía (Onopordum nogalesii) ",
    desc: "In the sun-kissed plains of Jandía, the Cardón de Jandía, or Onopordum nogalesii, rises. This thistle, with its protective spines and majestic presence, is a haven for pollinators. Its existence ensures a biodiversity hotspot in an otherwise sparse terrain. But as landscapes transform and human pressures mount, the future of this unique flora hangs in balance, echoing the urgency of conservation.",
    characteristics: [
      {
        feature: "a type of plant in the family Asteraceae. ",
      },
      {
        feature: "Upright biennial with a basal rosette of leaves",
      },
      {
        feature: "Simple or pinnately lobed, grey-hairy leaves",
      },
      {
        feature: "Large, thistle-like, pink or purple flower-heads in summer",
      },
      {
        feature: "Native to southern Europe, northern Africa, the Canary Islands, the Caucasus, and southwest and central Asia",
      },
    ],
    number: "70",
    status: "CRITICALLY ENDANGERED",
    habitat: "Shrubland, Rocky areas",
    native: "Spain (Canary Is.)",
    photo: Img08,
    featured: false,
  },
];

export default rarespecies;