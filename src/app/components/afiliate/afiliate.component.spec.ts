import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliateComponent } from './afiliate.component';

describe('AfiliateComponent', () => {
  let component: AfiliateComponent;
  let fixture: ComponentFixture<AfiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
