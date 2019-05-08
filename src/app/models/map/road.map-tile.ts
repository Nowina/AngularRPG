import { MapTile } from './map-tile';
import { MapTileType } from '../enums/map-tile-type';

export class RoadMapTile extends MapTile {
    constructor() {
        super(MapTileType.Road);
    }
}