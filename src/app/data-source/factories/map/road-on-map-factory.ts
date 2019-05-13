import { RoadMapTileFactory } from './road.map-tile-factory';
import { SquareMap } from 'src/app/models/map/square-map';
import { MapUtilities } from 'src/app/utilities/map-utilities';
import { Point } from 'src/app/models/map/point';
import { DigitGenerator } from 'src/app/utilities/digit-generator';

export class RoadOnMapFactory {
    private RoadFactory: RoadMapTileFactory;
    private MapUtils: MapUtilities;

    constructor(private map: SquareMap,digitGenerator: DigitGenerator) {
        this.map = map;
        this.MapUtils = new MapUtilities(this.map, digitGenerator);
        this.RoadFactory = new RoadMapTileFactory();
    }

    private createRandomRoadArray(maxLength: number): Point[] {
        let roadArray: Point[] = [];
        let currentPoint: Point, previousPoint: Point;
        let firstPoint: Point = this.MapUtils.getRandomPosition()
        previousPoint = firstPoint;
        roadArray.push(firstPoint);
        for (let i = 1; i < maxLength; i++) {
            currentPoint = this.MapUtils.getRandomNextPoint(previousPoint);
            roadArray.push(currentPoint);
            previousPoint = currentPoint;
        }
        return roadArray;
    }
    
    private checkIfPointIsOnMap(point: Point): boolean {
        if (point.x >= this.map.size || point.x < 0 || point.y >= this.map.size || point.y < 0){
            return false;
        }
        else{
            return true;
        }

    }
    
    /**
     * create randomly starting road on given map 
     */
    public createRoad(maxLength: number): void {
        let roadArray = this.createRandomRoadArray(maxLength);
        for (let i = 0; i < roadArray.length; i++) {
            if (this.checkIfPointIsOnMap(roadArray[i])){
                let roadX = roadArray[i].x;
                let roadY = roadArray[i].y;
                this.map.grid[roadY][roadX] = this.RoadFactory.create(new Point(roadX, roadY));
            }
        }
    }

}