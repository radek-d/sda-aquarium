import { AbstractFish } from "../AbstractFish";

export class Salmon extends AbstractFish{
    constructor(){
        super();
        this.typeOfFish = "Salmon"; 
    }

    public getTypeNumber(): number {
        return 2;
    }
}