import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-add-worker-dialog',
    templateUrl: './add-worker-dialog.component.html',
    styleUrls: ['./add-worker-dialog.component.scss']
})
export class AddWorkerDialogComponent {

    formGroup = this.fb.group({
        name: [null, Validators.required],
        surname: [null, Validators.required],
    });

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddWorkerDialogComponent>) { }

    onSubmit(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
