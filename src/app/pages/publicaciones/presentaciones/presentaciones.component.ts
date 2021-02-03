import { Component, OnInit } from '@angular/core';
import { InfotecaService } from 'src/app/services/infoteca.service'; 
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-presentaciones',
  templateUrl: './presentaciones.component.html',
  styleUrls: ['./presentaciones.component.css']
})
export class PresentacionesComponent implements OnInit {
  ListPresentaciones: any = [];
  ListPresentacionesPaginate: any = [];
  totalItems: number=0;
  page: number=1;
  cantidadPorPagina: number=12;
  previousPage: number=1;
  showPagination: boolean=false;
  totalItemsPage: number=0;
  ListtotalItemsPage: any = [];
  constructor(private infocetaServices: InfotecaService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.page =1;
	  this.previousPage =1;
    this.infocetaServices.getListPresentaciones().subscribe(
      (result: any) => {
        console.log(result[0].data);         
        if ((!result) || (result && result.length ==0)) {
          this.ListPresentaciones = [];
          this.showPagination = false;
        }
        else {
          this.ListPresentaciones = result[0].data;
          this.totalItems = this.ListPresentaciones.length;
          this.showPagination = true;
          this.totalItemsPage=Math.ceil(this.totalItems/this.cantidadPorPagina);
          for (var _i = 0; _i < this.totalItemsPage; _i++) {
            this.ListtotalItemsPage.push(_i+1);
          }
          console.log(this.totalItemsPage);
        }
        this.ListPresentacionesPaginate=this.ListPresentaciones.slice(0, this.cantidadPorPagina);
      }
    );
    this.spinnerService.hide();
  }
  paginar(paginacion: any) { 
    let actual = this.cantidadPorPagina * (paginacion-1);
    this.ListPresentacionesPaginate = this.ListPresentaciones.slice(actual,paginacion*this.cantidadPorPagina);
    this.page =paginacion; 
  }
  anterior() {
    if(this.page-1>=1){
    this.page -=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListPresentacionesPaginate = this.ListPresentaciones.slice(actual,this.page*this.cantidadPorPagina);   
    }
    console.log(this.page);
  }
  siguiente() {
    if(this.page+1<=this.totalItemsPage){
    this.page +=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListPresentacionesPaginate = this.ListPresentaciones.slice(actual,this.page*this.cantidadPorPagina);    
    }
    console.log(this.page);
  }

}
