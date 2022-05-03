import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBodyPackageComponent } from './full-body-package.component';

describe('FullBodyPackageComponent', () => {
  let component: FullBodyPackageComponent;
  let fixture: ComponentFixture<FullBodyPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBodyPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBodyPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
