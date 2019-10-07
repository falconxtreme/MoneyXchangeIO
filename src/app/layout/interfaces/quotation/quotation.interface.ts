import { Observable } from 'rxjs';
import { ExchangeRate } from '../../models/quotation/exchange-rate.model';

export interface QuotationInterface {
    getExchangeRate():Observable<ExchangeRate>;
}
