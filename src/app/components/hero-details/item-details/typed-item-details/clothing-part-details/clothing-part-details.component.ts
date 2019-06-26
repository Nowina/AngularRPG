import { Component, OnInit, Input } from '@angular/core';
import { ClothingPart } from 'src/app/models/item/clothing-part.item';

@Component({
  selector: 'app-clothing-part-details',
  templateUrl: './clothing-part-details.component.html',
  styleUrls: ['./clothing-part-details.component.css']
})
export class ClothingPartDetailsComponent implements OnInit {
  @Input() displayedItem: ClothingPart;
  constructor() { }

  ngOnInit() {
  }

}
