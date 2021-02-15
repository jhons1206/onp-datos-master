import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (($) => {   

    if (window.matchMedia("(max-width: 768px)").matches) {

        $("#increases-carrusel").slick({
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
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

      $("#bonuses-carrusel").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
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
    $(document).ready(() => {
      $("html, body").stop().animate({scrollTop: 0,},0);
    });

    })(jQuery);

  }

}
