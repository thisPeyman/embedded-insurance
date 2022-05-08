import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevCompanyComponent } from './prev-company.component';

describe('PrevCompanyComponent', () => {
  let component: PrevCompanyComponent;
  let fixture: ComponentFixture<PrevCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
