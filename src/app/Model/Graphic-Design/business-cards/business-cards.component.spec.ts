import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardsComponent } from './business-cards.component';

describe('BusinessCardsComponent', () => {
  let component: BusinessCardsComponent;
  let fixture: ComponentFixture<BusinessCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
