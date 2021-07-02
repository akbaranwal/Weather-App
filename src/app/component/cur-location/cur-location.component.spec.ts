import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurLocationComponent } from './cur-location.component';

describe('CurLocationComponent', () => {
  let component: CurLocationComponent;
  let fixture: ComponentFixture<CurLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
