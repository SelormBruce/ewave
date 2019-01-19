import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMEWebsitesComponent } from './sme-websites.component';

describe('SMEWebsitesComponent', () => {
  let component: SMEWebsitesComponent;
  let fixture: ComponentFixture<SMEWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMEWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMEWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
