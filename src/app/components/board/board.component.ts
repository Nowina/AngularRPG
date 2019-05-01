import { Component, OnInit } from '@angular/core';
import { Warrior, heroType} from "../../models/hero"
import { Weapon } from "../../models/item"
import { HeroFactory } from 'src/app/data-source/factories/hero/hero-factory';
import { WarriorFactory } from 'src/app/data-source/factories/hero/warrior-factory';
import { MagerFactory } from 'src/app/data-source/factories/hero/mage-factory';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    let hero = new MagerFactory().create("JohnyBravo", 1);
    console.log(hero);
    
  }

}
