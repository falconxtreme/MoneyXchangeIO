import { Injectable } from '@angular/core';
import { UtilInterface } from '../../interfaces/util/util.interface';
import { ExchangeRate } from '../../models/quotation/exchange-rate.model';
import { GlobalParameterService } from '../global/global-parameter.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService implements UtilInterface {
  private oExchangeRateInMemory: ExchangeRate;

  constructor(
    private globalParameterService: GlobalParameterService
  ) { }

  saveExchangeRateInMemory(oExchangeRate: ExchangeRate): void {
    oExchangeRate.timestamp = (new Date()).getTime();
    this.oExchangeRateInMemory = oExchangeRate;
  }

  getExchangeRateFromMemory(): ExchangeRate {
    if(this.oExchangeRateInMemory){
      if(this.validateTimeCorrectInMemory()){
        return this.oExchangeRateInMemory;
      }
      else{
        return null;
      }
    }else{
      return null;
    }
  }

  private validateTimeCorrectInMemory():boolean{
    let numMinutesInMemory = this.globalParameterService.getMinutesInMemory();
    let dteFechaAnterior = new Date(this.oExchangeRateInMemory.timestamp);
    let dteFechaPosterior = new Date();
    let numDiferenciaFechas = dteFechaPosterior.getTime() - dteFechaAnterior.getTime();
    let numMinutesCurrent = Math.round(numDiferenciaFechas/ (1000*60));
    if(numMinutesCurrent>=numMinutesInMemory){
      return false;
    }else{
      return true;
    }
  }
}
