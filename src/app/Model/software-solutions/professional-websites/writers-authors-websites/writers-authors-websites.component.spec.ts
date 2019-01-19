import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersAuthorsWebsitesComponent } from './writers-authors-websites.component';

describe('WritersAuthorsWebsitesComponent', () => {
  let component: WritersAuthorsWebsitesComponent;
  let fixture: ComponentFixture<WritersAuthorsWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritersAuthorsWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersAuthorsWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
