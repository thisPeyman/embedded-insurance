import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalCarDetailComponent } from './additional-car-detail.component';

describe('AdditionalCarDetailComponent', () => {
  let component: AdditionalCarDetailComponent;
  let fixture: ComponentFixture<AdditionalCarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalCarDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
