import { Component, OnInit } from '@angular/core';
import { AfiliadosServices } from 'src/app/services/afiliados.services';
declare var jQuery: any; 
@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit {
  ListDepartament: any = [];
  ListEdad: any = [];
  ListEstadoCivil: any = [];

  dataTotalAfiliados: any = [];
  iddepartament: string = ""; 
  TitleDepartemento:string="";
  TotalGeneral:number =0;
  PorcentajeMujer:number =0;
  PorcentajeHombre:number =0;
  PorcentajeDependientes:number =0;
  PorcentajeIndependientes:number =0;
  
  constructor(private afiliadosServices: AfiliadosServices) { }

  ngOnInit(): void {
    this.afiliadosServices.getListUbigeoById().subscribe(
      (result: any) => {
        this.ListDepartament = result.Result;
      }
    );
    this.listData("");
  }
  private listData(id:string){
    this.afiliadosServices.getListAfiliadosById(id).subscribe(
      (result: any) => {
        this.dataTotalAfiliados = result.ResultTotal;
        this.TotalGeneral=this.dataTotalAfiliados[0].Total;

        this.PorcentajeMujer=result.ResultGeneroTotal.filter((x: { Genero: string; })=>x.Genero=='Mujeres')[0].TotalPorcentaje;
        this.PorcentajeHombre=result.ResultGeneroTotal.filter((x: { Genero: string; })=>x.Genero=='Hombres')[0].TotalPorcentaje;
 
        this.PorcentajeDependientes=result.ResultTipoTotal.filter((x: { TipoAfiliado: string; })=>x.TipoAfiliado=='Obligatorio')[0].TotalPorcentaje;
        this.PorcentajeIndependientes=result.ResultTipoTotal.filter((x: { TipoAfiliado: string; })=>x.TipoAfiliado=='Facultativo')[0].TotalPorcentaje;
         
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
                    title: `<div><h4>` + departamento + `</h4><h6>` + result.ResultDepartamentoTotal[i].Total  + `</h6> </h7>Afilidas/os</h7></div>`,
                    html: true,
                    placement: 'top',
                    container: 'body'
                  });
                    $('svg #DPTO_'+iddepartamento+'').click((e: any) => {                    
                        $("#IdddlDepartamet").val($(e)[0].target.id.replace('DPTO_', '')).change();
                        this.iddepartament=$(e)[0].target.id.replace('DPTO_', '');
                        this.onChangeDepartamet();
                      });
                }

              });
          })(jQuery);
        }
         
      });
  }
  onChangeDepartamet() { 
    this.listData(this.iddepartament);
    if(this.iddepartament!="")
      this.TitleDepartemento=this.ListDepartament.filter((x: { CodigoDepartamento: string; })=>x.CodigoDepartamento==this.iddepartament)[0].Departamento;
    else
      this.TitleDepartemento="";
  }

}
