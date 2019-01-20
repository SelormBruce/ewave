import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeDashbordComponent } from './administrative-dashbord.component';

describe('AdministrativeDashbordComponent', () => {
  let component: AdministrativeDashbordComponent;
  let fixture: ComponentFixture<AdministrativeDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
