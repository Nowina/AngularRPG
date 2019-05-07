import { MapTile } from './map-tile';
import { MapTileType } from '../enums/map-tile-type';

export class ForestMapTile extends MapTile{
    constructor(){
        super(MapTileType.Forest);
    }
}