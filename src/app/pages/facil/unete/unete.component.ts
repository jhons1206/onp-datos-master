import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.css']
})
export class UneteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    

    (($) => {  

      $(document).ready(() => {
        $("html, body").stop().animate({scrollTop: 0,},0);
      });

      $("#contribution-carrusel").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        prevArrow: '.arrow-previus1',
        nextArrow: '.arrow-next1',
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
      
      if (window.matchMedia("(max-width: 768px)").matches) {

        $("#join-carrusel").slick({
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          prevArrow: '.arrow-previus2',
          nextArrow: '.arrow-next2',
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
