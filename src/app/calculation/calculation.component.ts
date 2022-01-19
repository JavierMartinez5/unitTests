import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent {
  counter = 0
  public form!: FormGroup
  @Output() counterEmitter = new EventEmitter<number>()

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.required],
      login: ['']
    })
  }
  
  increment() {
    this.counter++
    this.counterEmitter.emit(this.counter)
  }

  decrement() {
    this.counter--
  }


}
