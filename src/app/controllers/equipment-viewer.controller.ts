import { Item } from '../models/item/item';
import { Injectable } from '@angular/core';
@Injectable()
export class EquipmentViewerController {
    public selectedItem: Item;
    
    public isLoaded(): boolean {
        return this.selectedItem != null;
    }

    public onItemSelected(): void {
        
    }
}