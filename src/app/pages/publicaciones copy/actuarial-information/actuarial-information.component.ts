import { Component, OnInit } from '@angular/core';
import { InfotecaService } from 'src/app/services/infoteca.service'; 
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-actuarial-information',
  templateUrl: './actuarial-information.component.html',
  styleUrls: ['./actuarial-information.component.css']
})
export class ActuarialInformationComponent implements OnInit {
  ListActuarial: any = [];
  ListActuarialPaginate: any = [];
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
      this.infocetaServices.getListActuarial().subscribe(
        (result: any) => {
          
          if ((!result && !result) || (result && result && result.length ==0)) {
            this.ListActuarial = [];
            this.showPagination = false;
          }
          else {
            
            this.ListResult=result.filter((x: { typeCode: string; })=>x.typeCode==this.id);
            this.Title=this.ListResult[0].type;
            this.urlFiles=environment.baseUrlFiles+'Informacion-actuarial/'+(((this.Title.replace(' ','-')).replace('á','a')).replace('í','i')).replace('é','e')+'/';
            this.ListActuarial = this.ListResult[0].data;
            this.totalItems = this.ListActuarial.length;
            this.showPagination = true;
            this.totalItemsPage=Math.ceil(this.totalItems/this.cantidadPorPagina);
            this.ListtotalItemsPage=[];
            for (var _i = 0; _i < this.totalItemsPage; _i++) {
              this.ListtotalItemsPage.push(_i+1);
            }
            console.log(this.totalItemsPage);
          }
          this.ListActuarialPaginate=this.ListActuarial.slice(0, this.cantidadPorPagina);
        }
      );
      this.spinnerService.hide();
    });
    
  }
  paginar(paginacion: any) { 
    let actual = this.cantidadPorPagina * (paginacion-1);
    this.ListActuarialPaginate = this.ListActuarial.slice(actual,paginacion*this.cantidadPorPagina);
    this.page =paginacion; 
  }
  anterior() {
    if(this.page-1>=1){
    this.page -=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListActuarialPaginate = this.ListActuarial.slice(actual,this.page*this.cantidadPorPagina);   
    }
    console.log(this.page);
  }
  siguiente() {
    if(this.page+1<=this.totalItemsPage){
    this.page +=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListActuarialPaginate = this.ListActuarial.slice(actual,this.page*this.cantidadPorPagina);    
    }
    console.log(this.page);
  }


}
