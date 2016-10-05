import { Component } from '@angular/core';

const html = `<h3>Basic</h3>
<button type="button" class="btn btn-secondary" placement="top" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on top">
Popover on top
</button>

<button type="button" class="btn btn-secondary" placement="right" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on right">
Popover on right
</button>

<button type="button" class="btn btn-secondary" placement="bottom" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on bottom">
Popover on bottom
</button>

<button type="button" class="btn btn-secondary" placement="left" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on left">
Popover on left
</button>

<hr>

<h3>Template content</h3>
<p>
    Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a <code>&lt;template&gt;</code> element.
</p>

<template #popContent>Hello, <b>{{name}}</b>!</template>
<button type="button" class="btn btn-secondary" [ngbPopover]="popContent" popoverTitle="Fancy content">
    I've got markup and bindings in my popover!
</button>

<hr>

<h3>Triggers</h3>
<p>
    You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.
</p>

<button type="button" class="btn btn-secondary" ngbPopover="You see, I show up on hover!" triggers="mouseenter:mouseleave" popoverTitle="Pop title">
    Hover over me!
</button>

<hr>
<p>
    Alternatively you can take full manual control over popover opening / closing events.
</p>

<button type="button" class="btn btn-secondary" ngbPopover="What a great tip!" triggers="manual" #p="ngbPopover" (click)="p.open()" popoverTitle="Pop title">
    Click me to open a popover
</button>
<button type="button" class="btn btn-secondary" (click)="p.close()">
    Click me to close a popover
</button>`;

const ts = `import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-popover',
  templateUrl: './bootstrap-popover.component.html',
  styleUrls: ['./bootstrap-popover.component.less']
})
export class BootstrapPopoverComponent {
  name: string = 'Juancho';

  constructor() { 

  }

}`;

@Component({
  selector: 'app-bootstrap-popover',
  templateUrl: './bootstrap-popover.component.html',
  styleUrls: ['./bootstrap-popover.component.less']
})
export class BootstrapPopoverComponent {
    htmlCode: string;
    tsCode: string;
    name: string = 'Juancho';

    constructor() { 
        this.htmlCode = html;
        this.tsCode = ts; 
    }

}
