import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-enterate',
  templateUrl: './enterate.component.html',
  styleUrls: ['./enterate.component.css'],
})
export class EnterateComponent {
  gallery: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.gallery = [
      {
        id: 1,
        img: './assets/images/SVG/list-icon-calendario.svg',
        text: 'Cobrarás tu pensión todos los meses durante toda tu vida',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      {
        id: 2,
        img: './assets/images/SVG/list-icon-hand.svg',
        text: 'Tu pensión nunca será menos a S/ 500 si aportaste 20 años o más',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      {
        id: 3,
        img: './assets/images//SVG/list-icon-calendario-dos.svg',
        text: 'Cobrarás pensión adicional en julio y en diciembre',
        marginTop: '-0.8rem',
        marginBottom: '1.1rem',
      },
      {
        id: 4,
        img: './assets/images//SVG/list-icon-corazon.svg',
        text: 'Tendrás servicio de Salud en EsSalud',
        marginTop: '-2rem',
        marginBottom: '1rem',
      },
      {
        id: 5,
        img: './assets/images/SVG/list-icon-calendario.svg',
        text: 'Cobrarás tu pensión todos los meses durante toda tu vida',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      {
        id: 6,
        img: './assets/images/SVG/list-icon-hand.svg',
        text: 'Tu pensión nunca será menos a S/ 500 si aportaste 20 años o más',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      {
        id: 7,
        img: './assets/images//SVG/list-icon-calendario-dos.svg',
        text: 'Cobrarás pensión adicional en julio y en diciembre',
        marginTop: '-0.8rem',
        marginBottom: '1.1rem',
      },
      {
        id: 8,
        img: './assets/images//SVG/list-icon-corazon.svg',
        text: 'Tendrás servicio de Salud en EsSalud',
        marginTop: '-2rem',
        marginBottom: '1rem',
      },
    ];
  }
}
