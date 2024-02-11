import champions from "./utils/champions";
import items from "./utils/items";

const bAS = champions[0] //0.640 //champions[0]
const percentage = items[0] //25 //items[0]

function multiplicacao() {
    const result = bAS + (bAS * percentage)
}

// should come up 0.658 + 0.1645 = 0.8225