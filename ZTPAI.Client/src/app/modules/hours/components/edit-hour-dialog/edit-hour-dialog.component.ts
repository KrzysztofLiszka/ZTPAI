import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Hour } from 'src/app/models';
import { AssignmentsService, WorkersServic as WorkersService } from 'src/app/services';

@Component({
    selector: 'app-edit-hour-dialog',
    templateUrl: './edit-hour-dialog.component.html',
    styleUrls: ['./edit-hour-dialog.component.scss']
})
export class EditHourDialogComponent implements OnInit {
    
    workers: any[] = [];
    tasks: any[] = [];

    private subscription = new Subscription();

    formGroup = this.fb.group({
        id: [""],
        idTask: ["", Validators.required],
        idWorker: ["", Validators.required],
        minutesTaken: [0],
        priority: [0, [Validators.required, this.priorityValidator]]
    });

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditHourDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { item: Hour }, private workersService: WorkersService, private assignmentsService: AssignmentsService) { }

    ngOnInit(): void {
        this.patchValue();
        this.fetchTasks();
        this.fetchWorkers();
    }

    private patchValue(): void {
        this.formGroup.patchValue({
            id: this.data.item.id,
            idTask: this.data.item.idTask,
            idWorker: this.data.item.idWorker,
            minutesTaken: this.data.item.minutesTaken,
            priority: this.data.item.priority
        });
    }

    onSubmit(): void {
        this.dialogRef.close(this.formGroup.value);
    }

    private priorityValidator(control: AbstractControl): ValidationErrors | null {
        const priority = control.value;
        if (priority === null || priority === undefined) {
            return null;
        }

        const parsedPriority = parseInt(priority, 10);
        if (isNaN(parsedPriority) || parsedPriority < 0 || parsedPriority > 3) {
            return { invalidPriority: true };
        }

        return null;
    }

    fetchWorkers(): void {
        this.subscription.add(this.workersService.getItems().subscribe(res => this.workers = res));
    }

    fetchTasks(): void {
        this.subscription.add(this.assignmentsService.getItems().subscribe(res => this.tasks = res));
    }
}
