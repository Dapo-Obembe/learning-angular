import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css',
})
export class DynamicCssClass {
  // Init from localstorage
  readonly theme = signal<'light' | 'dark'>(
    (localStorage.getItem('user-theme') as 'light' | 'dark') || 'light'
  )

  readonly buttonLabel = computed(() =>
    this.theme() === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'
  );

  // Save to storage whenever the signal changes.
  constructor() {
    effect(() => {
      localStorage.setItem('user-theme', this.theme());
    })
  }

  // Derive the state for the UI.
  isDark = computed(() => this.theme() === 'dark');

  toggleTheme() {
    this.theme.update(current => current === 'light' ? 'dark' : 'light');
  }

  isActiveBtn = signal<boolean>(false);


  // DYnamic STyle
  percent = signal<number>(10);

  // Compute the color based on the percentage
  statusColor = computed(() => {
    const val = this.percent();
    if (val < 30) return 'red';
    if (val < 70) return 'orange';
    return 'green';
  });

  increase() {
    this.percent.update(v => v < 100 ? v + 10 : 100);
  }
}
