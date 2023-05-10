import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeTextosComponent } from './acercade-textos.component';

describe('AcercadeTextosComponent', () => {
  let component: AcercadeTextosComponent;
  let fixture: ComponentFixture<AcercadeTextosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeTextosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadeTextosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
