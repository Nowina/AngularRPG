import { Equipment } from 'src/app/models/other/equipment';
import { Hero } from 'src/app/models/hero/hero';
import { Injectable } from '@angular/core';
@Injectable()
export class EquipmentFactory {
    constructor (){}

    private fillBaseData(newEquipment: Equipment, owner: Hero){
        newEquipment.currentLoad = 0;
        newEquipment.maxLoad = owner.strength*(owner.level);
        newEquipment.items = [];
        newEquipment.filledSlots = new Set();
        newEquipment.container = null;
    }

    public createAddEquipment(owner: Hero){
        let newEquipment: Equipment = new Equipment;    
        this.fillBaseData(newEquipment, owner);
        owner.equipment = newEquipment;
    }
}