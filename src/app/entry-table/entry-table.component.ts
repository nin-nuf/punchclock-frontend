import {Component, OnInit} from '@angular/core';
import {Entry} from "../../shared/model/entry";
import {EntryService} from "../../shared/entry.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-entry-table',
  templateUrl: './entry-table.component.html',
  styleUrls: ['./entry-table.component.css']
})
export class EntryTableComponent implements OnInit {

  constructor(private entryService: EntryService) {
  }

  public entries: Entry[] | undefined;

  ngOnInit(): void {
    this.entryService.getEntries().pipe(
      tap((entries) => this.entries = entries)
    ).subscribe();
    console.log(this.entries)
  }

}
