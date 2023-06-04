import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Assignment } from 'src/app/models';
import { AssignmentsService } from 'src/app/services';
import { AddAssignmentComponentComponent } from '../../components';
import { EditAssignmentComponentComponent } from '../../components';

@Component({
    selector: 'app-tasks-page',
    templateUrl: './assignments-page.component.html',
    styleUrls: ['./assignments-page.component.scss']
})
export class AssignmentsPageComponent {
    private subscription = new Subscription;
    items: Assignment[] = [];
    displayedColumns: string[] = ['name', 'actions'];
    displayedHeaders: string[] = ['Nazwa taska', 'Akcje'];

    ngOnInit(): void {
        this.getItems();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    constructor(private itemsService: AssignmentsService, private dialog: MatDialog) { }

    private getItems(): void {
        this.subscription.add(this.itemsService.getItems().subscribe(response => this.items = response));
    }

    deleteItem(item: Assignment): void {
        this.subscription.add(this.itemsService.deleteItem(item).subscribe(res => location.reload()));
    }

    addItem(): void {
        const dialogRef = this.dialog.open(AddAssignmentComponentComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.subscription.add(this.itemsService.addItem(result).subscribe(res => location.reload()));
        });
    };

    editItem(item: Worker): void {
        const dialogRef = this.dialog.open(EditAssignmentComponentComponent, {
            data: { item: item },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.subscription.add(this.itemsService.updateItem(result).subscribe(res => location.reload()));
        });
    };
}
