import { Component, OnInit } from '@angular/core';
import { HeroRepository } from 'src/app/data-source/repositories/hero-repository';
import { Hero } from 'src/app/models/hero/hero';
import { HeroType } from 'src/app/models/enums/hero-type';
import { Mage } from 'src/app/models/hero/mage';
import { Warrior } from 'src/app/models/hero/warrior';
import { Rogue } from 'src/app/models/hero/rogue';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css']
})
export class HeroInfoComponent implements OnInit {

  constructor(private readonly heroRepository: HeroRepository) { }
  
  private hero: Hero;

  ngOnInit() {
    switch (this.heroRepository.getHero().heroType) {
      case HeroType.Mage:
        this.hero = this.heroRepository.getHero() as Mage;
        break;
      case HeroType.Warrior:
        this.hero = this.heroRepository.getHero() as Warrior;
        break;
      case HeroType.Rogue:
        this.hero = this.heroRepository.getHero() as Rogue;
        break;
    }
  }

}
