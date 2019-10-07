import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationInputComponent } from './quotation-input.component';

describe('QuotationInputComponent', () => {
  let component: QuotationInputComponent;
  let fixture: ComponentFixture<QuotationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
