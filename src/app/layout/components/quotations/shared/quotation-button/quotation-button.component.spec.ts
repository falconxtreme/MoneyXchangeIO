import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationButtonComponent } from './quotation-button.component';

describe('QuotationButtonComponent', () => {
  let component: QuotationButtonComponent;
  let fixture: ComponentFixture<QuotationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
