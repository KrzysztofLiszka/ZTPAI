import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input() dataSource: any;
    @Input() displayedColumns: string[] = [];
    @Input() displayedHeaders: string[] = [];

    @Output() addClicked = new EventEmitter<any>();
    @Output() editClicked = new EventEmitter<any>();
    @Output() deleteClicked = new EventEmitter<any>();
    @Output() selectClicked = new EventEmitter<any>();

    onAddClick(): void {
        this.addClicked.emit();
    }

    onEditClick(item: any): void {
        this.editClicked.emit(item);
    }

    onDeleteClick(item: any): void {
        this.deleteClicked.emit(item);
    }

    getTimeTaken(minutesTaken: number): string {
        var hours = Math.floor(minutesTaken / 60);
        var minutes = minutesTaken - (hours * 60);

        var result = hours + "h " + minutes + "min";
        return result;
    }
}
