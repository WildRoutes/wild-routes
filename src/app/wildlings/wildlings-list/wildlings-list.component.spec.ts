import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlingsListComponent } from './wildlings-list.component';

describe('WildlingsListComponent', () => {
  let component: WildlingsListComponent;
  let fixture: ComponentFixture<WildlingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildlingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildlingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
