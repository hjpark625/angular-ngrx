import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', loadComponent: () => import('@app/home/home.component').then((C) => C.HomeComponent) },
  { path: 'counter', loadComponent: () => import('@app/counter/counter.component').then((C) => C.CounterComponent) }
]
