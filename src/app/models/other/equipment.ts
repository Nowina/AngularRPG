import { IEquipment } from '../interfaces/equipment';
import { IEquipable } from '../interfaces/equipable';
import { ItemType } from '../enums/item-type';
import { IContainerHandler } from '../interfaces/container-handler';
import { IContainer } from '../interfaces/container';

export class Equipment implements IEquipment, IContainerHandler{
    public items: IEquipable[];    
    public filledSlots: Set<ItemType>;
    public maxLoad: number;
    public currentLoad: number;
    /**
     * Place for backpack
     */
    public container: IContainer;
}