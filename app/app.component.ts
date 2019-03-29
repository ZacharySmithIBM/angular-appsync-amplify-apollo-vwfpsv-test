import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let event of events | async">
        {{event.title}}
      </li>
    </ul>
  `,
})
export class AppComponent implements OnInit {
  events: Observable<any[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.events = this.apollo
      .watchQuery({
        query: gql`
          query ListExamples {
            listExamples {
              items {
                id
                title
              }
            }
          }
        `,
      })
      .valueChanges.pipe(pluck('data', 'listExamples', 'items'));
  }
}
