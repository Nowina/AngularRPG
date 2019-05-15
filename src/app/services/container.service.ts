import { Item } from '../models/item/item';
import { IContainer } from '../models/interfaces/container';
import { IPickable } from '../models/interfaces/pickable';

export class IContainerService {
    constructor () {}

    public canPickItem(item: IPickable, container: IContainer): boolean {
        if ((container.currentItemsWeight + item.weight <= container.maxItemsWeight) && (item.pickFlag)) {
            return true;
        }
        else {
            return false;
        }
    }
    
    public addItemToContainer(item: IPickable, container: IContainer): void {
        if (this.canPickItem(item, container)) {
            container.items.push(item);
            container.currentItemsWeight += item.weight;
        }
    }

    public addItemsToContainer(items: IPickable[], container: IContainer): void {
        items.forEach(element => {
            if (this.canPickItem(element,container)){
                this.addItemToContainer(element,container);
            }
            else {
                new Error(`Cannot add ${element}, max weight reached`);
            }
        });
    }

    public checkIfContainsItem(item: IPickable, container: IContainer): boolean {
        return container.items.includes(item);
    }

    public removeFromContainer(item: IPickable, container: IContainer): void {
        if (!this.checkIfContainsItem(item, container)) {
            return;
        }

        let itemIndex = container.items.indexOf(item);
        container.items.splice(itemIndex, 1);
        container.currentItemsWeight -= item.weight;
    }

    public getItemsFromContainer(container: IContainer): IPickable[] {
        return container.items as Item[];
    }

}