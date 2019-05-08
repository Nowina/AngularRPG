import { MapTileFactory } from './map-tile-factory';
import { MapTileType } from 'src/app/models/enums/map-tile-type';
import { Point } from 'src/app/models/map/point';
import { FieldMapTile } from 'src/app/models/map/field.map-tile';

export class FieldMapTileFactory extends MapTileFactory {
    constructor() {
        super(MapTileType.Field);
    }

    public create(position: Point, movementSpeed: number = 4): FieldMapTile {
        let newTile = new FieldMapTile();
        super.fillBaseTileData(newTile, position, movementSpeed);
        return newTile;
    }
}