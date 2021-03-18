import { Component } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-publicaciones',
    templateUrl: './publicaciones.component.html',
    styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent {

    ngOnInit(): void {

        (($) => {     
       
        $(document).ready(() => {
            $("html, body").stop().animate({scrollTop: 0,},0);
        });

        })(jQuery);

    }
}