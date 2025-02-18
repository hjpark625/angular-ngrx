import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { counterSelector } from '@/stores/counter/counter.selector'
import { decrement, increment } from '@/stores/counter/counter.actions'
import { CounterChildComponent } from '@app/counter/counter-child.component'

@Component({
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  imports: [CommonModule, CounterChildComponent]
})
export class CounterComponent {
  store = inject(Store)

  countVal$ = this.store.select(counterSelector)

  onIncrease() {
    this.store.dispatch(increment())
  }

  onDecrease() {
    this.store.dispatch(decrement())
  }
}
