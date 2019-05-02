import { Point } from '../models/map/point';

export class DigitGenerator {
    /**
     * @param mapSize Square map size
     */
    public getRandomPosition(mapSize : number) : Point{
        return new Point(this.getRandomNumber(mapSize),this.getRandomNumber(mapSize));
    } 

    public getRandomNumber(max: number, min : number = 0):number {
        return Math.floor(min + (max - min)*Math.random()); 
    } 
}