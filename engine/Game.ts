import { GameObject } from "./GameObject";

export class Game extends GameObject {
    protected renderer;
    private updateInterval;

    constructor(updateInterval: number){
        super();
        this.updateInterval = updateInterval;
    }

    public setRender(renderer){
        this.renderer = renderer;
    }

    public start(){
        setInterval(()=>{
            this.mainLoop()
        }, this.updateInterval);
    }

    private mainLoop(){
        this.renderer.render();
        this.update();
    }
}