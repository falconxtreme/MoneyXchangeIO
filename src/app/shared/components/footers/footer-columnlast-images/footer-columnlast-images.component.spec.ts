import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColumnlastImagesComponent } from './footer-columnlast-images.component';

describe('FooterColumnlastImagesComponent', () => {
  let component: FooterColumnlastImagesComponent;
  let fixture: ComponentFixture<FooterColumnlastImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterColumnlastImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterColumnlastImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
