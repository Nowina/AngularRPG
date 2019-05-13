import { Item } from '../models/item/item';
import { IContainerHandler } from '../models/interfaces/container-handler';
import { IContainerService } from './container.service';
import { IPickable } from '../models/interfaces/pickable';
import { IContainer } from '../models/interfaces/container';

export class IContainerHandlerService {
    constructor(private containerService: IContainerService) { }

    public addContainerToHandler(container: IContainer, containerHandler: IContainerHandler): void{
        if (container.currentItemsWeight + container.containerWeight <= containerHandler.maxLoad) {
            containerHandler.container = container;
        }
    }

    public checkIfHandlerHasAContainer(containerHandler: IContainerHandler): boolean {
        return (containerHandler.container != null)
    }

    public canAddItem(item: IPickable, containerHandler: IContainerHandler): boolean{
        if ( !this.checkIfHandlerHasAContainer(containerHandler)){
            return false;
        }
        else if (containerHandler.currentLoad + item.weight <= containerHandler.maxLoad){
            return true;
        }
        else {
            return false;
        }
    }

    public addItemToContainer(item: IPickable, containerHandler: IContainerHandler): void {
        if (this.canAddItem(item, containerHandler)){
            this.containerService.addItemToContainer(item, containerHandler.container);
            containerHandler.currentLoad += item.weight;
        }    
    }

    public addItemsToContainer(items: IPickable[], containerHandler: IContainerHandler): void {
        items.forEach( element => {
            if (this.canAddItem(element,containerHandler)){
                this.addItemToContainer(element,containerHandler);
            }
        });
    }

    public checkIfContainsItem(item: IPickable, containerHandler: IContainerHandler): boolean {
        if ( !this.checkIfHandlerHasAContainer(containerHandler)){
            return false;
        }
        return this.containerService.checkIfContainsItem(item, containerHandler.container);
    }

    public getItemsFromContainer(containerHandler: IContainerHandler): IPickable[] {
        if ( !this.checkIfHandlerHasAContainer(containerHandler)){
            return;
        }
        return this.containerService.getItemsFromContainer(containerHandler.container);
    }

    public removeFromContainer(item: IPickable, containerHandler: IContainerHandler): void {
        if ( !this.checkIfHandlerHasAContainer(containerHandler)){
            return;
        }
        this.containerService.removeFromContainer(item, containerHandler.container);
        containerHandler.currentLoad -= item.weight;
    }


}