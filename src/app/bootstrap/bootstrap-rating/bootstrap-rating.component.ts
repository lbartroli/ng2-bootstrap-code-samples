import { Component } from '@angular/core';

const html = `<h3>Basic</h3>
<ngb-rating [(rate)]="currentRate"></ngb-rating>
<pre>Rate: <b>{{currentRate}}</b></pre>

<hr>

<h3>Events</h3>

<ngb-rating [(rate)]="selected" (hover)="hovered=$event" (leave)="hovered=0" [readonly]="readonly"></ngb-rating>
<pre>
Selected: <b>{{selected}}</b>
Hovered: <b>{{hovered}}</b>
</pre>
<button class="btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}" (click)="readonly = !readonly">
    {{ readonly ? "readonly" : "editable"}}
</button>`;

const ts = `import { Component } from '@angular/core';

@Component({
    selector: 'app-bootstrap-rating',
    templateUrl: './bootstrap-rating.component.html',
    styleUrls: ['./bootstrap-rating.component.less']
})
export class BootstrapRatingComponent {
    currentRate: number = 8;

    // EVENTS
    selected = 0;
    hovered = 0;
    readonly = false;

    constructor() { }

}`;

@Component({
    selector: 'app-bootstrap-rating',
    templateUrl: './bootstrap-rating.component.html',
    styleUrls: ['./bootstrap-rating.component.less']
})
export class BootstrapRatingComponent {
    htmlCode: string;
    tsCode: string;
    currentRate: number = 8;

    // EVENTS
    selected = 0;
    hovered = 0;
    readonly = false;

    constructor() {
        this.htmlCode = html;
        this.tsCode = ts; 
    }

}
