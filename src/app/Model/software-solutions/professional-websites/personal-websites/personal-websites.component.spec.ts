import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWebsitesComponent } from './personal-websites.component';

describe('PersonalWebsitesComponent', () => {
  let component: PersonalWebsitesComponent;
  let fixture: ComponentFixture<PersonalWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
