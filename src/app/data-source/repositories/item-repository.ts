import { Repository } from './repository';
import { Item } from 'src/app/models/item/item';
import { ItemType } from 'src/app/models/enums/item-type';

export class ItemRepository extends Repository<Item>{

    constructor() {
        super();
    }

    public getByType(type: ItemType): Item[] {
        return this.items.filter(s => s.type == type);
    }
}