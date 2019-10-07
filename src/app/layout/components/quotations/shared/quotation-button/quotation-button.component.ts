import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { QuotationService } from 'src/app/layout/services/quotation/quotation.service';
import { UtilService } from 'src/app/layout/services/util/util.service';
import { ExchangeRate } from 'src/app/layout/models/quotation/exchange-rate.model';
import { GlobalParameterService } from 'src/app/layout/services/global/global-parameter.service';
import { RateConstants } from 'src/app/layout/models/constants/rate-constants.model';

@Component({
  selector: 'app-quotation-button',
  templateUrl: './quotation-button.component.html',
  styleUrls: ['./quotation-button.component.sass']
})
export class QuotationButtonComponent implements OnInit {
  @Input() bIsDisabledInput: boolean;
  @Input() numQuotationValue: number;
  @Output() eeCalculateValueOutput = new EventEmitter();
  bIsGetExchangeRate: boolean;
  oExchangeRate: ExchangeRate;

  constructor(
    private quotationService:QuotationService,
    private utilService: UtilService,
    private globalParameterService: GlobalParameterService
  ) { 

  }

  ngOnInit() {
  }

  calculateExchange(){
    console.log("--- click calculateExchange ----");
    this.bIsGetExchangeRate=true;
    if(this.getExchangeRateFromMemory()){
      console.log("--- get from memory ----");
      this.bIsGetExchangeRate=false;
      this.EvaluateResponseGetExchangeRate(this.oExchangeRate, false);
    }else{
      this.quotationService.getExchangeRate()
        .subscribe(oExchangeRate => {
          console.log("--- get from API ----");
          this.bIsGetExchangeRate=false;
          this.EvaluateResponseGetExchangeRate(oExchangeRate, true);
        });
    }
  }

  getExchangeRateFromMemory():boolean{
    this.oExchangeRate= this.utilService.getExchangeRateFromMemory();
    if(this.oExchangeRate)
      return true;
    else
      return false;
  }

  EvaluateResponseGetExchangeRate(oExchangeRateResponse: ExchangeRate, bGetFromApi: boolean){
    if(oExchangeRateResponse){
      this.oExchangeRate = oExchangeRateResponse;
      if(bGetFromApi)
        this.utilService.saveExchangeRateInMemory(oExchangeRateResponse);
      this.ExchangeValueQuotationInUSD();
    }else{
      //============mostrar mensaje
      alert(this.globalParameterService.getError());
    }
  }

  ExchangeValueQuotationInUSD(){
    var numExchangeRate = this.oExchangeRate.rates[RateConstants.USDRate];
    var numQuotationValueUSD = this.numQuotationValue * numExchangeRate;
    this.eeCalculateValueOutput.emit(numQuotationValueUSD);
  }
}
