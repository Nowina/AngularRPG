import { Point } from '../models/map/point';
import { QuadrantDirectionsEnum } from '../models/enums/quadrant-directions';
import { OctileDirectionsEnum } from '../models/enums/octile-direction';
export class Directions {
    private quadrantDirections: Point[] = [];
    private octileDirections: Point[] = [];

    constructor ( ) {
        this.quadrantDirections = [new Point(0, 1), new Point(1, 0), new Point(0, -1), new Point(-1, 0)];
        this.octileDirections = [new Point(0, 1), new Point(1, 1), new Point(1, 0), new Point(1, -1), new Point(0, -1),
        new Point(-1, -1), new Point(-1, 0), new Point(-1, 1)];
    }

    public getQuadrantDirection(directionEnum: QuadrantDirectionsEnum): Point {
        return this.quadrantDirections[directionEnum];
    }

    public getOctileDirection(directionEnum: OctileDirectionsEnum): Point {
        return this.octileDirections[directionEnum];
    }

}