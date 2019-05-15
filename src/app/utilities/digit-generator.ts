import { Point } from '../models/map/point';

export class DigitGenerator {
    /**
     * @param min initially 0
     */
    public getRandomNumber(max: number, min: number = 0): number {
        return Math.floor(min + (max - min) * Math.random());
    }

    public getRandomBoolean(): boolean {
        return Math.random() >= 0.5;
    }
}