import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWebsitesComponent } from './news-websites.component';

describe('NewsWebsitesComponent', () => {
  let component: NewsWebsitesComponent;
  let fixture: ComponentFixture<NewsWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
