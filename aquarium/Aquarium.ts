import { GameObject } from "../engine/GameObject";

export class Aquarium extends GameObject {
    constructor() {
        super()
        this.size.height = 10;
        this.size.width = 10;
    }
}