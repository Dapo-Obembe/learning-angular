import { Component, signal, input, output } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";
import { email } from "@angular/forms/signals";

@Component({
    selector: 'app-profile',
    standalone: true, // v21 default
    imports: [FormsModule, ReactiveFormsModule],
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

    // Angular template-driven forms
    username = 'youngTech';
    favoriteFramework = signal<string>('');

    showFramework() {
        alert(`Your favorite is: ${this.favoriteFramework()}`);
    }

    // REACTIVE FORM HERE.
    profileForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
    });

    handleSubmit() {
        alert(
            this.profileForm.value.name + ' | ' + this.profileForm.value.email
        );
    }
}