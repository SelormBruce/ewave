import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePaymentWebsitesComponent } from './online-payment-websites.component';

describe('OnlinePaymentWebsitesComponent', () => {
  let component: OnlinePaymentWebsitesComponent;
  let fixture: ComponentFixture<OnlinePaymentWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinePaymentWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePaymentWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
