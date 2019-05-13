import { DigitGenerator } from './digit-generator';
import { Point } from '../models/map/point';
import { SquareMap } from '../models/map/square-map';

export class MapUtilities {

    public quadrantDirections: Point[] = [];
    public octileDirections: Point[] = [];

    constructor(private map: SquareMap, private digitGenerator: DigitGenerator) {
        this.map = map;
        this.digitGenerator = digitGenerator;
        this.quadrantDirections = [new Point(0, 1), new Point(1, 0), new Point(0, -1), new Point(-1, 0)];
        this.octileDirections = [new Point(0, 1), new Point(1, 1), new Point(1, 0), new Point(1, -1), new Point(0, -1),
        new Point(-1, 1), new Point(-1, 0), new Point(-1, 1)];
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
            newPoint = this.octileDirections[this.digitGenerator.getRandomNumber(this.octileDirections.length)];
        }
        else {
            newPoint = this.quadrantDirections[this.digitGenerator.getRandomNumber(this.quadrantDirections.length)];
        }
        return new Point(actualPosition.x + newPoint.x, actualPosition.y + newPoint.y);
    }
}