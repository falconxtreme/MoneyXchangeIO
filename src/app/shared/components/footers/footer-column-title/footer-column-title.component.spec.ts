import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColumnTitleComponent } from './footer-column-title.component';

describe('FooterColumnTitleComponent', () => {
  let component: FooterColumnTitleComponent;
  let fixture: ComponentFixture<FooterColumnTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterColumnTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterColumnTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
