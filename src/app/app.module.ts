import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootstrapModalComponent } from './bootstrap/bootstrap-modal/bootstrap-modal.component';
import { BootstrapDropdownComponent } from './bootstrap/bootstrap-dropdown/bootstrap-dropdown.component';
import { BootstrapAccordionComponent } from './bootstrap/bootstrap-accordion/bootstrap-accordion.component';
import { BootstrapAlertComponent } from './bootstrap/bootstrap-alert/bootstrap-alert.component';
import { BootstrapButtonsComponent } from './bootstrap/bootstrap-buttons/bootstrap-buttons.component';
import { BootstrapCarouselComponent } from './bootstrap/bootstrap-carousel/bootstrap-carousel.component';
import { BootstrapCollapseComponent } from './bootstrap/bootstrap-collapse/bootstrap-collapse.component';
import { BootstrapDatepickerComponent } from './bootstrap/bootstrap-datepicker/bootstrap-datepicker.component';
import { BootstrapPaginationComponent } from './bootstrap/bootstrap-pagination/bootstrap-pagination.component';
import { BootstrapPopoverComponent } from './bootstrap/bootstrap-popover/bootstrap-popover.component';
import { BootstrapProgressbarComponent } from './bootstrap/bootstrap-progressbar/bootstrap-progressbar.component';
import { BootstrapRatingComponent } from './bootstrap/bootstrap-rating/bootstrap-rating.component';
import { BootstrapTabsetComponent } from './bootstrap/bootstrap-tabset/bootstrap-tabset.component';
import { BootstrapTimepickerComponent } from './bootstrap/bootstrap-timepicker/bootstrap-timepicker.component';
import { BootstrapTooltipComponent } from './bootstrap/bootstrap-tooltip/bootstrap-tooltip.component';
import { BootstrapTypeaheadComponent } from './bootstrap/bootstrap-typeahead/bootstrap-typeahead.component';
import { SanitizeHtmlPipe } from './shared/pipes/sanitize-html.pipe';
import { EscapeHtmlPipe } from './shared/pipes/escape-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BootstrapComponent,
    BootstrapModalComponent,
    BootstrapDropdownComponent,
    BootstrapAccordionComponent,
    BootstrapAlertComponent,
    BootstrapButtonsComponent,
    BootstrapCarouselComponent,
    BootstrapCollapseComponent,
    BootstrapDatepickerComponent,
    BootstrapPaginationComponent,
    BootstrapPopoverComponent,
    BootstrapProgressbarComponent,
    BootstrapRatingComponent,
    BootstrapTabsetComponent,
    BootstrapTimepickerComponent,
    BootstrapTooltipComponent,
    BootstrapTypeaheadComponent,
    SanitizeHtmlPipe,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    NgbModalModule,
    JsonpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
