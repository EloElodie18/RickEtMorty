import { Component, OnInit } from '@angular/core';

import { CardServiceService } from '../../card-service.service';
import { CardPersonnage } from '../../../models/cardPersonnage.model';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrl: './page-card.component.css'
})
export class PageCardComponent implements OnInit {

 personnagesToDisplay!: Card;

  constructor(private cardsService: CardServiceService) {}

  ngOnInit(): void {
    
  }

  getRandomPersonnage() {
    this.cardsService.getPersonnage().subscribe((data: CardPersonnage) => {
      console.log("recupe api" + JSON.stringify(data.results));
      this.personnagesToDisplay = data.results[0]; //ma methode qui random ce que je reçois
      console.log("Mon tableau complété" + JSON.stringify(this.personnagesToDisplay));
    });
  }

}
