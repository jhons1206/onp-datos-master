import { Component, OnInit } from '@angular/core';
import { PensionistasServices } from 'src/app/services/pensionistas.services';
import { NgxSpinnerService } from "ngx-spinner";
declare var jQuery: any; 
@Component({
  selector: 'app-pensionistas',
  templateUrl: './pensionistas.component.html',
  styleUrls: ['./pensionistas.component.css']
})
export class PensionistasComponent implements OnInit {
  dataTotalpensionitas: any = [];
  ListDepartament: any = [];
  TotalGeneral:number =0;
  TotalPensionista:number =0;
  TotalBeneficiario:number =0;
  PorcentajeMujer:number =0;
  PorcentajeHombre:number =0;
  ListEdad: any=[];
  ListEstadoCivil: any=[];
  PorcentajeJubilacion:number =0;
  PorcentajeDiscapacidad:number =0;
  PorcentajeViudez:number =0;
  PorcentajeOrfandad:number =0;
  PorcentajeAscendencia:number =0;
  iddepartament: string = "";  
  TitleDepartemento:string="PENSIONISTAS Y BENEFICIARIAS/OS";
  TotalMujer:number =0;
  TotalHombre:number =0;
  TotalJubilacion:number =0;
  TotalDiscapacidad:number =0;
  TotalViudez:number =0;
  TotalOrfandad:number =0;
  TotalAscendencia:number =0;
  showTitle:boolean=true;
  static iddepartament: any;
  constructor(private pensionistaServices: PensionistasServices,
  private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.pensionistaServices.getListUbigeoById().subscribe(
      (result: any) => {
        this.ListDepartament = result.Result;
      }
    );
    this.listData("");
    
  }
  private listData(id:string){
    this.pensionistaServices.getListPensionistaById(id).subscribe(
      (result: any) => {
        if ((!result) || (result && result.length ==0)) {
          this.dataTotalpensionitas = []; 
        }
        else {        
          this.dataTotalpensionitas = result.ResultTotal;
          this.TotalGeneral=this.dataTotalpensionitas[0].Total;
          this.TotalPensionista=this.dataTotalpensionitas[0].TotalPensionista;
          this.TotalBeneficiario=this.dataTotalpensionitas[0].TotalBeneficiario;

          this.PorcentajeMujer=result.ResultGeneroTotal.filter((x: { Genero: string; })=>x.Genero=='Mujeres')[0].TotalPorcentaje;
          this.PorcentajeHombre=result.ResultGeneroTotal.filter((x: { Genero: string; })=>x.Genero=='Hombres')[0].TotalPorcentaje;
          
          this.PorcentajeJubilacion=result.ResultTipoTotal.filter((x: { TipoPrestacion: string; })=>x.TipoPrestacion=='Jubilación')[0].TotalPorcentaje;
          this.PorcentajeDiscapacidad=result.ResultTipoTotal.filter((x: { TipoPrestacion: string; })=>x.TipoPrestacion=='Discapacidad')[0].TotalPorcentaje;
          
          this.PorcentajeViudez=result.ResultBeneficiarioTipoTotal.filter((x: { TipoPrestacion: string; })=>x.TipoPrestacion=='Viudez')[0].TotalPorcentaje;
          this.PorcentajeOrfandad=result.ResultBeneficiarioTipoTotal.filter((x: { TipoPrestacion: string; })=>x.TipoPrestacion=='Orfandad')[0].TotalPorcentaje;
          this.PorcentajeAscendencia=result.ResultBeneficiarioTipoTotal.filter((x: { TipoPrestacion: string; })=>x.TipoPrestacion=='Ascendencia')[0].TotalPorcentaje;
          
          this.ListEdad=result.ResultEdadTotal;
          
          this.ListEstadoCivil=result.ResultEstadoCivilTotal;
          
          if(id==""){
            (($) => {
              $(document).ready(() => {
                  $('[data-toggle="tooltip"]').tooltip();
                  for (var i = 0; i < result.ResultDepartamentoTotal.length; i += 1) {
                    var iddepartamento = result.ResultDepartamentoTotal[i].CodigoDepartamento;
                    var departamento = result.ResultDepartamentoTotal[i].Departamento;
                    $('svg #DPTO_' + iddepartamento + '').tooltip({
                      title: `<div><h4>` + departamento + `</h4><h6>` + result.ResultDepartamentoTotal[i].Total  + `</h6> </h7>Pensionistas / Beneficiarias y beneficiarios</h7></div>`,
                      html: true,
                      placement: 'top',
                      container: 'body'
                    });
                      $('svg #DPTO_'+iddepartamento+'').click((e: any) => {
                          // PensionistasComponent.iddepartament=$(e)[0].target.id.replace('DPTO_','');
                          $("#IdddlDepartamet").val($(e)[0].target.id.replace('DPTO_', '')).change();
                          this.iddepartament=$(e)[0].target.id.replace('DPTO_', '');
                          this.onChangeDepartamet();
                        });
                  }

                });
            })(jQuery);
          }
      }
      this.spinnerService.hide();
      });
      
  }
   
  onChangeDepartamet() { 
    this.spinnerService.show();
    this.listData(this.iddepartament);
    if(this.iddepartament!=""){
      this.TitleDepartemento=this.ListDepartament.filter((x: { CodigoDepartamento: string; })=>x.CodigoDepartamento==this.iddepartament)[0].Departamento;
      this.showTitle=false;
    }
    else{
      this.TitleDepartemento="PENSIONISTAS Y BENEFICIARIAS/OS";
      this.showTitle=true;
    }
  }
  
}


