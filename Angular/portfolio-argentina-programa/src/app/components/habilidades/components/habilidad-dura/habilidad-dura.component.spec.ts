import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadDuraComponent } from './habilidad-dura.component';

describe('HabilidadDuraComponent', () => {
  let component: HabilidadDuraComponent;
  let fixture: ComponentFixture<HabilidadDuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadDuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadDuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
