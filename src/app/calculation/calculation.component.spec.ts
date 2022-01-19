import { FormBuilder } from '@angular/forms';
import { CalculationComponent } from './calculation.component';

describe('CalculationComponent', () => {
  let component: CalculationComponent;
  
  beforeEach(() => {
    component = new CalculationComponent(new FormBuilder)
  })

  it('should increment counter by 1',() => {
    component.increment()
    expect(component.counter).toBe(1)
  })

  it('should decrement counter by 1', () => {
    component.decrement()
    expect(component.counter).toBe(-1)
  })

  it('should increment value by EventEmitter', () => {
    let result = 0
    component.counterEmitter.subscribe(value => {
      result = value
    })
    component.increment() 
    expect(result).toBe(1)
  })

  it('should create form with 2 controls: login, email', () => {
    expect(component.form.contains("email")).toBeTruthy()
    expect(component.form.contains("login")).toBeTruthy()
  }) 

  it('should mark login control as invalid if empty value', () => {
    const control = component.form.get('email')
    control?.setValue('')
    expect(control?.valid).toBeFalsy()
  })
});
