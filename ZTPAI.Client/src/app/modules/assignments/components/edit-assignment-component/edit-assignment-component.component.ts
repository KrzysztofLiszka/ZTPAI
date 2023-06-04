import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Assignment } from 'src/app/models';

@Component({
  selector: 'app-edit-assignment-component',
  templateUrl: './edit-assignment-component.component.html',
  styleUrls: ['./edit-assignment-component.component.scss']
})
export class EditAssignmentComponentComponent implements OnInit {
    formGroup = this.fb.group({
        id: [""],
        name: [""],
        descriptionHtmlContent: [""],
    });

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditAssignmentComponentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { item: Assignment }) { }

    ngOnInit(): void {
        this.patchValue();
    }

    private patchValue(): void {
        this.formGroup.patchValue({
            id: this.data.item.id,
            name: this.data.item.name,
            descriptionHtmlContent: this.data.item.descriptionHtmlContent
        });
    }

    onSubmit(): void {
        this.dialogRef.close(this.formGroup.value);
    }
}
