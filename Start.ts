import { RenderInConsole } from "./aquarium/RenderInConsole";
import { AquariumGame } from "./aquarium/AquariumGame";


const renderer:RenderInConsole = new RenderInConsole();

var game = new AquariumGame(100, renderer);
game.start();
