import { ForestMapTileFactory } from './forest.map-tile-factory';
import { RoadMapTileFactory } from './road.map-tile-factory';
import { FieldMapTileFactory } from './field.map-tile-factory';
import { SquareMap } from 'src/app/models/map/square-map';
import { WaterMapTileFactory } from './river.map-tile-factory';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { MapTile } from 'src/app/models/map/map-tile';
import { Point } from 'src/app/models/map/point';
import { FieldMapTile } from 'src/app/models/map/field.map-tile';
import { WaterMapTile } from 'src/app/models/map/water.map-tile';
import { ForestMapTile } from 'src/app/models/map/forest.map-tile';
import { RoadMapTile } from 'src/app/models/map/road.map-tile';
import { MapTileType } from 'src/app/models/enums/map-tile-type';

export class MapFactory {
    private ForestFactory : ForestMapTileFactory;
    private RoadFactory : RoadMapTileFactory;
    private FieldFactory : FieldMapTileFactory;
    private WaterFactory : WaterMapTileFactory;
    private DigitGenerator : DigitGenerator;
    
    constructor(){
        this.FieldFactory = new FieldMapTileFactory();
        this.ForestFactory = new ForestMapTileFactory();
        this.RoadFactory = new RoadMapTileFactory();
        this.WaterFactory = new WaterMapTileFactory();
        this.DigitGenerator = new DigitGenerator();
    }

    /**
     * 
     * @param forestPercentage <b>from 0 to 100 </b> 
     * @param waterPercentage <b>from 0 to 100 </b> 
     */
     public create(size :number, forestPercentage :number, waterPercentage :number){
        let newMap = new SquareMap();
        newMap.size = size;

    }
    private calculateNumberOfTiles(percentage : number, numberOfTiles : number) :number {
        return percentage*numberOfTiles/100;
    }
    
    private getRandomTileType(generateWater : boolean = true, generateForest : boolean = true) :MapTileType{
        let newTileType : MapTileType;
        if (generateWater && generateForest){
            newTileType = this.DigitGenerator.getRandomNumber(3);
        }
        else if(generateWater && !generateForest){
            newTileType = this.DigitGenerator.getRandomNumber(1);
        }
        else if(generateForest && !generateWater){
            if (this.DigitGenerator.getRandomBoolean()){
                newTileType = MapTileType.Forest;
            }
            else{
                newTileType = MapTileType.Field;
            }
        }
        else{
            newTileType = MapTileType.Field;
        }
        return newTileType;
    }

    /**
     * @param generateWater initially true
     * @param generateForest initially true
     */
    private generateRandomTile(position : Point, generateWater : boolean = true, generateForest : boolean = true) :MapTile{
        let newTile : MapTile;
        switch (this.getRandomTileType(generateWater,generateForest)) {
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

    private fillGrid(map : SquareMap, forestPercentage : number, waterPercentage: number) :void{
        let width :number = map.size;
        let height :number = map.size;
        let numberOfTiles :number = width*height;
        let numberOfWaterTiles = this.calculateNumberOfTiles(waterPercentage,numberOfTiles);
        let numberOfForestTiles = this.calculateNumberOfTiles(forestPercentage,numberOfTiles);
        for (let y = 0; y < height; y++){
            for (let x = 0; x < width; x++){
                

            }
        }
    }

}