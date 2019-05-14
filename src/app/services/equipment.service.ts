import { IEquipable } from '../models/interfaces/equipable';
import { IEquipment } from '../models/interfaces/equipment';
import { Item } from '../models/item/item';
import { ItemType } from '../models/enums/item-type';
import { IContainerService } from './container.service';
import { IPickable } from '../models/interfaces/pickable';
import { Backpack } from '../models/item/backpack.item';

export class IEquipmentService {
    constructor (private containerService: IContainerService) {}

    public canEquipItem(item: IEquipable, equipment: IEquipment): boolean {
        if (equipment.filledSlots.has(item.type)){
            return false;
        }
        else if (equipment.currentLoad + item.weight <= equipment.maxLoad){
            return true;
        }
        else {
            return false;
        }
    }
    
    public addItemToEquipment(item: IEquipable, equipment: IEquipment): void {
        if (this.canEquipItem(item, equipment)) {

            if (item.type == ItemType.Backpack) {
                let backpack = item as Backpack;
                equipment.container = backpack;
            }
            else {
                equipment.items.push(item);
            }
            equipment.currentLoad += item.weight;
            equipment.filledSlots.add(item.type);
        }
    }

    public addItemsToEquipment(items: IEquipable[], equipment: IEquipment): void {
        items.forEach(element => {
            if (this.canEquipItem(element,equipment)){
                this.addItemToEquipment(element,equipment);
            }
            else {
                new Error(`Cannot add ${element}, max weight reached`);
            }
        });
    }

    public checkIfContainsItem(item: IEquipable, equipment: IEquipment): boolean {
        return equipment.filledSlots.has(item.type);
    }

    public removeFromEquipment(item: IEquipable, equipment: IEquipment): void {
        if (!this.checkIfContainsItem(item, equipment)) {
            return;
        }
        let itemIndex = equipment.items.indexOf(item);
        equipment.items.splice(itemIndex, 1);
        equipment.currentLoad -= item.weight;
        equipment.filledSlots.delete(item.type);
    }

    public getItemsFromEquipment(equipment: IEquipment): IEquipable[] {
        return equipment.items as Item[];
    }


}