import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { CardServiceService } from '../../card-service.service';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css'],
})
export class PageCardComponent implements OnInit {

  personnagesToDisplay: Card | undefined;

  //deux heures en secondes
  variableCompteur: number = 7200;
  //initialisation d'un compteur actif ou non
  compteurActif: boolean = false;
  //visualiser le temps restant
  compteurAffiche: string = '';

  //propriété pour stocker en tableau les cartes tirées
  history: Card[] = [];

  constructor(private cardsService: CardServiceService) {}

  ngOnInit(): void {
    //Récup en LS
    const stockCard = localStorage.getItem('Historique des cartes');
    if (stockCard) {
      this.history = JSON.parse(stockCard);
    }
  }

  //recup data api
  getRandomPersonnage() {
    if (!this.compteurActif) {
      this.cardsService.getPersonnage().subscribe((data: Card) => {
        console.log('Carte aléatoire récupérée: ' + JSON.stringify(data));
        this.personnagesToDisplay = data;

        // stock LS
        this.pushHistorique(data);
        this.lancerDecompte();
      });
    }
  }

  //Methode pour le décompte
  lancerDecompte() {
    //activer le compteur
    this.compteurActif = true;
    //créer un observable qui limite le nombre et la durée
    const timer$ = interval(1000).pipe(take(this.variableCompteur));
    //permettre les reactions aux valeurs de l'observable en tenant compte des const
    timer$.subscribe(
      (value) => {
        const remaining = this.variableCompteur - value;
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;
        //designer et afficher valeurs
        this.compteurAffiche = `${hours}h ${minutes}m ${seconds}s`;
      },
      (error) => console.error(error),
      () => {
        this.compteurActif = false;
        this.compteurAffiche = '';
      }
    );
  }

  //méthode d'insertion au LS
  pushHistorique(card: Card) {
    this.history.push(card);
    localStorage.setItem('Historique des cartes', JSON.stringify(this.history));
  }
}
