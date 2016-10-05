import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

const html = `<ngb-carousel>
    <template ngbSlide>
        <img class="w100" src="images/carousel-1.jpeg" alt="Random first slide">
        <div class="carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
    </template>
    <template ngbSlide>
        <img class="w100" src="images/carousel-2.jpeg" alt="Random second slide">
        <div class="carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </template>
    <template ngbSlide>
        <img class="w100" src="images/carousel-3.jpeg" alt="Random third slide">
        <div class="carousel-caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
    </template>
</ngb-carousel>`;

const ts = `import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-bootstrap-carousel',
    templateUrl: './bootstrap-carousel.component.html',
    styleUrls: ['./bootstrap-carousel.component.less'],
    providers: [NgbCarouselConfig]
})
export class BootstrapCarouselComponent implements OnInit {

    constructor(private config: NgbCarouselConfig) {
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = true;
    }

    ngOnInit() {
    }

}`;

@Component({
    selector: 'app-bootstrap-carousel',
    templateUrl: './bootstrap-carousel.component.html',
    styleUrls: ['./bootstrap-carousel.component.less'],
    providers: [NgbCarouselConfig]
})
export class BootstrapCarouselComponent implements OnInit {
    htmlCode: string;
    tsCode: string;

    constructor(private config: NgbCarouselConfig) {
        this.htmlCode = html;
        this.tsCode = ts; 
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = true;
    }

    ngOnInit() {
    }

}
