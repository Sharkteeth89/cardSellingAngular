import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { CardService } from '../card.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  
  //cards = CARDS;
  
  selectedCard: Card;

  cards: Card[];
  
  constructor(private cardService: CardService, private messageService: MessageService) { }
  

  ngOnInit() {
    this.getCards();
  }


  
  onSelect(card: Card): void {
    this.selectedCard = card;
    this.messageService.add(`CardsComponent: Selected card id=${card.id}`);
    
  }

  getCards(): void {
    this.cardService.getCards()
        .subscribe(cards => this.cards = cards);
  }
}
