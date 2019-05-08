import { ForestMapTileFactory } from './forest.map-tile-factory';
import { FieldMapTileFactory } from './field.map-tile-factory';
import { SquareMap } from 'src/app/models/map/square-map';
import { WaterMapTileFactory } from './river.map-tile-factory';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { MapTile } from 'src/app/models/map/map-tile';
import { Point } from 'src/app/models/map/point';
import { MapTileType } from 'src/app/models/enums/map-tile-type';
import { RoadOnMapFactory } from './road-on-map-factory';

export class MapFactory {
    private ForestFactory: ForestMapTileFactory;
    private FieldFactory: FieldMapTileFactory;
    private WaterFactory: WaterMapTileFactory;
    private DigitGenerator: DigitGenerator;

    constructor() {
        this.FieldFactory = new FieldMapTileFactory();
        this.ForestFactory = new ForestMapTileFactory();
        this.WaterFactory = new WaterMapTileFactory();
        this.DigitGenerator = new DigitGenerator();
    }

    /**
     * 
     * @param forestPercentage from 0 to 100, initially 20
     * @param waterPercentage from 0 to 100, initially 20
     */
    public create(size: number, forestPercentage: number = 20, waterPercentage: number = 20): SquareMap {
        let newMap = new SquareMap(size);
        this.fillGrid(newMap, forestPercentage, waterPercentage);
        return newMap;
    }
    private calculateNumberOfTiles(percentage: number, numberOfTiles: number): number {
        return percentage * numberOfTiles / 100;
    }

    private getRandomTileType(tileTypes: MapTileType[]): MapTileType {
        let randomIndex: number = this.DigitGenerator.getRandomNumber(tileTypes.length);
        return tileTypes[randomIndex];
    }

    /**
     * @param generateWater initially true
     * @param generateForest initially true
     */
    private generateRandomTile(position: Point, generateWater: boolean = true, generateForest: boolean = true): MapTile {
        let tileTypes: MapTileType[] = [MapTileType.Field];
        if (generateWater) {
            tileTypes.push(MapTileType.Water);
        }
        if (generateForest) {
            tileTypes.push(MapTileType.Forest);
        }
        let newTile: MapTile;
        switch (this.getRandomTileType(tileTypes)) {
            case 0:
                newTile = this.FieldFactory.create(position);
                break;
            case 1:
                newTile = this.WaterFactory.create(position);
                break;
            case 2:
                newTile = this.ForestFactory.create(position);
                break;
        }
        return newTile;
    }

    private fillGrid(map: SquareMap, maxForestPercentage: number, maxWaterPercentage: number): void {
        let width: number = map.size;
        let height: number = map.size;
        let numberOfTiles: number = width * height;
        let numberOfWaterTiles: number = 0;
        let numberOfForestTiles: number = 0;
        let generateForest: boolean = true;
        let generateWater: boolean = true;
        let designatedNumberOfWaterTiles: number = this.calculateNumberOfTiles(maxWaterPercentage, numberOfTiles);
        let designatedNumberOfForestTiles: number = this.calculateNumberOfTiles(maxForestPercentage, numberOfTiles);
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let newTile = this.generateRandomTile(new Point(x, y), generateWater, generateForest);
                // console.log(newTile);
                map.grid[y][x] = newTile;

                if (newTile.type == MapTileType.Forest) {
                    numberOfForestTiles++;
                }
                else if (newTile.type == MapTileType.Water) {
                    numberOfWaterTiles++;
                }

                if (numberOfWaterTiles >= designatedNumberOfWaterTiles) {
                    generateWater = false;
                } else if (numberOfForestTiles >= designatedNumberOfForestTiles) {
                    generateForest = false;
                }
            }
        }
    }

}