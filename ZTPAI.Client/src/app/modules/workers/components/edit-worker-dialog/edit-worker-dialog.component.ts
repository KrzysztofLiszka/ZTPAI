import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Worker } from 'src/app/models';

@Component({
    selector: 'app-edit-worker-dialog',
    templateUrl: './edit-worker-dialog.component.html',
    styleUrls: ['./edit-worker-dialog.component.scss']
})
export class EditWorkerDialogComponent implements OnInit {

    formGroup = this.fb.group({
        id: [""],
        name: ["", Validators.required],
        surname: ["", Validators.required],
    });

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditWorkerDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { item: Worker }) { }

    ngOnInit(): void {
        this.patchValue();
    }

    private patchValue(): void {
        this.formGroup.patchValue({
            id: this.data.item.id,
            name: this.data.item.name,
            surname: this.data.item.surname
        });
    }

    onSubmit(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
