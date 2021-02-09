import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-facil',
  templateUrl: './facil.component.html',
  styleUrls: ['./facil.component.css']
})

export class FacilComponent implements OnInit {

  gallery: any[] = [];
  gallery2: any[] = [];
  gallery3: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.gallery = [
      {
        id: 1,
        img: './assets/images/facil/icon-home-money.svg',
        text: 'Aunque ya no tengas un trabajo fijo, puedes seguir aportando para construir tu futura pensión.',
      },
      {
        id: 2,
        img: './assets/images/facil/icon-hand.svg',
        text: 'Tu futura pensión nunca será menor a S/ 500.',
      },
      {
        id: 3,
        img: './assets/images/facil/icon-alcancia.svg',
        text: 'Puedes mejorar el monto de tu futura pensión. Si ya realizas aportes obligatorios,puedes sumar aportes como independiente.',
      },
      {
        id: 4,
        img: './assets/images/facil/icon-prestamo.svg',
        text: 'Puedes pedir un préstamo por hasta 3 años (36 unidades de aporte) para acceder a tu pensión.',
      },
      {
        id: 5,
        img: './assets/images/facil/icon-users.svg',
        text: 'Tus familiares podrían tener una pensión cuando les faltes.',
      },
      {
        id: 6,
        img: './assets/images/facil/icon-viajes-extrangero.svg',
        text: 'Si viajas al extranjero, puedes sumar tus aportes realizados en Perú a los que realices allá para acceder a una pensión en ambos países. Mira la lista de países con los que tenemos convenio aquí.',
      },
      {
        id: 7,
        img: './assets/images/facil/icon-adelanto.svg',
        text: 'Puedes pagar por adelantado hasta 3 años (36 unidades de aporte) para acceder a tu pensión',
      },
      {
        id: 8,
        img: './assets/images/facil/icon-asesoria.svg',
        text: 'Puedes solicitar asesoría personalizada gratuita a través de cualquiera de nuestros canales oficiales.',
      },
    ];

    this.gallery2 = [
      {
        id: 1,
        img: './assets/images/facil/icon-pension-vida.svg',
        text: 'Cobrarás tu pensión todos los meses durante toda tu vida',
      },
      {
        id: 2,
        img: './assets/images/facil/icon-pension-julio.svg',
        text: 'Recibes pensión adicional en julio y en diciembre',
      },
      {
        id: 3,
        img: './assets/images/facil/icon-bonificaciones.svg',
        text: 'Puedes recibir bonificaciones automáticas junto con tu pensión',
      },
      {
        id: 4,
        img: './assets/images/facil/icon-essalud.svg',
        text: 'Tienes servicio de salud en EsSalud.',
      },
      {
        id: 5,
        img: './assets/images/facil/icon-home-user.svg',
        text: 'Puedes cobrar tu pensión sin salir de tu casa',
      },
      {
        id: 6,
        img: './assets/images/facil/icon-pension-pais.svg',
        text: 'Puedes solicitar cobrar tu pensión desde el país en el que te encuentres. Mira la lista de países con los que tenemos convenio aquí.',
      },
    ];

    this.gallery3 = [
      {
        id: 1,
        img: './assets/images/facil/icon-home-money-bolsa.svg',
        title: 'Incrementos',
        text: 'El monto de tu pensión puede aumentar bajo ciertas condiciones.',
      },
      {
        id: 2,
        img: './assets/images/facil/icon-bonificaciones.svg',
        title: 'Bonificaciones',
        text: 'Confirma si te corresponde alguna bonificación que se sume a tu pensión.',
      },
      {
        id: 3,
        img: './assets/images/facil/icon-beneficios-complementario.svg',
        title: 'Beneficios complementarios',
        text: 'Para las trabajadoras mineras y los trabajadores mineros.',
      },
    ];

    (($) => {      
      $(document).ready(() => {

        $("#carrusel-afiliados").slick({
          dots: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          responsive: [
              {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
              },
              {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
              }
            ]
        });

        $("#carrusel-pensionistas").slick({
          dots: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          responsive: [
              {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
              },
              {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
              }
            ]
        });

      });

        if (window.matchMedia("(max-width: 768px)").matches) {

          $("#carrusel-benefit").slick({
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
                }
            ]
        });

      }

    })(jQuery);

  }

}