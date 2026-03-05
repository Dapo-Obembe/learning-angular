import { Component, signal, input, output } from "@angular/core";

@Component({
    selector: 'app-profile',
    standalone: true, // v21 default
    templateUrl: './profile.html',
})
export class Profile {
    // 1. Inferred as string
    myName = signal("Dapo");

    // 2. Explicitly typed for multiple types
    data = signal<number | string>(30);

    myDetails() {
        this.myName.set("Segun");
    }

    sum(a: number, b: number) {
        console.log(a + b);
    }

    // Using input() to pass data to another component: parent -> child
    // It will be passed a s prop where the component is rendered. In this case, in the app.html
    readonly inputName = input<string>();

    // output(): Child -> Parent
    readonly addItemEvent = output<string>();

    addItem() {
        this.addItemEvent.emit('😜');
    }
}