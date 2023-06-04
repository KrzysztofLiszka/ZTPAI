import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Worker } from 'src/app/models';
import { WorkersServic } from 'src/app/services';
import { AddWorkerDialogComponent, EditWorkerDialogComponent } from '../../components';

@Component({
    selector: 'app-workers-page',
    templateUrl: './workers-page.component.html',
    styleUrls: ['./workers-page.component.scss']
})
export class WorkersPageComponent implements OnInit, OnDestroy {
    private subscription = new Subscription;
    items: Worker[] = [];
    displayedColumns: string[] = ['name', 'surname', 'actions'];
    displayedHeaders: string[] = ['Imie', 'Nazwisko', 'Akcje'];

    ngOnInit(): void {
        this.getItems();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    constructor(private itemsService: WorkersServic, private dialog: MatDialog) { }

    private getItems(): void {
        this.subscription.add(this.itemsService.getItems().subscribe(response => this.items = response));
    };

    addItem(): void {
        const dialogRef = this.dialog.open(AddWorkerDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.subscription.add(this.itemsService.addItem(result).subscribe(res => location.reload()));
        });
    };

    editItem(item: Worker): void {
        const dialogRef = this.dialog.open(EditWorkerDialogComponent, {
            data: { item: item },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.subscription.add(this.itemsService.updateItem(result).subscribe(res => location.reload()));
        });
    }

    deleteItem(item: Worker): void {
        this.subscription.add(this.itemsService.deleteItem(item).subscribe(res => location.reload()));
    }
}
