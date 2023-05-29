import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { Hour } from '../models/hour.model';

@Injectable({
    providedIn: 'root'
})
export class HoursService extends BaseHttpService {
    
    getItems(): Observable<Hour[]> {
        return this.getAll<Hour>('Hours/GetAllHours');
    }

    updateItem(item: Hour): Observable<Hour> {
        return this.put<Hour>('Hours/PutHour', item);
    }

    deleteItem(item: Hour): Observable<Hour> {
        return this.delete<Hour>(`Hours/DeleteHour/` + item.id)
    }

    addItem(item: any): Observable<any> {
        return this.post<any>('Hours/PostHour', item);
    }

}
