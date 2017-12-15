import { AbstractFish } from "../AbstractFish";
import { GameObject } from "../../engine/GameObject";

export class Shark extends AbstractFish{
    private currentType: number = 3;

    constructor(){
        super();
        this.typeOfFish = "Shark";
    }

    public getTypeNumber(): number {
        return this.currentType;
    }

    public checkFishInField() {
        let fishes:GameObject[] = this.parent.getContent();
        fishes.forEach((fish) => {
            if ((fish.getTransform().x == this.getTransform().x) &&
            (fish.getTransform().y == this.getTransform().y) &&
            this.isNotMe(fish)
            )
                {
                    this.parent.remove(fish);
                    this.currentType = 4;
                    this.add(fish);
                }
        }
    );
    }
    
 
    private isNotMe(fish: GameObject) {
        return fish != this;
    }

    public update() {
        super.update();
        this.checkFishInField();
    }
}