import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/data-source/seed/seed';
import { SquareMap } from 'src/app/models/map/square-map';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let seed: Seed = new Seed();
    let map: SquareMap = seed.seedMap();
    console.log(map);
  }

}
