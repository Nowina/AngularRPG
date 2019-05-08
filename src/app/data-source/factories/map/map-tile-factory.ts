import { MapTileType } from 'src/app/models/enums/map-tile-type';
import { MapTile } from 'src/app/models/map/map-tile';
import { Point } from 'src/app/models/map/point';

export abstract class MapTileFactory {
    constructor(private type: MapTileType) {
        this.type = type;
    }

    protected fillBaseTileData(tile: MapTile, position: Point, movementSpeed: number) {
        tile.movementSpeed = movementSpeed;
        tile.position = position;
        tile.type = this.type;
    }
}