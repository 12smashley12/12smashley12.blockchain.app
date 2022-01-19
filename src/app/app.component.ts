import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrencyValueViewModel } from './models/currency-value-view-model';
import { BlockchainService } from './services/impl/blockchain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title: string = 'Blockchain App';
  currencies?: CurrencyValueViewModel[];
  selectedCurrency?: CurrencyValueViewModel;

  @ViewChild('converter') private converter!: ConverterComponent;

  constructor(
    private blockchainService: BlockchainService
  ) { }

  ngAfterViewInit(): void {
    this.blockchainService.getCurrencies().subscribe(result => {
      this.currencies = result;
    })
  }

  convertCurrency(currency: CurrencyValueViewModel) {
    this.selectedCurrency = currency;
    this.converter.show();
  }
}
