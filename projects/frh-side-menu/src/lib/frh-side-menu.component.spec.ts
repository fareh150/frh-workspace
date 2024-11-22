import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrhSideMenuComponent } from './frh-side-menu.component';
import { provideRouter } from '@angular/router';

describe('FrhSideMenuComponent', () => {
  let component: FrhSideMenuComponent;
  let fixture: ComponentFixture<FrhSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrhSideMenuComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrhSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when button is clicked', () =>
  {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.onSignIn.emit).toHaveBeenCalled();
  })

  it('should call onSignOut when button is clicked', () =>
  {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.onSignOut.emit).toHaveBeenCalled();
  })
});
