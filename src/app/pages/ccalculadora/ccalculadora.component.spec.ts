import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcalculadoraComponent } from './ccalculadora.component';

describe('CcalculadoraComponent', () => {
  let component: CcalculadoraComponent;
  let fixture: ComponentFixture<CcalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcalculadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CcalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
