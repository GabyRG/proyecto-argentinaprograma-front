import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadBlandaComponent } from './habilidad-blanda.component';

describe('HabilidadBlandaComponent', () => {
  let component: HabilidadBlandaComponent;
  let fixture: ComponentFixture<HabilidadBlandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadBlandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadBlandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
