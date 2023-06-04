import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-add-assignment-component',
    templateUrl: './add-assignment-component.component.html',
    styleUrls: ['./add-assignment-component.component.scss']
})
export class AddAssignmentComponentComponent {

    formGroup = this.fb.group({
        name: [null, Validators.required],
        descriptionHtmlContent: [""],
    });

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddAssignmentComponentComponent>) { }

    onSubmit(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
    