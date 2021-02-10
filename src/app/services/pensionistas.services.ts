import { Injectable, Injector } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CustomHttpService } from '../shared/services/custom-http.services';
import { DataModel } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})

export class PensionistasServices {
  baseUrl: string = environment.baseUrlApi;  
  share = 'ServiceData/GetSearchAllPensionistas'; 
  shareUbigeo = 'ServiceData/SearchPensionistaDepartamento'; 
  shareTotalPensionistas = 'ServiceData/GetAllPensionistas';
  shareTotalTrasladados = 'ServiceData/GetTrasladadosTotal';
  constructor(
    private customhttp: CustomHttpService
  ) { }
   
getListUbigeoById() {
  const result = this.customhttp.getValue(this.baseUrl + this.shareUbigeo);
  return result;
}
getListPensionistaById(id: string) {
  const result = this.customhttp.getValue(this.baseUrl + this.share+"?id="+id);
  return result;
}
getListPensionistaAll() {
  const result = this.customhttp.getValue(this.baseUrl + this.shareTotalPensionistas);
  return result;
}
getListTrasladadosAll() {
  const result = this.customhttp.getValue(this.baseUrl + this.shareTotalTrasladados);
  return result;
}
}
