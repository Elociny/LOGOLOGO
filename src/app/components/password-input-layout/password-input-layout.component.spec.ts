import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputLayoutComponent } from './password-input-layout.component';

describe('PasswordInputLayoutComponent', () => {
  let component: PasswordInputLayoutComponent;
  let fixture: ComponentFixture<PasswordInputLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordInputLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordInputLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
