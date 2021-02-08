import { Component, OnInit } from '@angular/core';
import { InfotecaService } from 'src/app/services/infoteca.service'; 
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-informes-institucionales',
  templateUrl: './informes-institucionales.component.html',
  styleUrls: ['./informes-institucionales.component.css']
})
export class InformesInstitucionalesComponent implements OnInit {
  ListInformes: any = [];
  ListInformesPaginate: any = [];
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
      this.infocetaServices.getListInformes().subscribe(
        (result: any) => {        
          if ((!result) || (result && result.length ==0)) {
            this.ListInformes = [];
            this.showPagination = false;
          }
          else {
            this.ListResult=result.filter((x: { typeCode: string; })=>x.typeCode==this.id);
            this.Title=this.ListResult[0].type;
            this.urlFiles=environment.baseUrlFiles+'Informes-Respuestas-Institucionales/'+(this.Title.replace(' ','-')).replace('í','i')+'/';
            this.ListInformes = this.ListResult[0].data;
            this.totalItems = this.ListInformes.length;
            this.showPagination = true;
            this.totalItemsPage=Math.ceil(this.totalItems/this.cantidadPorPagina);
            this.ListtotalItemsPage=[];
            for (var _i = 0; _i < this.totalItemsPage; _i++) {
              this.ListtotalItemsPage.push(_i+1);
            }
            console.log(this.totalItemsPage);
          }
          this.ListInformesPaginate=this.ListInformes.slice(0, this.cantidadPorPagina);
        }
      );
      this.spinnerService.hide();
    });    
  }
  paginar(paginacion: any) { 
    let actual = this.cantidadPorPagina * (paginacion-1);
    this.ListInformesPaginate = this.ListInformes.slice(actual,paginacion*this.cantidadPorPagina);
    this.page =paginacion; 
  }
  anterior() {
    if(this.page-1>=1){
    this.page -=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListInformesPaginate = this.ListInformes.slice(actual,this.page*this.cantidadPorPagina);   
    }
    console.log(this.page);
  }
  siguiente() {
    if(this.page+1<=this.totalItemsPage){
    this.page +=1; 
    let actual = this.cantidadPorPagina * (this.page-1); 
    this.ListInformesPaginate = this.ListInformes.slice(actual,this.page*this.cantidadPorPagina);    
    }
    console.log(this.page);
  }

}
