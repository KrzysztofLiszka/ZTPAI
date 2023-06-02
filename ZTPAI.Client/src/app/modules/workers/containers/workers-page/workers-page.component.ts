import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Worker } from 'src/app/models';
import { WorkersServic } from 'src/app/services';

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

    constructor(private itemsService: WorkersServic) { }

    private getItems(): void {
        this.subscription.add(this.itemsService.getItems().subscribe(response => this.items = response));
    }
}
