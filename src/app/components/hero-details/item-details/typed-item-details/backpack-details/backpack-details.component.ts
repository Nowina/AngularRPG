import { Component, OnInit, Input } from '@angular/core';
import { Backpack } from 'src/app/models/item/backpack.item';

@Component({
  selector: 'app-backpack-details',
  templateUrl: './backpack-details.component.html',
  styleUrls: ['./backpack-details.component.css']
})
export class BackpackDetailsComponent implements OnInit {
  @Input() displayedItem: Backpack;
  constructor() { }

  ngOnInit() {
  }

}
