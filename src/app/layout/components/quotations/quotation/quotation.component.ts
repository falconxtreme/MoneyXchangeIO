import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.sass']
})
export class QuotationComponent implements OnInit {
  strPlaceHolderEU: string;
  strPlaceHolderUSD: string;
  bIsDisabledInputEU: boolean;
  bIsDisabledInputUSD: boolean;
  bIsDisabledCalculate: boolean;
  bValidateInputEU:boolean;
  bValidateInputUSD: boolean;
  numValueEU:number;
  numValueUSD: number;

  constructor() { }

  ngOnInit() {
    this.initValues();
  }

  initValues(){
    this.strPlaceHolderEU = "EU";
    this.strPlaceHolderUSD = "USD";
    this.bIsDisabledInputEU = false;
    this.bIsDisabledInputUSD = true;
    this.bIsDisabledCalculate = true;
    this.bValidateInputEU = true;
    this.bValidateInputUSD = false;
  }

  setInputValueEU(newValueEU: number){
    console.log(newValueEU);
    if(newValueEU>0){
      this.bIsDisabledCalculate = false;
      this.numValueEU = newValueEU;
    }else{
      this.bIsDisabledCalculate = true;
    }
  }

  setInputValueCalculated(newValueCalculated: number){
    console.log("setInputValueCalculated: " + newValueCalculated); 
    this.numValueUSD = newValueCalculated;
  }
}
