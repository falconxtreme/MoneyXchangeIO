import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColumnlastComponent } from './footer-columnlast.component';

describe('FooterColumnlastComponent', () => {
  let component: FooterColumnlastComponent;
  let fixture: ComponentFixture<FooterColumnlastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterColumnlastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterColumnlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
