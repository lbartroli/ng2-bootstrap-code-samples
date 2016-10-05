import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

const html = `<button class="btn btn-primary" (click)="openModal(myModal)">Launch demo modal</button>
<h4>{{closeResult}}</h4>
            
<!--TEMPLATE-->
<template ngbModalContainer #myModal>
    <div class="modal-header">
        <button type="button" class="close" aria-label="Close" (click)="dismissModal('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
        <h4 class="modal-title">Modal title</h4>
    </div>
    <div class="modal-body">
        <p>One fine body&hellip;</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="closeModal('accept')">Accept</button>
        <button type="button" class="btn btn-secondary" (click)="closeModal('close')">Close</button>
    </div>
</template>`;

const ts = `import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-bootstrap-modal',
    templateUrl: './bootstrap-modal.component.html',
    styleUrls: ['./bootstrap-modal.component.less']
})
export class BootstrapModalComponent {
    closeResult: string;
    modal: NgbModalRef;

    constructor(private modalService: NgbModal) { }

    openModal(modalContent: string): void {
        this.modal = this.modalService.open(modalContent);
        this.modal.result.then((result) => {
            this.closeResult = \`Closed with: \${result}\`;
        }, (reason) => {
            this.closeResult = \`Dismissed \${this.getDismissReason(reason)}\`;
        });
    }

    closeModal(value: string): void {
        switch(value){
            case 'accept':
                this.modal.close('Accept');
            break;
            case 'close':
                this.modal.close('Close');
            break;
            default:
                this.modal.close('Default');
            break;
        }
    }

    dismissModal(): void {
        this.modal.dismiss('Cross click');
    }
   
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  \`with: \${reason}\`;
        }
    }

}`;

@Component({
    selector: 'app-bootstrap-modal',
    templateUrl: './bootstrap-modal.component.html',
    styleUrls: ['./bootstrap-modal.component.less']
})
export class BootstrapModalComponent {
    htmlCode: string;
    tsCode: string;
    closeResult: string;
    modal: NgbModalRef;

    constructor(private modalService: NgbModal) {
        this.htmlCode = html;
        this.tsCode = ts; 
    }

    openModal(modalContent: string): void {
        this.modal = this.modalService.open(modalContent);
        this.modal.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    closeModal(value: string): void {
        switch(value){
            case 'accept':
                this.modal.close('Accept');
            break;
            case 'close':
                this.modal.close('Close');
            break;
            default:
                this.modal.close('Default');
            break;
        }
    }

    dismissModal(): void {
        this.modal.dismiss('Cross click');
    }
   
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

}
