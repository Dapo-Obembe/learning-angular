import { Component, computed, signal } from '@angular/core';


// Interface for the offerList.
interface Offer {
  id: number;
  description: string;
}

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})


export class ControlFlow {
  // Signal initialized to false
  readonly isOfferCodeAvl = signal<boolean>(false);

  // Method to toggle the value when the checkbox is clicked
  toggleOfferCode(): void {
    this.isOfferCodeAvl.update(value => !value);
  }

  readonly isSuccessDivVisible = signal<boolean>(false)
  toggleSuccessDiv() {
    this.isSuccessDivVisible.update(value => !value)
  }

  studentTotalMark = signal<number>(0)

  // Calculate the mark.
  studentGrade = computed(() => {
    const mark = this.studentTotalMark();
    if (mark >= 70) return 'A';
    if (mark >= 60) return 'B';
    if (mark >= 40) return 'C';

    return 'F';
  });

  // Update the mark
  updateMark(event: Event) {
    const input = event.target as HTMLInputElement;
    this.studentTotalMark.set(Number(input.value)); // this converts the enter value to number.
  }

  // Looping through array
  offerList = signal<Offer[]>([
    { id: 1, description: "20% off for PayPal" },
    { id: 2, description: "40% off for OPay" },
    { id: 3, description: "50% off for Bank transfer" },
  ]);

}
