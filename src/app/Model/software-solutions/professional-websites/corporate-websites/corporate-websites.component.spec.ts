import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateWebsitesComponent } from './corporate-websites.component';

describe('CorporateWebsitesComponent', () => {
  let component: CorporateWebsitesComponent;
  let fixture: ComponentFixture<CorporateWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
