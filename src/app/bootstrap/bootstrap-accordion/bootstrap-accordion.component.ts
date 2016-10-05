import { Component, Sanitizer } from '@angular/core';
import { NgbAccordionConfig, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

const html = `<p>
    <button class="btn btn-sm btn-outline-primary" (click)="acc.toggle('1')">Toggle first</button>
    <button class="btn btn-sm btn-outline-primary" (click)="acc.toggle('2')">Toggle second</button>
    <button class="btn btn-sm btn-outline-primary" (click)="customToggle(acc, '2')">Custom toggle</button>
</p>
<ngb-accordion #acc="ngbAccordion" activeIds="1" (panelChange)="beforeChange($event)">
    <ngb-panel id="1" title="Simple">
        <template ngbPanelContent>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
        labore sustainable VHS.
        </template>
    </ngb-panel>
    <ngb-panel id="2">
        <template ngbPanelTitle>
            <span>&#9733; <b>Fancy</b> title &#9733;</span>
        </template>
        <template ngbPanelContent>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
        labore sustainable VHS.
        </template>
    </ngb-panel>
    <ngb-panel id="3" title="Disabled" [disabled]="true">
        <template ngbPanelContent>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
        labore sustainable VHS.
        </template>
    </ngb-panel>
</ngb-accordion>`;

const ts = `import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbAccordionConfig, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-bootstrap-accordion',
    templateUrl: './bootstrap-accordion.component.html',
    styleUrls: ['./bootstrap-accordion.component.less'],
    providers: [NgbAccordionConfig]
})
export class BootstrapAccordionComponent{

    constructor(private config: NgbAccordionConfig) {
        config.closeOthers = true;
        // config.type = 'success';
    }

    beforeChange($event: NgbPanelChangeEvent) {
        console.log($event.panelId);
    };

    customToggle(accordion: any, id: string) {
        console.log(accordion);
        accordion.toggle(id);
    }

}`;


@Component({
    selector: 'app-bootstrap-accordion',
    templateUrl: './bootstrap-accordion.component.html',
    styleUrls: ['./bootstrap-accordion.component.less'],
    providers: [NgbAccordionConfig]
})
export class BootstrapAccordionComponent{
    htmlCode: string;
    tsCode: string;

    constructor(private config: NgbAccordionConfig) {
        config.closeOthers = true;
        // config.type = 'success';
        this.htmlCode = html;
        this.tsCode = ts;
    }

    beforeChange($event: NgbPanelChangeEvent) {
        console.log($event.panelId);
    };

    customToggle(accordion: any, id: string) {
        console.log(accordion);
        accordion.toggle(id);
    }
}
