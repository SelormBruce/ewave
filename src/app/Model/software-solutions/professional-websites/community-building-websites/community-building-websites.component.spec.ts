import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityBuildingWebsitesComponent } from './community-building-websites.component';

describe('CommunityBuildingWebsitesComponent', () => {
  let component: CommunityBuildingWebsitesComponent;
  let fixture: ComponentFixture<CommunityBuildingWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityBuildingWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityBuildingWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
