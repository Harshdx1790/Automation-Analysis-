import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelUpdationComponent } from './model-updation.component';

describe('ModelUpdationComponent', () => {
  let component: ModelUpdationComponent;
  let fixture: ComponentFixture<ModelUpdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelUpdationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
