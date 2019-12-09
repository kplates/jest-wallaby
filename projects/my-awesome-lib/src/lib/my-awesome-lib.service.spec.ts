import { TestBed } from '@angular/core/testing';

import { MyAwesomeLibService } from './my-awesome-lib.service';

describe('MyAwesomeLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAwesomeLibService = TestBed.get(MyAwesomeLibService);
    expect(service).toBeTruthy();
  });
});
