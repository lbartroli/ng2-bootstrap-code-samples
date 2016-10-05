import { Component } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

const html = `<h3>Basic</h3>
<ngb-timepicker [(ngModel)]="time" [seconds]="true" [spinners]="true"></ngb-timepicker>
<hr>
<pre>Selected time: {{time | json}}</pre>

<hr>

<h3>Meridian</h3>
<ngb-timepicker [(ngModel)]="time" [meridian]="meridian"></ngb-timepicker>
<button class="btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}" (click)="toggleMeridian()">
    Meridian - {{meridian ? "ON" : "OFF"}}
</button>
<hr>
<pre>Selected time: {{time | json}}</pre>

<hr>

<h3>Steps</h3>
<ngb-timepicker [(ngModel)]="time" [seconds]="true" 
    [hourStep]="hourStep" [minuteStep]="minuteStep" [secondStep]="secondStep"></ngb-timepicker>

<div class="row">
    <div class="col-sm-3">
        <label for="changeHourStep">Hour Step</label>
        <input type="number" class="form-control form-control-sm" [(ngModel)]="hourStep" />
    </div>    
    <div class="col-sm-3">
        <label for="changeMinuteStep">Minute Step</label>
        <input type="number" class="form-control form-control-sm" [(ngModel)]="minuteStep" />
    </div>
    <div class="col-sm-3">
        <label for="changeSecondStep">Second Step</label>
        <input type="number" class="form-control form-control-sm" [(ngModel)]="secondStep" />
    </div>
</div>
<hr>
<pre>Selected time: {{time | json}}</pre>`;

const ts = `import { Component } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-bootstrap-timepicker',
    templateUrl: './bootstrap-timepicker.component.html',
    styleUrls: ['./bootstrap-timepicker.component.less']
})
export class BootstrapTimepickerComponent {
    time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
    meridian = true;
    hourStep = 1;
    minuteStep = 15;
    secondStep = 30;

    constructor() { }

    toggleMeridian() {
        this.meridian = !this.meridian;
    }

}`;

@Component({
    selector: 'app-bootstrap-timepicker',
    templateUrl: './bootstrap-timepicker.component.html',
    styleUrls: ['./bootstrap-timepicker.component.less']
})
export class BootstrapTimepickerComponent {
    htmlCode: string;
    tsCode: string;
    time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
    meridian = true;
    hourStep = 1;
    minuteStep = 15;
    secondStep = 30;

    constructor() {
        this.htmlCode = html;
        this.tsCode = ts; 
    }

    toggleMeridian() {
        this.meridian = !this.meridian;
    }

}
