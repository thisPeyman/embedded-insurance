import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityInfoComponent } from './identity-info.component';

describe('IdentityInfoComponent', () => {
  let component: IdentityInfoComponent;
  let fixture: ComponentFixture<IdentityInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
