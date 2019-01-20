import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTeamComponent } from './support-team.component';

describe('SupportTeamComponent', () => {
  let component: SupportTeamComponent;
  let fixture: ComponentFixture<SupportTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
