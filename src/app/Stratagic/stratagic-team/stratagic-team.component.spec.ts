import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratagicTeamComponent } from './stratagic-team.component';

describe('StratagicTeamComponent', () => {
  let component: StratagicTeamComponent;
  let fixture: ComponentFixture<StratagicTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratagicTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratagicTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
