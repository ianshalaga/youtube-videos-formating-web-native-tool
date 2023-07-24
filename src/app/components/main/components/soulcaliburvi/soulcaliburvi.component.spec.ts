import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulcaliburviComponent } from './soulcaliburvi.component';

describe('SoulcaliburviComponent', () => {
  let component: SoulcaliburviComponent;
  let fixture: ComponentFixture<SoulcaliburviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoulcaliburviComponent]
    });
    fixture = TestBed.createComponent(SoulcaliburviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
