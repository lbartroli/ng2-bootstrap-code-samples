import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Rx';

const html = `<h3>basic</h3>
<p>
    <ngb-alert [dismissible]="false">
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </ngb-alert>
</p>

<hr>

<h3>closeable</h3>
<p *ngFor="let alert of alerts">
    <ngb-alert [type]="alert.type" (close)="closeAlert(alert)">{{ alert.message }}</ngb-alert>
</p>
<p>
    <button type="button" class="btn btn-primary" (click)="reset()">Reset</button>
</p>

<hr>

<h3>self-closed</h3>
<p>
    Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)
</p>
<ngb-alert *ngIf="!staticAlertClosed" (close)="staticAlertClosed = true">Check out our awesome new features!</ngb-alert>
<p>
    Show a self-closing success message that disappears after 5 seconds.
</p>
<ngb-alert *ngIf="successMessage" type="success" (close)="successMessage = null">{{ successMessage }}</ngb-alert>
<p>
    <button class="btn btn-primary" (click)="changeSuccessMessage()">Change message</button>
</p>`;

const ts = `import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Rx';

interface IAlert {
    id: number;
    type: string;
    message: string;
}

@Component({
    selector: 'app-bootstrap-alert',
    templateUrl: './bootstrap-alert.component.html',
    styleUrls: ['./bootstrap-alert.component.less']
})
export class BootstrapAlertComponent implements OnInit {
    private _success = new Subject<string>();

    staticAlertClosed = false;
    successMessage: string;

    alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;


    constructor() {
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
     }

    ngOnInit() {
        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._success.subscribe((message) => this.successMessage = message);
        this._success.debounceTime(5000).subscribe(() => this.successMessage = null);
    }

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public reset() {
        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
    }

    public changeSuccessMessage() {
        this._success.next(\`\${new Date()} - Message successfully changed.\`);
    }

}`;

interface IAlert {
    id: number;
    type: string;
    message: string;
}

@Component({
    selector: 'app-bootstrap-alert',
    templateUrl: './bootstrap-alert.component.html',
    styleUrls: ['./bootstrap-alert.component.less']
})
export class BootstrapAlertComponent implements OnInit {
    htmlCode: string;
    tsCode: string;

    private _success = new Subject<string>();

    staticAlertClosed = false;
    successMessage: string;

    alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;


    constructor() {
        this.htmlCode = html;
        this.tsCode = ts;
        
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
     }

    ngOnInit() {
        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._success.subscribe((message) => this.successMessage = message);
        this._success.debounceTime(5000).subscribe(() => this.successMessage = null);
    }

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public reset() {
        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
    }

    public changeSuccessMessage() {
        this._success.next(`${new Date()} - Message successfully changed.`);
    }

}