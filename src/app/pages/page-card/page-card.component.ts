import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { CardServiceService } from '../../card-service.service';
import { CardPersonnage } from '../../../models/cardPersonnage.model';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css'],
})
export class PageCardComponent implements OnInit {
  personnagesToDisplay!: Card;
  countdownTime: number = 7200; // 2 hours in seconds
  countdownActive: boolean = false;
  countdownDisplay: string = '';

  constructor(private cardsService: CardServiceService) {}

  ngOnInit(): void {}

  getRandomPersonnage() {
    if (!this.countdownActive) {
      this.cardsService.getPersonnage().subscribe((data: Card) => {
        console.log('recupe api' + JSON.stringify(data));
        this.personnagesToDisplay = data; //ma methode qui random ce que je reçois
        console.log(
          'Mon tableau complété' + JSON.stringify(this.personnagesToDisplay)
        );
        this.startCountdown();
      });
    }
  }

  startCountdown() {
    this.countdownActive = true;
    const timer$ = interval(1000).pipe(take(this.countdownTime));
    timer$.subscribe(
      (value) => {
        const remaining = this.countdownTime - value;
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;
        this.countdownDisplay = `${hours}h ${minutes}m ${seconds}s`;
      },
      (error) => console.error(error),
      () => {
        this.countdownActive = false;
        this.countdownDisplay = '';
      }
    );
  }
}
