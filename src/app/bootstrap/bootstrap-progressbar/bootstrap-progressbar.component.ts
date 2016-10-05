import { Component } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

const html = `<h3>Basic</h3>
<ngb-progressbar type="success" [value]="25"></ngb-progressbar>
<ngb-progressbar type="info" [value]="50"></ngb-progressbar>
<ngb-progressbar type="warning" [value]="75"></ngb-progressbar>
<ngb-progressbar type="danger" [value]="100"></ngb-progressbar>
<hr>
<h3>Striped</h3>
<ngb-progressbar type="success" [value]="25" [striped]="true"></ngb-progressbar>
<ngb-progressbar type="info" [value]="50" [striped]="true"></ngb-progressbar>
<ngb-progressbar type="warning" [value]="75" [striped]="true"></ngb-progressbar>
<ngb-progressbar type="danger" [value]="100" [striped]="true"></ngb-progressbar>
<hr>
<h3>Max[1000]</h3>
<ngb-progressbar type="success" [value]="25" [striped]="true" [max]="1000"></ngb-progressbar>
<ngb-progressbar type="info" [value]="50" [striped]="true" [max]="1000"></ngb-progressbar>
<ngb-progressbar type="warning" [value]="75" [striped]="true" [max]="1000"></ngb-progressbar>
<ngb-progressbar type="danger" [value]="100" [striped]="true" [max]="1000"></ngb-progressbar>`;

const ts = `import { Component } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-bootstrap-progressbar',
    templateUrl: './bootstrap-progressbar.component.html',
    styleUrls: ['./bootstrap-progressbar.component.less'],
    providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class BootstrapProgressbarComponent {

    constructor(config: NgbProgressbarConfig) {
        // config.max = 1000;
        // config.striped = true;
        // config.animated = true;
        // config.type = 'success';
    }

}`;

@Component({
    selector: 'app-bootstrap-progressbar',
    templateUrl: './bootstrap-progressbar.component.html',
    styleUrls: ['./bootstrap-progressbar.component.less'],
    providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class BootstrapProgressbarComponent {
    htmlCode: string;
    tsCode: string;

    constructor(config: NgbProgressbarConfig) {
        this.htmlCode = html;
        this.tsCode = ts; 
        // config.max = 1000;
        // config.striped = true;
        // config.animated = true;
        // config.type = 'success';
    }

}
