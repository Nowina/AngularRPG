import { MapTile } from '../map/map-tile';

export interface IMap {
    grid: MapTile[][];
    size: number;
    drawMap(): void;
}