import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class IBlockchainService {

  abstract getCurrencies(): Observable<Object>;
}
