import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandCastleComponent } from './sand-castle.component';

describe('SandCastleComponent', () => {
  let component: SandCastleComponent;
  let fixture: ComponentFixture<SandCastleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandCastleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandCastleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
