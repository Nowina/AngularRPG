import { IMovable } from '../models/interfaces/movable';
import { IMap } from '../models/interfaces/map';
import { Point } from '../models/map/point';
import { Directions } from '../utilities/directions';
import { MapTileStatus } from '../models/enums/map-tile-status';
import { QuadrantDirectionsEnum } from '../models/enums/quadrant-directions';
import { OctileDirectionsEnum } from '../models/enums/octile-direction';
import { KeyboardListener } from '../directives/keyboard-listener.directive';

export class MovementService {
    
    constructor (private direction: Directions, private keyboardListener: KeyboardListener) {
        this.keyboardListener.getKeyboardSubject().subscribe(
            (data) => {
                console.log(data);
            }
        );
    }
    
    private checkXCords(point: Point, map: IMap): boolean{
        return ( (point.x >= 0) && (point.x < map.size) );
    }

    private checkYCords(point: Point, map: IMap): boolean{
        return ( (point.y >= 0) && (point.y < map.size) );
    }

    private checkIfOnMap(point: Point, map: IMap): boolean{
        return ( this.checkXCords(point, map) && this.checkYCords(point, map) );
    }

    private checkIfBlocked(point: Point, map: IMap){
        return (map.grid[point.y][point.x].status == MapTileStatus.Free);
    }

    private assignNewPosition(movable: IMovable, newPosition: Point, map: IMap): void{
        map.grid[movable.position.y][movable.position.x].status = MapTileStatus.Free;
        movable.position = newPosition;
        map.grid[newPosition.y][newPosition.x].status = MapTileStatus.Blocked;
    }

    private calculateNewPosition(actualPosition: Point, direction: Point): Point {
        return new Point(actualPosition.x + direction.x, actualPosition.y + direction.y);
    }

    /**
     * @returns returns whether placement was sucessful 
     */
    public placeOnMap(movable: IMovable, map: IMap, position: Point): boolean{
        if ( !this.checkIfOnMap(position, map) ) {
            return false;
        }

        if ( !this.checkIfBlocked(position, map) ) {
            return false;
        }
        movable.position = position;
        this.assignNewPosition(movable,position,map);
        return true;
    }

    /**
     * @returns returns whether movement was sucessful 
     */
    public quadrantMove(movable: IMovable, map: IMap, direction: QuadrantDirectionsEnum ): boolean{
        let newPosition: Point = this.calculateNewPosition(movable.position,this.direction.getQuadrantDirection(direction));
        
        if ( !this.checkIfOnMap(newPosition, map) ) {
            return false;
        }

        if ( !this.checkIfBlocked(newPosition, map) ) {
            return false;
        }

        this.assignNewPosition(movable,newPosition,map);
        return true;
    }

    /**
     * @returns returns whether movement was sucessful 
     */
    public octileMove(movable: IMovable, map: IMap, direction: OctileDirectionsEnum ): boolean{
        let newPosition: Point = this.calculateNewPosition(movable.position,this.direction.getOctileDirection(direction));
        
        if ( !this.checkIfOnMap(newPosition, map)) {
            return false;
        }

        if ( !this.checkIfBlocked(newPosition, map))
        {
            return false;
        }

        this.assignNewPosition(movable,newPosition,map);
        return true;
    }


}