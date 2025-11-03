import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propietario } from './propietario';

describe('Propietario', () => {
  let component: Propietario;
  let fixture: ComponentFixture<Propietario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Propietario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Propietario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
