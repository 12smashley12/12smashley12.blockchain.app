import { APP_BOOTSTRAP_LISTENER, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CurrencyValueViewModel } from 'src/app/models/currency-value-view-model';

declare const bootstrap: any;

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  @Input() selectedCurrency?: CurrencyValueViewModel;

  private converterModal: any;
  @ViewChild("thisConverterModal") modalRef!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.converterModal = new bootstrap.Modal(this.modalRef.nativeElement);
  }

  show() {
    if(this.converterModal)
    {
     // this.converterModal.show();
    }
  }

  hide() {
    if(this.converterModal)
    {
      //this.converterModal.hide();
    }
  }
}
