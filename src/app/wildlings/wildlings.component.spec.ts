import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlingsComponent } from './wildlings.component';

describe('WildlingsComponent', () => {
  let component: WildlingsComponent;
  let fixture: ComponentFixture<WildlingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildlingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildlingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
