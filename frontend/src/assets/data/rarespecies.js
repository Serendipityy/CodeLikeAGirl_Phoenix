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
];

export default rarespecies;