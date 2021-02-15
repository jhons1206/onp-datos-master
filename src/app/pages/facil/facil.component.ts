import { Component, Inject, OnInit,OnDestroy  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AfiliadosServices } from 'src/app/services/afiliados.services';
import { PensionistasServices } from 'src/app/services/pensionistas.services'; 
declare var jQuery: any;
//declare function setPosition(id:any):any;
@Component({
  selector: 'app-facil',
  templateUrl: './facil.component.html',
  styleUrls: ['./facil.component.css']
})

export class FacilComponent implements OnInit,OnDestroy  {
  TotalPensionista:number =0;
  TotalAfiliados:number =0;
  TotalTrasladados:number =0;
  id:string="";
  // gallery: any[] = [];
  // gallery2: any[] = [];
  // gallery3: any[] = [];
  interval: any;
  confirmRender:boolean=false;
  constructor(private afiliadosServices: AfiliadosServices,
    private pensionistaServices: PensionistasServices,
    private activateRoute: ActivatedRoute, 
    ) {  }
     
    
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);

      (($) => {      
        $(document).ready(() => {
          //$("html, body").stop().animate({scrollTop: 0,},0);
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
  
          $("#carrusel-pensionistas").slick({
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
        if(this.id!=""){
          //setPosition(this.id);
          this.interval = setInterval(() => {
            if(!this.confirmRender){
            console.log('fffffffff');
            $('#btn-'+this.id+'').click(); 
            this.confirmRender=true;
            }
          }, 1000);
          
          //window.attachEvent('onload',$('#btn-'+this.id+'').click());
          //window.onload = $('#btn-'+this.id+'').click();
          //$("body").attr("onload", "$('#btn-"+this.id+"').click()");
          //$("body").attr("onload", "alert('gggg')");
        } 
        if (window.matchMedia("(max-width: 768px)").matches) {
  
            $("#carrusel-benefit").slick({
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
  
          $("#carrusel-family").slick({
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
                    slidesToShow: 1,
                }
                }
            ]
        });
  
        }
  
      })(jQuery);


    });
    // this.gallery = [
    //   {
    //     id: 1,
    //     img: './assets/images/facil/icon-home-money.svg',
    //     text: 'Aunque ya no tengas un trabajo fijo, puedes seguir aportando para construir tu futura pensión.',
    //   },
    //   {
    //     id: 2,
    //     img: './assets/images/facil/icon-hand.svg',
    //     text: 'Tu futura pensión nunca será menor a S/ 500.',
    //   },
    //   {
    //     id: 3,
    //     img: './assets/images/facil/icon-alcancia.svg',
    //     text: 'Puedes mejorar el monto de tu futura pensión. Si ya realizas aportes obligatorios,puedes sumar aportes como independiente.',
    //   },
    //   {
    //     id: 4,
    //     img: './assets/images/facil/icon-prestamo.svg',
    //     text: 'Puedes pedir un préstamo por hasta 3 años (36 unidades de aporte) para acceder a tu pensión.',
    //   },
    //   {
    //     id: 5,
    //     img: './assets/images/facil/icon-users.svg',
    //     text: 'Tus familiares podrían tener una pensión cuando les faltes.',
    //   },
    //   {
    //     id: 6,
    //     img: './assets/images/facil/icon-viajes-extrangero.svg',
    //     text: 'Si viajas al extranjero, puedes sumar tus aportes realizados en Perú a los que realices allá para acceder a una pensión en ambos países. Mira la lista de países con los que tenemos convenio aquí.',
    //   },
    //   {
    //     id: 7,
    //     img: './assets/images/facil/icon-adelanto.svg',
    //     text: 'Puedes pagar por adelantado hasta 3 años (36 unidades de aporte) para acceder a tu pensión',
    //   },
    //   {
    //     id: 8,
    //     img: './assets/images/facil/icon-asesoria.svg',
    //     text: 'Puedes solicitar asesoría personalizada gratuita a través de cualquiera de nuestros canales oficiales.',
    //   },
    // ];

    // this.gallery2 = [
    //   {
    //     id: 1,
    //     img: './assets/images/facil/icon-pension-vida.svg',
    //     text: 'Cobrarás tu pensión todos los meses durante toda tu vida',
    //   },
    //   {
    //     id: 2,
    //     img: './assets/images/facil/icon-pension-julio.svg',
    //     text: 'Recibes pensión adicional en julio y en diciembre',
    //   },
    //   {
    //     id: 3,
    //     img: './assets/images/facil/icon-bonificaciones.svg',
    //     text: 'Puedes recibir bonificaciones automáticas junto con tu pensión',
    //   },
    //   {
    //     id: 4,
    //     img: './assets/images/facil/icon-essalud.svg',
    //     text: 'Tienes servicio de salud en EsSalud.',
    //   },
    //   {
    //     id: 5,
    //     img: './assets/images/facil/icon-home-user.svg',
    //     text: 'Puedes cobrar tu pensión sin salir de tu casa',
    //   },
    //   {
    //     id: 6,
    //     img: './assets/images/facil/icon-pension-pais.svg',
    //     text: 'Puedes solicitar cobrar tu pensión desde el país en el que te encuentres. Mira la lista de países con los que tenemos convenio aquí.',
    //   },
    // ];

    // this.gallery3 = [
    //   {
    //     id: 1,
    //     img: './assets/images/facil/icon-home-money-bolsa.svg',
    //     title: 'Incrementos',
    //     text: 'El monto de tu pensión puede aumentar bajo ciertas condiciones.',
    //   },
    //   {
    //     id: 2,
    //     img: './assets/images/facil/icon-bonificaciones.svg',
    //     title: 'Bonificaciones',
    //     text: 'Confirma si te corresponde alguna bonificación que se sume a tu pensión.',
    //   },
    //   {
    //     id: 3,
    //     img: './assets/images/facil/icon-beneficios-complementario.svg',
    //     title: 'Beneficios complementarios',
    //     text: 'Para las trabajadoras mineras y los trabajadores mineros.',
    //   },
    // ];




    

    this.afiliadosServices.getListAfiliadosAll().subscribe(
      (result: any) => {
        if ((!result) || (result && result.length ==0)|| (result && result.length ==0 && result.ResultTotal && result.ResultTotal.length ==0)) {
          this.TotalAfiliados = 0; 
        }
        else {        
          this.TotalAfiliados = result.ResultTotal[0].Total;
           
        }
      });
      this.pensionistaServices.getListPensionistaAll().subscribe(
        (result: any) => {
          if ((!result) || (result && result.length ==0)|| (result && result.length ==0 && result.ResultTotal && result.ResultTotal.length ==0)) {
            this.TotalPensionista = 0; 
          }
          else {        
            this.TotalPensionista = result.ResultTotal[0].Total;
             
          }
        });
        this.pensionistaServices.getListTrasladadosAll().subscribe(
          (result: any) => {
            if ((!result) || (result && result.length ==0)|| (result && result.length ==0 && result.ResultTotal && result.ResultTotal.length ==0)) {
              this.TotalTrasladados = 0; 
            }
            else {        
              this.TotalTrasladados = result.ResultTotal[0].Total;
               
            }
          });


  }
  ngOnDestroy() { 
    clearInterval(this.interval);
  }
}