import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dessin } from './dessin';

describe('Dessin', () => {
  let component: Dessin;
  let fixture: ComponentFixture<Dessin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dessin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dessin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
