import { DigitGenerator } from './digit-generator';
import { Point } from '../models/map/point';
import { SquareMap } from '../models/map/square-map';

export class MapUtilities {
    private DigitGenerator: DigitGenerator;

    public quadrantDirections: Point[] = [];
    public octileDirections: Point[] = [];

    constructor(private map: SquareMap) {
        this.map = map;
        this.DigitGenerator = new DigitGenerator;
        this.quadrantDirections = [new Point(0, 1), new Point(1, 0), new Point(0, -1), new Point(-1, 0)];
        this.octileDirections = [new Point(0, 1), new Point(1, 1), new Point(1, 0), new Point(1, -1), new Point(0, -1),
        new Point(-1, 1), new Point(-1, 0), new Point(-1, 1)];
    }

    /**
     * @param mapSize Square map size
     */
    public getRandomPosition(): Point {
        return new Point(this.DigitGenerator.getRandomNumber(this.map.size), this.DigitGenerator.getRandomNumber(this.map.size));
    }

    /**
    * 
    * @param octileOn initially false
    */
    public getRandomNextPoint(actualPosition: Point, octileOn: boolean = false): Point {
        let newPoint: Point;
        if (octileOn) {
            newPoint = this.octileDirections[this.DigitGenerator.getRandomNumber(this.octileDirections.length)];
        }
        else {
            newPoint = this.quadrantDirections[this.DigitGenerator.getRandomNumber(this.quadrantDirections.length)];
        }
        return new Point(actualPosition.x + newPoint.x, actualPosition.y + newPoint.y);
    }
}