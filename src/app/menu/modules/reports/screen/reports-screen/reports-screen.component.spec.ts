import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsScreenComponent } from './reports-screen.component';

describe('ReportsScreenComponent', () => {
  let component: ReportsScreenComponent;
  let fixture: ComponentFixture<ReportsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
