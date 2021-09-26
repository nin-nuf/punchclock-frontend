import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entry} from "./model/entry";
import {environment} from "../environments/environment";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private configUrl = `${environment.baseUrl}/entries`;

  constructor(private http: HttpClient) {

  }

  public getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.configUrl);
  }

}
