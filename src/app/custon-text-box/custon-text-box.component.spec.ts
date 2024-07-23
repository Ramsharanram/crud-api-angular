import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustonTextBoxComponent } from './custon-text-box.component';

describe('CustonTextBoxComponent', () => {
  let component: CustonTextBoxComponent;
  let fixture: ComponentFixture<CustonTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustonTextBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustonTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
