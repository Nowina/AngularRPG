import { KeyboardListener } from '../directives/keyboard-listener.directive';
import { MovementService } from '../services/movement.service';
import { IMap } from '../models/interfaces/map';
import { Hero } from '../models/hero/hero';
import { QuadrantDirectionsEnum } from '../models/enums/quadrant-directions';
import { OctileDirectionsEnum } from '../models/enums/octile-direction';

export class KeyboardController {

    constructor(private keyboardListener: KeyboardListener, private movementService: MovementService, private map: IMap,
        private hero: Hero) {
        this.keyboardListener.getKeyboardSubject().subscribe((data) => {
            this.keyEventSorter(data);
        })
    }

    private keyEventSorter(key: String) {
        if (key == 'w' || key == 'd' || key == 's' || key == 'a') {
            console.log(key);
            this.movementEvent(key);
        }
    }

    private movementEvent(key: String) {
        let direction: OctileDirectionsEnum;
        switch (key) {
            case 'w':
                direction = OctileDirectionsEnum.N;
                break;
            case 'a':
                direction = OctileDirectionsEnum.W;
                break;
            case 's':
                direction = OctileDirectionsEnum.S;
                break;
            case 'd':
                direction = OctileDirectionsEnum.E;
                break;
        }
        this.movementService.octileMove(this.hero, this.map, direction);
    }
}