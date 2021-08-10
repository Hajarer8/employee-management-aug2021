import { TestBed } from '@angular/core/testing';

import { EmpoyeesService } from './empoyees.service';

describe('EmpoyeesService', () => {
  let service: EmpoyeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpoyeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
