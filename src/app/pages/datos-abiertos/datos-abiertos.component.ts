import { Component } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-datos-abiertos',
    templateUrl: './datos-abiertos.component.html',
    styleUrls: ['./datos-abiertos.component.css']
})
export class DatosAbiertosComponent {

    ngOnInit(): void {

        (($) => {     
       
        $(document).ready(() => {
            $("html, body").stop().animate({scrollTop: 0,},0);
        });

        })(jQuery);

    }

}