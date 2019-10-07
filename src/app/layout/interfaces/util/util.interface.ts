import { ExchangeRate } from '../../models/quotation/exchange-rate.model';

export interface UtilInterface {
    saveExchangeRateInMemory(oExchangeRate: ExchangeRate):void;
    getExchangeRateFromMemory():ExchangeRate;
}
