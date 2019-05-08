import { Item } from '../models/item/item';
import { IContainer } from '../models/interfaces/container';
import { IEquipable } from '../models/interfaces/equipable';

export class IContainerService {
    public canEquipItem(container: IContainer): boolean{
        if (container.currentCapacity + 1 <= container.maxCapacity) {
            return true;
        }
        else {
            return false;
        }
    }
    // TO DO:
    // public addToContainer(item: IEquipable, container: IContainer): void{
        
    // }
    // public checkIfContainsItem(item: IEquipable, container: IContainer): boolean{

    // }
    // public removeFromContainer(item: IEquipable, container: IContainer): void{

    // }
}