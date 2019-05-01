import { Repository } from './repository';
import { Item, itemType } from 'src/app/models/item';

export class ItemRepository extends Repository<Item>{
    public getByType(type : itemType){
        return this.items.filter(s => s.type == type);
    }
}