import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalTeamComponent } from './tactical-team.component';

describe('TacticalTeamComponent', () => {
  let component: TacticalTeamComponent;
  let fixture: ComponentFixture<TacticalTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacticalTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
