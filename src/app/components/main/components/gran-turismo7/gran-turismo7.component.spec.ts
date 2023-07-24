import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranTurismo7Component } from './gran-turismo7.component';

describe('GranTurismo7Component', () => {
  let component: GranTurismo7Component;
  let fixture: ComponentFixture<GranTurismo7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GranTurismo7Component]
    });
    fixture = TestBed.createComponent(GranTurismo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
