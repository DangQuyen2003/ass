import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuangComponent } from './quang.component';

describe('QuangComponent', () => {
  let component: QuangComponent;
  let fixture: ComponentFixture<QuangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuangComponent]
    });
    fixture = TestBed.createComponent(QuangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
