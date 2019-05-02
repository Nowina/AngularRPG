import { MapTile } from './map-tile';
import { MapTileType } from '../enums/map-tile-type';

export class FieldMapTile extends MapTile{
    constructor(){
        super(MapTileType.Field);
    }
}