import { Component } from '@angular/core';

const html = `<h3>Basic</h3>
<ngb-tabset>
    <ngb-tab title="Simple">
        <template ngbTabContent>
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
        </template>
    </ngb-tab>
    <ngb-tab>
        <template ngbTabTitle><b>Fancy</b> title</template>
        <template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
            <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table
            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
            cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia
            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean
            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero
            sint qui sapiente accusamus tattooed echo park.</p>
        </template>
    </ngb-tab>
    <ngb-tab title="Disabled" [disabled]="true">
        <template ngbTabContent>
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
        </template>
    </ngb-tab>
</ngb-tabset>

<hr>

<h3>Pills</h3>
<ngb-tabset type="pills">
    <ngb-tab title="Simple">
        <template ngbTabContent>
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
        </template>
    </ngb-tab>
    <ngb-tab>
        <template ngbTabTitle><b>Fancy</b> title</template>
        <template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
            <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table
            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
            cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia
            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean
            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero
            sint qui sapiente accusamus tattooed echo park.</p>
        </template>
    </ngb-tab>
    <ngb-tab title="Disabled" [disabled]="true">
        <template ngbTabContent>
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
        </template>
    </ngb-tab>
</ngb-tabset>

<hr>

<h3>Slect by ID</h3>
<ngb-tabset #t="ngbTabset">
    <ngb-tab title="Simple" id="foo">
        <template ngbTabContent>
        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
        dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
        iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
        </template>
    </ngb-tab>
    <ngb-tab id="bar">
        <template ngbTabTitle><b>Fancy</b> title</template>
        <template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
        <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table
        craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
        cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia
        yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean
        shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero
        sint qui sapiente accusamus tattooed echo park.</p>
        </template>
    </ngb-tab>
</ngb-tabset>

<p>
<button class="btn btn-outline-primary" (click)="t.select('bar')">Selected tab with "bar" id</button>
</p>`;

const ts = `import { Component } from '@angular/core';

@Component({
    selector: 'app-bootstrap-tabset',
    templateUrl: './bootstrap-tabset.component.html',
    styleUrls: ['./bootstrap-tabset.component.less']
})
export class BootstrapTabsetComponent {

    constructor() { }

}`;

@Component({
    selector: 'app-bootstrap-tabset',
    templateUrl: './bootstrap-tabset.component.html',
    styleUrls: ['./bootstrap-tabset.component.less']
})
export class BootstrapTabsetComponent {
    htmlCode: string;
    tsCode: string;

    constructor() {
        this.htmlCode = html;
        this.tsCode = ts; 
    }

}
