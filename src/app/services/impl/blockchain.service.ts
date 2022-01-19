import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IBlockchainService } from '../interface/iblockchain.service';
import { CurrencyValueViewModel } from 'src/app/models/currency-value-view-model';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService implements IBlockchainService {

  private baseUrl: string = "https://blockchain.info/";

  constructor(
    private httpClient: HttpClient
  ) { }

  getCurrencies(): Observable<CurrencyValueViewModel[]> {
      let response = this.httpClient.get<{[key: string]: CurrencyValueViewModel}>(this.baseUrl + "ticker");

      let mappedResponse = response.pipe(map(result => {
        let currencies: CurrencyValueViewModel[] = [];

        for (const key in result){
          let currency = result[key];
          let tempCurrencyValue: CurrencyValueViewModel = {
            '15m': currency['15m'],
            last: currency['last'],
            buy: currency['buy'],
            sell: currency['sell'],
            symbol: currency['symbol']
          };

          currencies.push(tempCurrencyValue);
        }

        return currencies;
      }));

      return mappedResponse;
  }
}
