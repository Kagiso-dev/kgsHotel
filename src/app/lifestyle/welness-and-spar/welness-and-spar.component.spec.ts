import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelnessAndSparComponent } from './welness-and-spar.component';

describe('WelnessAndSparComponent', () => {
  let component: WelnessAndSparComponent;
  let fixture: ComponentFixture<WelnessAndSparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelnessAndSparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelnessAndSparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
