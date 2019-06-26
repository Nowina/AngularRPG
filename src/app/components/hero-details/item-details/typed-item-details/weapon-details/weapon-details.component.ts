import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from 'src/app/models/item/weapon.item';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.css']
})
export class WeaponDetailsComponent implements OnInit {
  @Input() displayedItem: Weapon;
  constructor() { }

  ngOnInit() {
  }

}
