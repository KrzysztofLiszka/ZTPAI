import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Assignment } from 'src/app/models';
import { AssignmentsService, WorkersServic as WorkersService } from 'src/app/services';

@Component({
    selector: 'app-add-hour-dialog',
    templateUrl: './add-hour-dialog.component.html',
    styleUrls: ['./add-hour-dialog.component.scss']
})
export class AddHourDialogComponent implements OnInit, OnDestroy {
    workers: any[] = [];
    tasks: any[] = [];

    private subscription = new Subscription();

    formGroup = this.fb.group({
        idTask: ["", Validators.required],
        idWorker: ["", Validators.required],
        minutesTaken: [0],
        priority: [0, [Validators.required, this.priorityValidator]]
    });

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddHourDialogComponent>, private assignmentsService: AssignmentsService,
        private workersService: WorkersService) { }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.fetchTasks();
        this.fetchWorkers();
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

    onSubmit(): void {
        this.dialogRef.close(this.formGroup.value);
    }

    fetchWorkers(): void {
        this.subscription.add(this.workersService.getItems().subscribe(res => this.workers = res));
    }

    fetchTasks(): void {
        this.subscription.add(this.assignmentsService.getItems().subscribe(res => this.tasks = res));
    }
}