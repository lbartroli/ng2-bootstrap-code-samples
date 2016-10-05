import { Component } from '@angular/core';

const html = `<p>
    <button type="button" class="btn btn-outline-primary" (click)="isCollapsed = !isCollapsed">Toggle</button>
</p>
<div [ngbCollapse]="isCollapsed">
    <div class="card">
        <div class="card-block">
            You can collapse this card by clicking Toggle
        </div>
    </div>
</div>`;

const ts = `import { Component } from '@angular/core';

@Component({
    selector: 'app-bootstrap-collapse',
    templateUrl: './bootstrap-collapse.component.html',
    styleUrls: ['./bootstrap-collapse.component.less']
})
export class BootstrapCollapseComponent {
    isCollapsed = false;

    constructor() { }

}`;

@Component({
    selector: 'app-bootstrap-collapse',
    templateUrl: './bootstrap-collapse.component.html',
    styleUrls: ['./bootstrap-collapse.component.less']
})
export class BootstrapCollapseComponent {
    htmlCode: string;
    tsCode: string;
    isCollapsed = false;

    constructor() {
        this.htmlCode = html;
        this.tsCode = ts; 
     }

}
