import { TestBed } from '@angular/core/testing';

import { FrhSideMenuService } from './frh-side-menu.service';

describe('FrhSideMenuService', () => {
  let service: FrhSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrhSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
