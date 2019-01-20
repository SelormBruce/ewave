import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailUsDataComponent } from './email-us-data.component';

describe('EmailUsDataComponent', () => {
  let component: EmailUsDataComponent;
  let fixture: ComponentFixture<EmailUsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailUsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailUsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
