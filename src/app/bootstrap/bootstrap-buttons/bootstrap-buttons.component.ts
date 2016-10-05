import { Component, OnInit } from '@angular/core';

const html = `<h2>Sample</h2>
<h3>Checkbox</h3>
<p>
    Check-box-like button group can be easily done with pure Angular 2, no custom directives necessary.
    But we include demo here for completeness.
</p>
<div class="btn-group" data-toggle="buttons">
    <label class="btn btn-primary" [class.active]="checkboxModel.left">
        <input type="checkbox" [(ngModel)]="checkboxModel.left"> Left (pre-checked)
    </label>
    <label class="btn btn-primary" [class.active]="checkboxModel.middle">
        <input type="checkbox" [(ngModel)]="checkboxModel.middle"> Middle
    </label>
    <label class="btn btn-primary" [class.active]="checkboxModel.right">
        <input type="checkbox" [(ngModel)]="checkboxModel.right"> Right
    </label>
</div>
<pre>{{checkboxModel | json}}</pre>
<hr>
<h3>Radio</h3>
<div [(ngModel)]="radioModel" ngbRadioGroup name="radioBasic">
    <label class="btn btn-primary">
        <input type="radio" [value]="1"> Left (pre-checked)
    </label>
    <label class="btn btn-primary">
        <input type="radio" value="middle"> Middle
    </label>
    <label class="btn btn-primary">
        <input type="radio" [value]="false"> Right
    </label>
</div>
<pre>{{radioModel}}</pre>`;

const ts = `import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bootstrap-buttons',
    templateUrl: './bootstrap-buttons.component.html',
    styleUrls: ['./bootstrap-buttons.component.less']
})
export class BootstrapButtonsComponent implements OnInit {
    checkboxModel = {
        left: true,
        middle: false,
        right: false
    };

    radioModel = 1;

    constructor() { }

    ngOnInit() {
    }

}`;

@Component({
    selector: 'app-bootstrap-buttons',
    templateUrl: './bootstrap-buttons.component.html',
    styleUrls: ['./bootstrap-buttons.component.less']
})
export class BootstrapButtonsComponent implements OnInit {
    htmlCode: string;
    tsCode: string;
    checkboxModel = {
        left: true,
        middle: false,
        right: false
    };

    radioModel = 1;

    constructor() {
        this.htmlCode = html;
        this.tsCode = ts; 
    }

    ngOnInit() {
    }

}
