import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeLibComponent } from './my-awesome-lib.component';

describe('MyAwesomeLibComponent', () => {
  let component: MyAwesomeLibComponent;
  let fixture: ComponentFixture<MyAwesomeLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAwesomeLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAwesomeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
