import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Item } from 'src/app/models/item/item';
import { Hero } from 'src/app/models/hero/hero';
import { HeroRepository } from 'src/app/data-source/repositories/hero-repository';
import { ItemType } from 'src/app/models/enums/item-type';
import { ItemStatus } from 'src/app/models/enums/item-status';
import { EquipmentViewerController } from 'src/app/controllers/equipment-viewer.controller';

@Component({
  selector: 'app-backpack-items-list',
  templateUrl: './backpack-items-list.component.html',
  styleUrls: ['./backpack-items-list.component.css']
})
export class BackpackItemsListComponent implements OnInit {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<void> = new Subject<void>();
  public dtInstance: DataTables.Api;

  @ViewChild(DataTableDirective, { static: true })
  private dataTableElement: DataTableDirective;

  tableData: Item[];
  private hero: Hero;

  constructor(private readonly heroRepository: HeroRepository, private readonly equipmentViewController: EquipmentViewerController) { }

  ngOnInit(): void {
    this.loadData();
    this.initTable();
  }

  private loadData(): void {
    this.hero = this.heroRepository.getHero();
    this.tableData = this.hero.equipment.container.items as Item[];
  }

  private async initTable(): Promise<void> {
    this.setTableOptions();
    this.dtInstance = await this.dataTableElement.dtInstance;
    this.dtOptions.data = this.tableData;
    this.dtTrigger.next();
  }

  private setTableOptions(): void {
    let options: DataTables.Settings = {};
    options.columns = [
      { name: "name", title: "Name", data: "name" },
      { name: "level", title: "Level", data: "level" },
      { name: "weight", title: "Weight", data: "weight" },
      { name: "type", title: "Type", data: "type", render: (data, type, row, meta) => ItemType[data] },
      { name: "status", title: "Status", data: "status", render: (data, type, row, meta) => ItemStatus[data] }
    ]

    options.rowCallback = (row: Node, data: any[] | Object, index: number) => {
      const self = this;
      $('td', row).unbind('mouseenter');
      $('td', row).bind('mouseenter', () => {
        self.equipmentViewController.selectedItem = data as Item;
      });
      return row;
    }

    this.dtOptions = options;
  }
}
