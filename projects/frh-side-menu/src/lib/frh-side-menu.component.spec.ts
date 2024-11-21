import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrhSideMenuComponent } from './frh-side-menu.component';

describe('FrhSideMenuComponent', () => {
  let component: FrhSideMenuComponent;
  let fixture: ComponentFixture<FrhSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrhSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrhSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
