import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  private mult10 = 10;
  cards: any[] = [
    {
      title: 'Example title',
      image:
        'https://images.unsplash.com/photo-1659355110966-42fe631ffb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Douglas  Pace',
    },
    {
      title: 'Example title',
      image:
        'https://images.unsplash.com/photo-1659355110966-42fe631ffb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Mcleod  Mueller',
    },
    {
      title: 'Example title',
      image:
        'https://images.unsplash.com/photo-1659355110966-42fe631ffb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Day  Meyers',
    },
    {
      title: 'Example title',
      image:
        'https://images.unsplash.com/photo-1659355110966-42fe631ffb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Aguirre  Ellis',
    },
    {
      title: 'Example title',
      image:
        'https://images.unsplash.com/photo-1659355110966-42fe631ffb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Cook  Tyson',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
