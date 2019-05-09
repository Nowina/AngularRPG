import { Item } from '../models/item/item';
import { IContainer } from '../models/interfaces/container';
import { IPickable } from '../models/interfaces/pickable';

export class IContainerService {

    public canPickItem(item: IPickable, container: IContainer): boolean {
        if ((container.currentCapacity + 1 <= container.maxCapacity) && (item.pickFlag)) {
            return true;
        }
        else {
            return false;
        }
    }

    public canPickItems(items: IPickable[], container: IContainer): boolean{
        if ( (container.maxCapacity - container.currentCapacity >= items.length) 
        && items.every( (s) => this.canPickItem(s,container))) {
            return true;
        }
        else {
            return false;
        }
    }

    public addItemToContainer(item: IPickable, container: IContainer): void {
        if (this.canPickItem(item, container)) {
            container.items.push(item);
            container.currentCapacity++;
        }
    }

    public addItemsToContainer(items: IPickable[], container: IContainer): void {
        if (this.canPickItems(items, container)) {
            items.forEach((s) => container.items.push(s));
            container.currentCapacity += items.length;
        }
    }

    public checkIfContainsItem(item: IPickable, container: IContainer): boolean {
        if (container.items.includes(item)) {
            return true;
        }
        else {
            return false;
        }
    }

    public removeFromContainer(item: IPickable, container: IContainer): void {
        if (this.checkIfContainsItem(item, container)) {
            let itemIndex = container.items.indexOf(item);
            container.items.splice(itemIndex, 1);
            container.currentCapacity--;
        }
    }

    public getItemsFromContainer(container: IContainer): IPickable[] {
        return container.items as Item[];
    }

}