import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootstrapAccordionComponent } from './bootstrap/bootstrap-accordion/bootstrap-accordion.component';
import { BootstrapAlertComponent } from './bootstrap/bootstrap-alert/bootstrap-alert.component';
import { BootstrapButtonsComponent } from './bootstrap/bootstrap-buttons/bootstrap-buttons.component';
import { BootstrapCarouselComponent } from './bootstrap/bootstrap-carousel/bootstrap-carousel.component';
import { BootstrapCollapseComponent } from './bootstrap/bootstrap-collapse/bootstrap-collapse.component';
import { BootstrapDatepickerComponent } from './bootstrap/bootstrap-datepicker/bootstrap-datepicker.component';
import { BootstrapDropdownComponent } from './bootstrap/bootstrap-dropdown/bootstrap-dropdown.component';
import { BootstrapModalComponent } from './bootstrap/bootstrap-modal/bootstrap-modal.component';
import { BootstrapPaginationComponent } from './bootstrap/bootstrap-pagination/bootstrap-pagination.component';
import { BootstrapPopoverComponent } from './bootstrap/bootstrap-popover/bootstrap-popover.component';
import { BootstrapProgressbarComponent } from './bootstrap/bootstrap-progressbar/bootstrap-progressbar.component';
import { BootstrapRatingComponent } from './bootstrap/bootstrap-rating/bootstrap-rating.component';
import { BootstrapTabsetComponent } from './bootstrap/bootstrap-tabset/bootstrap-tabset.component';
import { BootstrapTimepickerComponent } from './bootstrap/bootstrap-timepicker/bootstrap-timepicker.component';
import { BootstrapTooltipComponent } from './bootstrap/bootstrap-tooltip/bootstrap-tooltip.component';
import { BootstrapTypeaheadComponent } from './bootstrap/bootstrap-typeahead/bootstrap-typeahead.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'bootstrap',
        component: BootstrapComponent,
        children: [
            { 
                path: 'accordion', 
                component: BootstrapAccordionComponent 
            },
            { 
                path: 'alert', 
                component: BootstrapAlertComponent 
            },
            { 
                path: 'buttons', 
                component: BootstrapButtonsComponent 
            },
            { 
                path: 'carousel', 
                component: BootstrapCarouselComponent 
            },
            { 
                path: 'collapse', 
                component: BootstrapCollapseComponent 
            },
            { 
                path: 'datepicker', 
                component: BootstrapDatepickerComponent 
            },
            { 
                path: 'dropdown', 
                component: BootstrapDropdownComponent 
            },
            { 
                path: 'modal', 
                component: BootstrapModalComponent 
            },
            { 
                path: 'pagination', 
                component: BootstrapPaginationComponent 
            },
            { 
                path: 'popover', 
                component: BootstrapPopoverComponent 
            },
            { 
                path: 'progressbar', 
                component: BootstrapProgressbarComponent 
            },
            { 
                path: 'rating', 
                component: BootstrapRatingComponent 
            },
            { 
                path: 'tabset', 
                component: BootstrapTabsetComponent 
            },
            { 
                path: 'timepicker', 
                component: BootstrapTimepickerComponent 
            },
            { 
                path: 'tooltip', 
                component: BootstrapTooltipComponent 
            },
            { 
                path: 'typeahead', 
                component: BootstrapTypeaheadComponent 
            },
            {
                path: ''
            }
        ]
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: '',
        redirectTo: '/bootstrap/accordion',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/404',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);