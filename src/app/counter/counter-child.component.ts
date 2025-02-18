import { incrementBy } from '@/stores/counter/counter.actions'
import { counterSelector } from '@/stores/counter/counter.selector'
import { CommonModule } from '@angular/common'
import { Component, EventEmitter, inject, Input, Output } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'counter-child',
  template: `
    <h2>in child value: {{ countValue$ | async }}</h2>
    <button type="button" (click)="increaseEmit.emit()">yolo</button>
    <button type="button" (click)="onIncrementBy()">increment By</button>
  `,
  imports: [CommonModule]
})
export class CounterChildComponent {
  //   @Input({ required: true }) countValue!: number | null
  @Output() increaseEmit = new EventEmitter<void>()

  store = inject(Store)

  countValue$ = this.store.select(counterSelector)

  onIncrementBy() {
    this.store.dispatch(incrementBy({ payload: 5 }))
  }
}
