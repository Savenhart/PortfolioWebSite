import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryByImageComponent } from './category-by-image.component';

describe('CategoryByImageComponent', () => {
  let component: CategoryByImageComponent;
  let fixture: ComponentFixture<CategoryByImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryByImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryByImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
