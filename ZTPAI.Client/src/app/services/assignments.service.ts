import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../models';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService extends BaseHttpService {

    getItems(): Observable<Assignment[]> {
        return this.getAll<Assignment>('Assignments/GetAllAssignments');
    }

    updateItem(item: Assignment): Observable<Assignment> {
        return this.put<Assignment>('Assignments/PutAssignment', item);
    }

    deleteItem(item: Assignment): Observable<Assignment> {
        return this.delete<Assignment>(`Assignments/DeleteAssignment/` + item.id)
    }

    addItem(item: any): Observable<any> {
        return this.post<any>('Assignments/PostAssignment', item);
    }
}
