import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtgComponent } from './ctg.component';

describe('CtgComponent', () => {
  let component: CtgComponent;
  let fixture: ComponentFixture<CtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
