import { Component, OnInit } from '@angular/core';
import { PersonajesServiceService } from '../../services/personajes-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  personajes: any;
  constructor(private personajeService: PersonajesServiceService) {}

  ngOnInit(): void {
    this.personajeService.ObtenerPersonaje().subscribe((resp) => {
      this.personajes = resp;
      console.log(this.personajes);
      console.log(this.personajes);
    });
  }
}
