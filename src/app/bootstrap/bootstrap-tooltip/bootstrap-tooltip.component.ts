import { Component } from '@angular/core';

const html = `<h3>Basic</h3>
<button type="button" class="btn btn-secondary" placement="top" ngbTooltip="Tooltip on top">
    Tooltip on top
</button>
<button type="button" class="btn btn-secondary" placement="right" ngbTooltip="Tooltip on right">
    Tooltip on right
</button>
<button type="button" class="btn btn-secondary" placement="bottom" ngbTooltip="Tooltip on bottom">
    Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" placement="left" ngbTooltip="Tooltip on left">
    Tooltip on left
</button>

<hr>

<h3>Template content</h3>
<p>
    Tooltips can contain any arbitrary HTML, Angular bindings and even directives!
    Simply enclose desired content in a <code>&lt;template&gt;</code> element.
</p>

<template #tipContent>Hello, <b>{{name}}</b>!</template>
<button type="button" class="btn btn-secondary" [ngbTooltip]="tipContent">
    I've got markup and bindings in my tooltip!
</button>

<hr>

<h3>Triggers</h3>
<p>
    You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.
</p>

<button type="button" class="btn btn-secondary" ngbTooltip="You see, I show up on click!" triggers="click:blur">
    Click me!
</button>

<p>
    Alternatively you can take full manual control over tooltip opening / closing events.
</p>

<button type="button" class="btn btn-secondary" ngbTooltip="What a great tip!" triggers="manual" #t="ngbTooltip" (click)="t.open()">
    Click me to open a tooltip
</button>
<button type="button" class="btn btn-secondary" (click)="t.close()">
    Click me to close a tooltip
</button>`;

const ts = `import { Component } from '@angular/core';

@Component({
    selector: 'app-bootstrap-tooltip',
    templateUrl: './bootstrap-tooltip.component.html',
    styleUrls: ['./bootstrap-tooltip.component.less']
})
export class BootstrapTooltipComponent {
    name: string = 'World';

    constructor() { }

}`;

@Component({
    selector: 'app-bootstrap-tooltip',
    templateUrl: './bootstrap-tooltip.component.html',
    styleUrls: ['./bootstrap-tooltip.component.less']
})
export class BootstrapTooltipComponent {
    htmlCode: string;
    tsCode: string;
    name: string = 'World';

    constructor() {
        this.htmlCode = html;
        this.tsCode = ts; 
    }

}
