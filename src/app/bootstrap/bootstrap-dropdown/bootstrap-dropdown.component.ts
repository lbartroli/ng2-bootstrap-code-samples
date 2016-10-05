import { Component } from '@angular/core';

const html = `<div ngbDropdown>
    <button class="btn btn-primary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ngbDropdownToggle>
        Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" (click)="selectedOption = 1">Option 1</a>
        <a class="dropdown-item" (click)="selectedOption = 2">Option 2</a>
        <a class="dropdown-item" (click)="selectedOption = 3">Option 3</a>
    </div>
</div>
<h4>Selected option: {{selectedOption || 'None'}}</h4>`;

const ts = `import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-dropdown',
  templateUrl: './bootstrap-dropdown.component.html',
  styleUrls: ['./bootstrap-dropdown.component.less']
})
export class BootstrapDropdownComponent {

  constructor() { }

}`;

@Component({
  selector: 'app-bootstrap-dropdown',
  templateUrl: './bootstrap-dropdown.component.html',
  styleUrls: ['./bootstrap-dropdown.component.less']
})
export class BootstrapDropdownComponent {
    htmlCode: string;
    tsCode: string;

    constructor() {
        this.htmlCode = html;
        this.tsCode = ts; 
    }

}
