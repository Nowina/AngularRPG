import { Item } from '../models/item/item';
import { IContainerHandler } from '../models/interfaces/container-handler';

export class ContainerHandlerService {
    public canPickItem(item: Item, containerHandler: IContainerHandler){
        return containerHandler.currentCapacity + 1

    }
}