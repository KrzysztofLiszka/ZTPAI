import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Hour } from 'src/app/models';
import { HoursService } from 'src/app/services';
import { AddHourDialogComponent, EditHourDialogComponent } from '../../components';


@Component({
    selector: 'app-hours-page',
    templateUrl: './hours-page.component.html',
    styleUrls: ['./hours-page.component.scss']
})
export class HoursPageComponent implements OnInit, OnDestroy {
    private subscription = new Subscription;
    items: Hour[] = [];
    displayedColumns: string[] = ['taskName', 'workerName', 'minutesTaken', 'priority', 'actions'];
    displayedHeaders: string[] = ['Task', 'Pracownik', 'Wykorzystany czas', 'Priorytet', 'Akcje'];

    ngOnInit(): void {
        this.getItems();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    constructor(private itemsService: HoursService, private dialog: MatDialog) { }

    private getItems(): void {
        this.subscription.add(this.itemsService.getItems().subscribe(response => this.items = response));
    }

    deleteItem(item: Hour): void {
        this.subscription.add(this.itemsService.deleteItem(item).subscribe(res => location.reload()));
    }

    addItem(): void {
        const dialogRef = this.dialog.open(AddHourDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.subscription.add(this.itemsService.addItem(result).subscribe(res => location.reload()));
        });
    }
    
    editItem(item: Worker): void {
        const dialogRef = this.dialog.open(EditHourDialogComponent, {
            data: { item: item },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.subscription.add(this.itemsService.updateItem(result).subscribe(res => location.reload()));
        });
    }

}