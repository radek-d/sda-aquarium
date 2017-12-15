import { Transform } from "./Transform";
import { Size } from "./Size";
import { Direction } from "./Direction";


export class GameObject {
    private content: GameObject[] = [];
    protected transform: Transform = new Transform();
    protected parent: GameObject;
    protected size: Size = new Size();
    public getSize(): Size {
        return this.size;
    }

    public update() {
        this.updateTransform();
        this.runUpdateOnChildrenOfThisObject();
    }

    public getContent(): GameObject[] {
        return this.content;
    }

    private runUpdateOnChildrenOfThisObject() {
        this.content.forEach((element) => element.update());
    }

    public add(elementToAdd: GameObject) {
        elementToAdd.parent = this;
        this.content.push(elementToAdd);
    }

    public remove(elementToRemove: GameObject){
        if (!elementToRemove) throw "Element to remove does not exist";
        elementToRemove.parent = null;
        this.content = this.content.filter( (gameObject) => gameObject != elementToRemove );
       // this.content = this.content.splice(this.content.indexOf(elementToRemove),1);
    }

    public setTransform(transform: Transform) {
        this.transform = transform;
    }

    public getTransform(): Transform {
        return this.transform;
    }

    private updateTransform() {
        switch (this.transform.direction) {
            case Direction.UP:
                this.transform.y += this.transform.speed;
                break;
            case Direction.DOWN:
                this.transform.y -= this.transform.speed;
                break;
            case Direction.LEFT:
                this.transform.x -= this.transform.speed;
                break;
            case Direction.RIGHT:
                this.transform.x += this.transform.speed;
                break;
        }

    }
}