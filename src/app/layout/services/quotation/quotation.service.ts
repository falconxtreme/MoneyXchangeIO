import { Injectable } from '@angular/core';
import { QuotationInterface } from '../../interfaces/quotation/quotation.interface';
import { HttpClient } from '@angular/common/http';
import { GlobalParameterService } from '../global/global-parameter.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ExchangeRate } from '../../models/quotation/exchange-rate.model';

@Injectable({
  providedIn: 'root'
})
export class QuotationService implements QuotationInterface {
  //Properties:
  strUrlBaseBackend: string = "";
  strUrlBackEnd: string = "";
  strApiAccessKey: string = "";
  constructor(
    private httpClient: HttpClient,
    private globalParameterService: GlobalParameterService
  ) 
  { 
    this.strUrlBaseBackend = this.globalParameterService.getUrlBaseWebAPI();
    this.strApiAccessKey = this.globalParameterService.getUrlAccessKeyAPI();
  }

  getExchangeRate(): Observable<ExchangeRate> {
    this.strUrlBackEnd = this.strUrlBaseBackend + this.strApiAccessKey + "&symbols=USD&format=1";
    console.log(this.strUrlBackEnd);
    return this.httpClient.get<ExchangeRate>(this.strUrlBackEnd)
      .pipe(
        catchError(
          this.globalParameterService.
            handleError<ExchangeRate>('GetExchangeRate')
        )
      );
  }
}
