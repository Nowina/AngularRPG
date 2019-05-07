import { Point } from '../models/map/point';

export class DigitGenerator {
    /**
     * @param mapSize Square map size
     */
    public getRandomPosition(mapSize : number) : Point{
        return new Point(this.getRandomNumber(mapSize),this.getRandomNumber(mapSize));
    } 
    /**
     * 
     * @param min initially 0
     */
    public getRandomNumber(max: number, min : number = 0):number {
        return Math.floor(min + (max - min)*Math.random()); 
    } 

    public getRandomBoolean() : boolean{
        return Boolean(this.getRandomNumber(1));
    }
}