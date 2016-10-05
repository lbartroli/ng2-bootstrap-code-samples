import { Component, Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

const html = `<h3>Basic</h3>
A typeahead example that gets values from a static <code>string[]</code>
<ul>
    <li><code>debounceTime</code> operator</li>
    <li>kicks in only if 2+ characters typed</li>
    <li>limits to 10 results</li>
</ul>

<input type="text" class="form-control" [(ngModel)]="model" [ngbTypeahead]="search" />
<hr>
<pre>Model: {{ model | json }}</pre>

<hr>

<h3>Format</h3>
<p>A typeahead example that uses a formatter function for string results</p>

<input type="text" class="form-control" [(ngModel)]="model" [ngbTypeahead]="search" [resultFormatter]="formatter" />
<hr>
<pre>Model: {{ model | json }}</pre>

<hr>

<h3>Search http</h3>
A typeahead example that gets values from the <code>WikipediaService</code>
<ul>
    <li>remote data retrieval</li>
    <li><code>debounceTime</code> operator</li>
    <li><code>do</code> operator</li>
    <li><code>distinctUntilChanged</code> operator</li>
    <li><code>switchMap</code> operator</li>
    <li><code>catch</code> operator to display an error message in case of connectivity issue</li>
</ul>

<div class="form-group" [class.has-danger]="searchFailed">
    <input type="text" class="form-control" [(ngModel)]="httpModel" [ngbTypeahead]="searchHttp" placeholder="Wikipedia search" />
    <span *ngIf="searching">searching...</span>
    <div class="form-control-feedback" *ngIf="searchFailed">Sorry, suggestions could not be loaded.</div>
</div>

<hr>
<pre>Model: {{ httpModel | json }}</pre>`;

const ts = `import { Component, Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

// REMEMBER TO IMPORT JsonpModule ON APP.MODULE.TS
@Injectable()
export class WikipediaService {
  constructor(private _jsonp: Jsonp) {}

  search(term: string) {
    if (term === '') {
      return Observable.of([]);
    }

    let wikiUrl = 'https://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search', term);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this._jsonp
      .get(wikiUrl, {search: params})
      .map(response => <string[]> response.json()[1]);
  }
}

@Component({
    selector: 'app-bootstrap-typeahead',
    templateUrl: './bootstrap-typeahead.component.html',
    styleUrls: ['./bootstrap-typeahead.component.less'],
    providers: [WikipediaService]
})
export class BootstrapTypeaheadComponent {

    public model: any;

    httpModel: any;
    searching = false;
    searchFailed = false;

    formatter = (result: string) => result.toUpperCase();

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term.length < 2 ? []
                : states.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10));
    
    constructor(private _service: WikipediaService) { }

    searchHttp = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._service.search(term)
            .do(() => this.searchFailed = false)
            .catch(() => {
              this.searchFailed = true;
              return Observable.of([]);
            }))
      .do(() => this.searching = false);

}
`;

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

// REMEMBER TO IMPORT JsonpModule ON APP.MODULE.TS
@Injectable()
export class WikipediaService {
    constructor(private _jsonp: Jsonp) { }

    search(term: string) {
        if (term === '') {
            return Observable.of([]);
        }

        let wikiUrl = 'https://en.wikipedia.org/w/api.php';
        let params = new URLSearchParams();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this._jsonp
            .get(wikiUrl, { search: params })
            .map(response => <string[]>response.json()[1]);
    }
}

@Component({
    selector: 'app-bootstrap-typeahead',
    templateUrl: './bootstrap-typeahead.component.html',
    styleUrls: ['./bootstrap-typeahead.component.less'],
    providers: [WikipediaService]
})
export class BootstrapTypeaheadComponent {
    htmlCode: string;
    tsCode: string;

    public model: any;

    httpModel: any;
    searching = false;
    searchFailed = false;

    formatter = (result: string) => result.toUpperCase();

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term.length < 2 ? []
                : states.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10));

    constructor(private _service: WikipediaService) {
        this.htmlCode = html;
        this.tsCode = ts;
    }

    searchHttp = (text$: Observable<string>) =>
        text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term =>
                this._service.search(term)
                    .do(() => this.searchFailed = false)
                    .catch(() => {
                        this.searchFailed = true;
                        return Observable.of([]);
                    }))
            .do(() => this.searching = false);

}
