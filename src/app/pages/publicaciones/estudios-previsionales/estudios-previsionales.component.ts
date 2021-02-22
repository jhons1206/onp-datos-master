import { Component, OnInit } from '@angular/core';
import { InfotecaService } from 'src/app/services/infoteca.service'; 
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from '../../../../environments/environment';
declare var jQuery: any;
@Component({
  selector: 'app-estudios-previsionales',
  templateUrl: './estudios-previsionales.component.html',
  styleUrls: ['./estudios-previsionales.component.css']
})
export class EstudiosPrevisionalesComponent implements OnInit {
  ListEstudios: any = [];
  ListEstudiosPaginate: any = [];
  totalItems: number=0;
  page: number=1;
  cantidadPorPagina: number=12;
  previousPage: number=1;
  showPagination: boolean=false;
  totalItemsPage: number=0;
  ListtotalItemsPage: any = [];
  ListResult:any = [];
  id:string="";
  Title:string="";
  urlFiles:string="";
  constructor(private infocetaServices: InfotecaService,
    private activateRoute: ActivatedRoute,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.spinnerService.show();
      this.id = params['id'] 
      this.page =1;
      this.previousPage =1;
      this.infocetaServices.getListEstudiosPrevisionales().subscribe(
        (result: any) => {        
          if ((!result) || (result && result.length ==0)) {
            this.ListEstudios = [];
            this.showPagination = false;
          }
          else {
            this.ListEstudios = result[0].data;
            this.urlFiles=environment.baseUrlFiles+'Biblioteca-Estudios-Previsionales/';
           
            this.totalItems = this.ListEstudios.length;
            this.showPagination = true;
            this.totalItemsPage=Math.ceil(this.totalItems/this.cantidadPorPagina);
            this.ListtotalItemsPage=[];
            for (var _i = 0; _i < this.totalItemsPage; _i++) {
              this.ListtotalItemsPage.push(_i+1);
            } 
          }
          this.ListEstudiosPaginate=this.ListEstudios.slice(0, this.cantidadPorPagina);
        }
      );
      this.spinnerService.hide();
    });
    (($) => {   
      $(document).ready(() => {
        $("html, body").stop().animate({scrollTop: 0,},0);
      });
    })(jQuery);    
  }
  paginar(paginacion: any) { 
    let actual = this.cantidadPorPagina * (paginacion-1);
    this.ListEstudiosPaginate = this.ListEstudios.slice(actual,paginacion*this.cantidadPorPagina);
    this.page =paginacion; 
  }
  anterior() {
    if(this.page-1>=1){
    this.page -=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListEstudiosPaginate = this.ListEstudios.slice(actual,this.page*this.cantidadPorPagina);   
    } 
  }
  siguiente() {
    if(this.page+1<=this.totalItemsPage){
    this.page +=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListEstudiosPaginate = this.ListEstudios.slice(actual,this.page*this.cantidadPorPagina);    
    } 
  }

}
