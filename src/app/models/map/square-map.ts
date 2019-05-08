import { MapTile } from './map-tile';
import { MapTileType } from '../enums/map-tile-type';


export class SquareMap {
    public grid : MapTile[][];
    constructor(public size){
        this.size = size;
        this.grid = new Array<MapTile[]>(this.size);
        for (let x = 0; x <size; x++){
            this.grid[x] = new Array<MapTile>(this.size);
        }
    }
}