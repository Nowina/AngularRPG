import { Item } from '../models/item/item';
import { Injectable } from '@angular/core';
@Injectable()
export class EquipmentViewerController {
    private _selectedItem: Item;
    

    get selectedItem(): Item{
        return this._selectedItem;
    }

    set selectedItem(newItem: Item){
        this._selectedItem = newItem;
    }
    public onSelectedItem(): void {

    }
    
    public isLoaded(): boolean {
        return this.selectedItem != null;
    }

}