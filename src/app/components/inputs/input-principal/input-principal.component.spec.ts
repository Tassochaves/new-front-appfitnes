import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrincipalComponent } from './input-principal.component';

describe('InputPrincipalComponent', () => {
  let component: InputPrincipalComponent;
  let fixture: ComponentFixture<InputPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
