import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CustomHttpService } from '../shared/services/custom-http.services';

@Injectable({
  providedIn: 'root'
})
export class InfotecaService {
  baseUrl: string = environment.baseUrlJson;  
  shareActuarial = 'dataActuarial.json';  
  shareInformes = 'dataInformes.json';  
  shareMemoriales = 'dataMemorias.json';  
  sharePresentaciones = 'dataPresentaciones.json';  
  shareEstudiosPrevisionales = 'dataBiblioteca.json';
  constructor(
    private customhttp: CustomHttpService
  ) { }
   
  getListActuarial() {
    const result = this.customhttp.getValue(this.baseUrl + this.shareActuarial);
    return result;
  }
  getListInformes() {
    const result = this.customhttp.getValue(this.baseUrl + this.shareInformes);
    return result;
  }
  getListMemoriales() {
    const result = this.customhttp.getValue(this.baseUrl + this.shareMemoriales);
    return result;
  }
  getListPresentaciones() {
    const result = this.customhttp.getValue(this.baseUrl + this.sharePresentaciones);
    return result;
  }
  getListEstudiosPrevisionales() {
    const result = this.customhttp.getValue(this.baseUrl + this.shareEstudiosPrevisionales);
    return result;
  }
}
