import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hour } from 'src/app/models';
import { HoursService } from 'src/app/services';


@Component({
    selector: 'app-hours-page',
    templateUrl: './hours-page.component.html',
    styleUrls: ['./hours-page.component.scss']
})
export class HoursPageComponent implements OnInit, OnDestroy {
    private subscription = new Subscription;
    items: Hour[] = [];
    displayedColumns: string[] = ['idTask', 'idWorker', 'minutesTaken', 'dateAdded', 'priority', 'actions'];
    displayedHeaders: string[] = ['Task', 'Pracownik', 'Wykorzystany czas', 'Data dodania', 'Priorytet', 'Akcje'];

    ngOnInit(): void {
        this.getItems();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    constructor(private itemsService: HoursService) { }

    private getItems(): void {
        this.subscription.add(this.itemsService.getItems().subscribe(response => this.items = response));
    }

}