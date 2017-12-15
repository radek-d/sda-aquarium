import { Game } from "../engine/Game";
import { Aquarium } from "./Aquarium";
import { Salmon } from "./Fishes/Salmon";
import { Transform } from "../engine/Transform";
import { Shark } from "./Fishes/Shark";

export class AquariumGame extends Game {
    constructor(updateInterval: number, renderer){
        super(updateInterval);
        this.setRender(renderer);
        this.setDefault();
    }

    private setDefault(){
        const aquarium = new Aquarium();
        this.renderer.takeAquarium(aquarium);
        const fish = new Salmon();
        const fishTransform = new Transform();
        fishTransform.speed = 1;
        fishTransform.x = 5;
        fishTransform.y = 5;
        fish.setTransform(fishTransform);
        aquarium.add(fish);
    
        const fish3 = new Salmon();
        const fishTransform3 = new Transform();
        fishTransform3.speed = 1;
        fishTransform3.x = 7;
        fishTransform3.y = 7;
        fish3.setTransform(fishTransform3);
        aquarium.add(fish3);
    
        const fish2 = new Shark();
        const fishTransform2 = new Transform();
        fishTransform2.speed = 1;
        fish2.setTransform(fishTransform2);
        aquarium.add(fish2);
        this.add(aquarium);
    }
}