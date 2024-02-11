import champions from "./utils/champions.js";
import items from "./utils/items.js";

const bAS = champions[0].bAS //0.640 //champions[0] 0.658
const percentage = items[0] //25 //items[0]

function multiplicacao() {
    const result = bAS + (bAS * percentage)
    console.log(result);
}

multiplicacao()