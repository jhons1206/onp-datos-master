import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-asegura',
  templateUrl: './asegura.component.html',
  styleUrls: ['./asegura.component.css']
})
export class AseguraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (($) => {      
      $(document).ready(() => {
        $("html, body").stop().animate({scrollTop: 0,},0);
        $("#carrusel-afiliados").slick({
          dots: false,
          slidesToShow: 5,
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

      });

        if (window.matchMedia("(max-width: 768px)").matches) {

            $("#pension-carrusel").slick({
              dots: false,
              slidesToShow: 1,
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

          $("#retire65-carrusel").slick({
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

        $("#retire-especial-carrusel").slick({
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          lazyLoad: 'ondemand',
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
