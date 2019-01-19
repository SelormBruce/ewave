import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceWebsitesComponent } from './e-commerce-websites.component';

describe('ECommerceWebsitesComponent', () => {
  let component: ECommerceWebsitesComponent;
  let fixture: ComponentFixture<ECommerceWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECommerceWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
