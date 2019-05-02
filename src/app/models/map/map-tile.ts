import { Point } from './point';
import { MapTileType } from '../enums/map-tile-type';
import { MapTileStatus } from '../enums/map-tile-status';

export abstract class MapTile {
    public position : Point;
    public status : MapTileStatus;
    public movementSpeed : number;
    constructor(public type : MapTileType){
        this.type = type;
    }
}