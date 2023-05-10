import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenAPComponent } from './imagen-ap.component';

describe('ImagenAPComponent', () => {
  let component: ImagenAPComponent;
  let fixture: ComponentFixture<ImagenAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
