import { Component, OnInit } from '@angular/core';
import { InfotecaService } from 'src/app/services/infoteca.service';  
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-memoriales-anuales',
  templateUrl: './memoriales-anuales.component.html',
  styleUrls: ['./memoriales-anuales.component.css'] 
})
export class MemorialesAnualesComponent implements OnInit {
  ListMemoriales: any = [];
  ListMemorialesPaginate: any = [];
  totalItems: number=0;
  page: number=1;
  cantidadPorPagina: number=12;
  previousPage: number=1;
  showPagination: boolean=false;
  totalItemsPage: number=0;
  ListtotalItemsPage: any = [];
  constructor(private infocetaServices: InfotecaService,
    private spinnerService: NgxSpinnerService ) {
     
     }

  ngOnInit(): void {
    this.spinnerService.show();
    this.page =1;
	  this.previousPage =1;
    this.infocetaServices.getListMemoriales().subscribe(
      (result: any) => {
        console.log(result[0].data);         
        if ((!result  ) || (result &&   result.length ==0)) {
          this.ListMemoriales = [];
          this.showPagination = false;
        }
        else {
          this.ListMemoriales = result[0].data;
          this.totalItems = this.ListMemoriales.length;
          this.showPagination = true;
          this.totalItemsPage=Math.ceil(this.totalItems/this.cantidadPorPagina);
          for (var _i = 0; _i < this.totalItemsPage; _i++) {
            this.ListtotalItemsPage.push(_i+1);
          }
          console.log(this.totalItemsPage);
        }
        this.ListMemorialesPaginate=this.ListMemoriales.slice(0, this.cantidadPorPagina);
      }
    );
    this.spinnerService.hide();
  }
  paginar(paginacion: any) { 
    let actual = this.cantidadPorPagina * (paginacion-1);
    this.ListMemorialesPaginate = this.ListMemoriales.slice(actual,paginacion*this.cantidadPorPagina);
    this.page =paginacion; 
  }
  anterior() {
    if(this.page-1>=1){
    this.page -=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListMemorialesPaginate = this.ListMemoriales.slice(actual,this.page*this.cantidadPorPagina);   
    }
    console.log(this.page);
  }
  siguiente() {
    if(this.page+1<=this.totalItemsPage){
    this.page +=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListMemorialesPaginate = this.ListMemoriales.slice(actual,this.page*this.cantidadPorPagina);    
    }
    console.log(this.page);
  }
}
