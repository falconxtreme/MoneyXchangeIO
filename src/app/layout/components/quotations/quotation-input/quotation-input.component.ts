import { Component, OnInit, Input, Output, 
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-quotation-input',
  templateUrl: './quotation-input.component.html',
  styleUrls: ['./quotation-input.component.sass']
})
export class QuotationInputComponent implements OnInit, OnChanges {
  @Input() strPlaceHolderInput: string;
  @Input() bIsDisabledInput: boolean;
  @Input() numQuotationValueInput: boolean;
  @Input() bValidateInput: boolean;
  @Output() eeChangeTextValueOutput = new EventEmitter();
  numQuotationValue: number;
  patronDecimal: any;

  constructor() { }

  ngOnInit() {
    this.patronDecimal = /^\d+(\.\d{1,4})?$/;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes && changes.numQuotationValueInput && changes.numQuotationValueInput.currentValue){
      this.numQuotationValue = changes.numQuotationValueInput.currentValue;
    }
  }

  validateValue(keyPressed){
    if(this.numQuotationValue){
      if(this.bValidateInput){
        if(this.patronDecimal.test(this.numQuotationValue)){
          this.emitChangeValue();
        }else{
          if(keyPressed.key=="." && !isNaN(this.numQuotationValue)){
            console.log("es un punto");
          }else{
            this.numQuotationValue = this.getOldValue();
          }
        }
      }
    }
  }

  getOldValue(): number{
    var strQuotationValue = this.numQuotationValue.toString();
    strQuotationValue = strQuotationValue.substring(0,strQuotationValue.length-1);
    return parseFloat(strQuotationValue);
  }

  emitChangeValue(){
    this.eeChangeTextValueOutput.emit(this.numQuotationValue);
  }
}
