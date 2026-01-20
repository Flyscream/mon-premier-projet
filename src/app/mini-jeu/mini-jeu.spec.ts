import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniJeu } from './mini-jeu';

describe('MiniJeu', () => {
  let component: MiniJeu;
  let fixture: ComponentFixture<MiniJeu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniJeu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniJeu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
