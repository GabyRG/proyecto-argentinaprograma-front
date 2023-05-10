import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoNombreTituloComponent } from './foto-nombre-titulo.component';

describe('FotoNombreTituloComponent', () => {
  let component: FotoNombreTituloComponent;
  let fixture: ComponentFixture<FotoNombreTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoNombreTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoNombreTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
