import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.css']
})
export class FinanciamientoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (($) => {    
      $(document).ready(() => {
        $("html, body").stop().animate({scrollTop: 0,},0);
      });
  
      })(jQuery);
  }

}
