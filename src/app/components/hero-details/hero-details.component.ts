import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Hero } from 'src/app/models/hero/hero';
import { HeroRepository } from 'src/app/data-source/repositories/hero-repository';
import { DataTableDirective } from 'angular-datatables';
import { Item } from 'src/app/models/item/item';
import { ItemRepository } from 'src/app/data-source/repositories/item-repository';
import { HeroType } from 'src/app/models/enums/hero-type';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<void> = new Subject<void>();
  public dtInstance: DataTables.Api;
  
  @ViewChild(DataTableDirective, { static: true })
  private dataTableElement: DataTableDirective;

  private tableData: Item[];
  private hero: Hero;
  constructor(private readonly itemRepository: ItemRepository) { }

  ngOnInit(): void {
    this.loadData();
    this.initTable();
    console.log(this.tableData);
    
  }

  private loadData(): void {
    this.tableData = this.itemRepository.getAll();
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
      {name: "type", title: "Type", data: "type", render: (data, type, row, meta) => HeroType[data]},
      {name: "status", title: "Status", data: "status" },
      {name: "owner", title: "Owner", data: "owner" }
    ]

    this.dtOptions = options;
  }
}
