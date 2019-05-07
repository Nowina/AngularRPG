import { MapTile } from './map-tile';
import { MapTileType } from '../enums/map-tile-type';

export class WaterMapTile extends MapTile{
    constructor(){
        super(MapTileType.Water);
    }
}