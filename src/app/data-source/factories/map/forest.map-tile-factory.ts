import { MapTileFactory } from './map-tile-factory';
import { MapTileType } from 'src/app/models/enums/map-tile-type';
import { Point } from 'src/app/models/map/point';
import { ForestMapTile } from 'src/app/models/map/forest.map-tile';

export class ForestMapTileFactory extends MapTileFactory {
    constructor() {
        super(MapTileType.Forest);
    }

    public create(position: Point, movementSpeed: number = 3): ForestMapTile {
        let newTile = new ForestMapTile();
        super.fillBaseTileData(newTile, position, movementSpeed);
        return newTile;
    }
}