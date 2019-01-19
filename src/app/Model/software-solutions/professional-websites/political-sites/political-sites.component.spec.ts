import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalSitesComponent } from './political-sites.component';

describe('PoliticalSitesComponent', () => {
  let component: PoliticalSitesComponent;
  let fixture: ComponentFixture<PoliticalSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
