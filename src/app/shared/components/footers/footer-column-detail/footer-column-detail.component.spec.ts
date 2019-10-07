import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColumnDetailComponent } from './footer-column-detail.component';

describe('FooterColumnDetailComponent', () => {
  let component: FooterColumnDetailComponent;
  let fixture: ComponentFixture<FooterColumnDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterColumnDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterColumnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
