import { Component, OnInit } from '@angular/core';
import { Warrior, heroType} from "../../models/hero"
import { Weapon } from "../../models/item"
import { HeroFactory } from 'src/app/data-source/factories/hero-factory';
import { WarriorFactory } from 'src/app/data-source/factories/warrior-factory';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let hero = new WarriorFactory().create("JohnyBravo",1);
    console.log(hero);
  }

}
