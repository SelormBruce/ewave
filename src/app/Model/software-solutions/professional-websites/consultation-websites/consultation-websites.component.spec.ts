import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationWebsitesComponent } from './consultation-websites.component';

describe('ConsultationWebsitesComponent', () => {
  let component: ConsultationWebsitesComponent;
  let fixture: ComponentFixture<ConsultationWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
