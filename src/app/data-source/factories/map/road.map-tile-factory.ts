import { MapTileFactory } from './map-tile-factory';
import { MapTileType } from 'src/app/models/enums/map-tile-type';
import { Point } from 'src/app/models/map/point';
import { RoadMapTile } from 'src/app/models/map/road.map-tile';

export class RoadMapTileFactory extends MapTileFactory{
    constructor(){
        super(MapTileType.Road);
    }

    public create(position : Point, movementSpeed : number = 5) : RoadMapTile{
        let newTile = new RoadMapTile();
        super.fillBaseTileData(newTile, position, movementSpeed);
        return newTile;
    }
}