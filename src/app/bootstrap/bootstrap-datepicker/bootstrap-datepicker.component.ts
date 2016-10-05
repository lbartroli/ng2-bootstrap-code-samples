import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const html = `<h3>Basic</h3>
<div class="input-group">
    <input class="form-control" placeholder="yyyy-mm-dd" name="dp" [(ngModel)]="model" [maxDate]="maxDate" [minDate]="minDate" ngbDatepicker #dp="ngbDatepicker" readonly>
    <span class="input-group-addon fa fa-calendar" (click)="dp.toggle()"></span>
</div>
<hr>
<div class="row">
    <div class="col-xs-6">
        <h6>MinDate</h6>
        <div class="input-group">
            <input class="form-control" placeholder="yyyy-mm-dd" name="dpmin" [(ngModel)]="minDate" ngbDatepicker #dpmin="ngbDatepicker" readonly>
            <span class="input-group-addon fa fa-calendar" (click)="dpmin.toggle()"></span>
        </div>
    </div>
    <div class="col-xs-6">
        <h6>MaxDate</h6>
        <div class="input-group">
            <input class="form-control" placeholder="yyyy-mm-dd" name="dpmax" [(ngModel)]="maxDate" ngbDatepicker #dpmax="ngbDatepicker" readonly>
            <span class="input-group-addon fa fa-calendar" (click)="dpmax.toggle()"></span>
        </div>
    </div>
</div>

<hr/>
<pre>Model: {{ model | json }}</pre>`;

const ts = `import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
    selector: 'app-bootstrap-datepicker',
    templateUrl: './bootstrap-datepicker.component.html',
    styleUrls: ['./bootstrap-datepicker.component.less']
})
export class BootstrapDatepickerComponent implements OnInit {
    model: NgbDateStruct;
    maxDate: NgbDateStruct = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    minDate: NgbDateStruct = { year: now.getFullYear() - 1, month: now.getMonth() + 1, day: now.getDate() };

    constructor() {
    }

    ngOnInit() {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    }

}`;

const now = new Date();

@Component({
    selector: 'app-bootstrap-datepicker',
    templateUrl: './bootstrap-datepicker.component.html',
    styleUrls: ['./bootstrap-datepicker.component.less']
})
export class BootstrapDatepickerComponent implements OnInit {
    htmlCode: string;
    tsCode: string;
    model: NgbDateStruct;
    maxDate: NgbDateStruct = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    minDate: NgbDateStruct = { year: now.getFullYear() - 1, month: now.getMonth() + 1, day: now.getDate() };

    constructor() {
        this.htmlCode = html;
        this.tsCode = ts; 
    }

    ngOnInit() {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    }

}
