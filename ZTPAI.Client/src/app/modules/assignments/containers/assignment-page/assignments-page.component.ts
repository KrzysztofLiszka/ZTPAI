import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Assignment } from 'src/app/models';
import { AssignmentsService } from 'src/app/services';

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

    constructor(private itemsService: AssignmentsService) { }

    private getItems(): void {
        this.subscription.add(this.itemsService.getItems().subscribe(response => this.items = response));
    }
}
