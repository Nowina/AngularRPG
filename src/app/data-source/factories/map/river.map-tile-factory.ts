import { MapTileFactory } from './map-tile-factory';
import { MapTileType } from 'src/app/models/enums/map-tile-type';
import { Point } from 'src/app/models/map/point';
import { WaterMapTile } from 'src/app/models/map/water.map-tile';

export class WaterMapTileFactory extends MapTileFactory {
    constructor() {
        super(MapTileType.Water);
    }

    public create(position: Point, movementSpeed: number = 1): WaterMapTile {
        let newTile = new WaterMapTile();
        super.fillBaseTileData(newTile, position, movementSpeed);
        return newTile;
    }
}