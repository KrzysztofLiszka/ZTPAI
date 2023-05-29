import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Worker } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkersServic extends BaseHttpService {

    getItems(): Observable<Worker[]> {
        return this.getAll<Worker>('Workers/GetAllWorkers');
    }

    updateItem(item: Worker): Observable<Worker> {
        return this.put<Worker>('Workers/PutWorker', item);
    }

    deleteItem(item: Worker): Observable<Worker> {
        return this.delete<Worker>(`Workers/DeleteWorker/` + item.id)
    }

    addItem(item: any): Observable<any> {
        return this.post<any>('Workers/PostWorker', item);
    }
}
