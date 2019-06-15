import { MapTile } from './map-tile';
import { MapTileStatus } from '../enums/map-tile-status';
import { IMap } from '../interfaces/map';


export class SquareMap implements IMap {
    public grid: MapTile[][];
    
    constructor(public size) {
        this.size = size;
        this.grid = new Array<MapTile[]>(this.size);
        for (let x = 0; x < size; x++) {
            this.grid[x] = new Array<MapTile>(this.size);
        }
    }

    public drawMap(): void {
        let mapConsole: string = "";
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (this.grid[y][x].status == MapTileStatus.Free) {
                    mapConsole += "O";
                }
                else {
                    mapConsole += "X";
                }
            }
            mapConsole += "\n";
        }
        console.log(mapConsole);

    }
}