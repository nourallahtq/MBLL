import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBuildComponent } from './item-build.component';

describe('ItemBuildComponent', () => {
  let component: ItemBuildComponent;
  let fixture: ComponentFixture<ItemBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
