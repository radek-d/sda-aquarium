import { GameObject } from "../engine/GameObject";
import { Direction } from "../engine/Direction";

export abstract class AbstractFish extends GameObject {
    protected typeOfFish: string;
    protected numberOfUpdate = 0;

    public update() {
        super.update();
        this.checkWalls();
        this.numberOfUpdate++;
        if (this.numberOfUpdate % 3) {
            this.randomTurn();
            this.numberOfUpdate = 0;
        }
    }

    public randomTurn() {
        var randomNumber = Math.ceil(Math.random() * 4);
        switch (randomNumber) {
            case 1:
                this.transform.direction = Direction.UP;
                break;
            case 2:
                this.transform.direction = Direction.DOWN;
                break;
            case 3:
                this.transform.direction = Direction.RIGHT;
                break;
            case 4:
                this.transform.direction = Direction.LEFT;
                break;
        }
    }

    public getTypeNumber(): number {
        return 1;
    }

    private checkWalls() {
        const aquariumSize = this.parent.getSize();
        if (this.transform.x > aquariumSize.width - 1) {
            this.transform.x = aquariumSize.width - 1;
            this.transform.direction = Direction.UP;
        }
        if (this.transform.x < 0) {
            this.transform.x = 0;
            this.transform.direction = Direction.DOWN;
        }
        if (this.transform.y > aquariumSize.height - 1) {
            this.transform.y = aquariumSize.height - 1;
            this.transform.direction = Direction.LEFT;
        }
        if (this.transform.y < 0) {
            this.transform.y = 0;
            this.transform.direction = Direction.RIGHT;
        }
    }
}