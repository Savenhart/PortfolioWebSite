import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTextImageComponent } from './block-text-image.component';

describe('BlockTextImageComponent', () => {
  let component: BlockTextImageComponent;
  let fixture: ComponentFixture<BlockTextImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockTextImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockTextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
