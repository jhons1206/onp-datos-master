import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-afp',
  templateUrl: './afp.component.html',
  styleUrls: ['./afp.component.css']
})
export class AfpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (($) => { 
      $(document).ready(() => {
        $("html, body").stop().animate({scrollTop: 0,},0);
      });
    if (window.matchMedia("(max-width: 768px)").matches) {

      $("#bonus-carrusel").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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

    $("#pension-carrusel").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
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

  })(jQuery);

  }
}
