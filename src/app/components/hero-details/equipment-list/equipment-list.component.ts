import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Item } from 'src/app/models/item/item';
import { Hero } from 'src/app/models/hero/hero';
import { ItemType } from 'src/app/models/enums/item-type';
import { ItemStatus } from 'src/app/models/enums/item-status';
import { HeroRepository } from 'src/app/data-source/repositories/hero-repository';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<void> = new Subject<void>();
  public dtInstance: DataTables.Api;

  @Output() 
  public onItemSelected = new EventEmitter<Item>(); 
  
  @ViewChild(DataTableDirective, { static: true })
  private dataTableElement: DataTableDirective;
  tableData: Item[];

  private hero: Hero;
  constructor(private readonly heroRepository: HeroRepository) { }

  ngOnInit(): void {
    this.loadData();
    this.initTable();
  }

  private loadData(): void {
    this.hero = this.heroRepository.getHero();
    this.tableData = this.hero.equipment.items as Item[];
    let backpack = this.hero.equipment.container as unknown;
    this.tableData.push(backpack as Item);
  }

  private async initTable(): Promise<void>{
    this.setTableOptions();
    this.dtInstance = await this.dataTableElement.dtInstance;
    this.dtOptions.data = this.tableData;
    this.dtTrigger.next();
  }

  private setTableOptions(): void{
    let options: DataTables.Settings = {};
    options.columns = [
      {name: "name", title: "Name", data: "name" },
      {name: "level", title: "Level", data: "level"},
      {name: "weight", title: "Weight", data: "weight" },
      {name: "type", title: "Type", data: "type", render: (data, type, row, meta) => ItemType[data]},
      {name: "status", title: "Status", data: "status",render: (data, type, row, meta) => ItemStatus[data] }
    ]
    options.rowCallback = (row: Node, data: any[] | Object, index: number) => {
      const self = this;
      $('td', row).unbind('click');
      $('td', row).bind('click', () => {
        self.onItemSelected.emit(data as Item);
      });
      return row;
    }

    this.dtOptions = options;
  }
}
