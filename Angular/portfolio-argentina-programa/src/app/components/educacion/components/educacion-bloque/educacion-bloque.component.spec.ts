import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionBloqueComponent } from './educacion-bloque.component';

describe('EducacionBloqueComponent', () => {
  let component: EducacionBloqueComponent;
  let fixture: ComponentFixture<EducacionBloqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionBloqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
