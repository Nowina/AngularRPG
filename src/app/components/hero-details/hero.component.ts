import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Hero } from 'src/app/models/hero/hero';
import { HeroRepository } from 'src/app/data-source/repositories/hero-repository';
import { DataTableDirective } from 'angular-datatables';
import { Item } from 'src/app/models/item/item';
import { ItemRepository } from 'src/app/data-source/repositories/item-repository';
import { ItemStatus } from 'src/app/models/enums/item-status';
import { ItemType } from 'src/app/models/enums/item-type';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent{
  public selectedItem: Item;
  
  public onItemSelected(item: Item): void{
    this.selectedItem = item;
  }
  
}
