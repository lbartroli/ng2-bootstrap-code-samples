import { Component } from '@angular/core';

const html = `<div>maxSize = 5, rotate = false</div>
<ngb-pagination [collectionSize]="120" [(page)]="page" [maxSize]="5" [boundaryLinks]="true" size="lg"></ngb-pagination>

<div>maxSize = 5, rotate = true</div>
<ngb-pagination [collectionSize]="120" [(page)]="page" [maxSize]="5" [rotate]="true" [boundaryLinks]="true"></ngb-pagination>

<div>maxSize = 5, rotate = true, ellipses = false</div>
<ngb-pagination [collectionSize]="120" [(page)]="page" [maxSize]="5" [rotate]="true" [ellipses]="false" [boundaryLinks]="true" size="sm"></ngb-pagination>

<hr>

<pre>Current page: {{page}}</pre>`;

const ts = `import { Component } from '@angular/core';

@Component({
    selector: 'app-bootstrap-pagination',
    templateUrl: './bootstrap-pagination.component.html',
    styleUrls: ['./bootstrap-pagination.component.less']
})
export class BootstrapPaginationComponent {
    page: number = 1;

    constructor() { 

    }

}`;

@Component({
    selector: 'app-bootstrap-pagination',
    templateUrl: './bootstrap-pagination.component.html',
    styleUrls: ['./bootstrap-pagination.component.less']
})
export class BootstrapPaginationComponent {
    htmlCode: string;
    tsCode: string;
    page: number = 1;

    constructor() {
        this.htmlCode = html;
        this.tsCode = ts; 
    }

}
