import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardList: any[] = [
    {
      title: "Card One",
      text: "This is a body of a card and I am making this up.",
      imgSrc: "https://fakeimg.pl/600x400"
    },
    {
      title: "Card Two",
      text: "This is a body of a card and I am making this up.",
      imgSrc: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLwWqArGADUxDq6QprtIzsF82dMF.jpg"
    },
    {
      title: "Card Three",
      text: "This is a body of a card and I am making this up.",
      imgSrc: "https://fakeimg.pl/600x400"
    }
  ];

  games = this.data.games$;

  constructor(private data: DataService) {
    this.data.getAllGames();
  };
}