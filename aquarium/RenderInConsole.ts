import { Aquarium } from "./Aquarium";
import { AbstractFish } from "./AbstractFish";
import { Size } from "../engine/Size";

export class RenderInConsole {
    private aquarium:Aquarium;
    private readonly EMPTY_FIELD: number = 0;
    private readonly ABSTRACT_FISH: number = 1;
    private readonly SALMON: number = 2;
    private readonly SHARK: number = 3;
    private readonly SHARK_FED: number = 4;
    private readonly COLISION: number = 99;
    
    public render() {
        const aquariumSize: Size = this.aquarium.getSize();
        const checkboard: Array<Array<number>> = this.createNewEmptyCheckboard(aquariumSize);
        
        this.updateFields(checkboard)
        this.clearPreviousDrawing();
        this.drawTopBorder(aquariumSize.width);
        this.drawAquariumContent(checkboard);
        this.drawBottomborder(aquariumSize.width);
    }

    private drawAquariumContent(checkboard: number[][]) {
        let consoleOutput: string = "";
        for (let currentRow = 0; currentRow < checkboard.length; currentRow++) {
            consoleOutput = this.addBorder(consoleOutput);
            consoleOutput = this.fillRowWithIcons(checkboard, currentRow, consoleOutput);
            consoleOutput = this.addBorder(consoleOutput);
            this.drawLine(consoleOutput);
            consoleOutput = "";
        }
    }

    private drawLine(line: string) {
        console.log(line);
    }

    private addBorder(line: string): string {
        return line += "|";
    }

    private fillRowWithIcons(checkboard: number[][], i: number, consoleOutput: string) {
        for (let j = 0; j < checkboard.length; j++) {
            const currentField = checkboard[i][j];
            consoleOutput += this.getFieldIcon(currentField);
        }
        return consoleOutput;
    }

    private updateFields(checkboardToUpdate: number[][]) {
        this.aquarium.getContent().forEach(aquariumElement => {
            const transform = aquariumElement.getTransform();
            const oldFieldValue = checkboardToUpdate[transform.x][transform.y];
            let newFieldValue = (aquariumElement as AbstractFish).getTypeNumber();
            if (this.isOcuppiedByFish(oldFieldValue)) {
                newFieldValue = this.COLISION;
            }
            checkboardToUpdate[transform.x][transform.y] = newFieldValue;
        });
    }

    public takeAquarium(newAquarium:Aquarium) {
        this.aquarium = newAquarium;
    }

    private isOcuppiedByFish(oldFieldValue: number): boolean {
        return oldFieldValue != this.EMPTY_FIELD;
    }

    private clearPreviousDrawing() {
        console.clear();
    }

    private createNewEmptyCheckboard(aquariumSize: Size): number[][] {
        let newCheckboard: number[][] = [];
        for (let i = 0; i < aquariumSize.width; i++) {
            newCheckboard[i] = [];
            for (let j = 0; j < aquariumSize.height; j++) {
                newCheckboard[i][j] = this.EMPTY_FIELD;
            }
        }
        return newCheckboard;
    }
    
    private getFieldIcon(fishNumber: number): string{
            switch (fishNumber) {
                case this.ABSTRACT_FISH: 
                    return " X ";
                case this.SALMON: 
                    return " o ";
                case this.SHARK: 
                    return " R ";
                case this.SHARK_FED: 
                    return ">=D";
                case this.COLISION:
                    return "BUM";
                default: 
                    return " . ";
            }
    }
    private drawTopBorder(width){
        let line = this.createTextPattern(width, "~~~");
        this.drawLine(line);
    }
    private drawBottomborder(width){
        let line = this.createTextPattern(width, "___");
        this.drawLine(line);
    }

    private createTextPattern(width: number, text:string): string{
        let line= "";
        line = this.addBorder(line);
        for(let i =0; i<width; i++){
             line += text;
        }
        line = this.addBorder(line);
        return line;
    }
}