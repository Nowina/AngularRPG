import { DigitGenerator } from './digit-generator';
import { Point } from '../models/map/point';
import { SquareMap } from '../models/map/square-map';
import { Directions } from './directions';

export class MapUtilities {

    constructor(private map: SquareMap, private digitGenerator: DigitGenerator, private directions: Directions) {
    }

    /**
     * @param mapSize Square map size
     */
    public getRandomPosition(): Point {
        return new Point(this.digitGenerator.getRandomNumber(this.map.size), this.digitGenerator.getRandomNumber(this.map.size));
    }

    /**
    * 
    * @param octileOn initially false
    */
    public getRandomNextPoint(actualPosition: Point, octileOn: boolean = false): Point {
        let newPoint: Point;
        if (octileOn) {
            newPoint = this.directions.getOctileDirection(this.digitGenerator.getRandomNumber(7));
        }
        else {
            newPoint = this.directions.getQuadrantDirection(this.digitGenerator.getRandomNumber(4));
        }
        return new Point(actualPosition.x + newPoint.x, actualPosition.y + newPoint.y);
    }
}