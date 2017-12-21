var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoinject, customAttribute, bindable } from 'aurelia-framework';
import { FileHandler } from './file-handler';
let FilesAttribute = class FilesAttribute {
    constructor(element) {
        this.element = element;
    }
    bind() {
        if (!this.onLoaded) {
            throw new Error("You must specify an onLoaded callbat at minimum");
        }
        this.fileHandler = new FileHandler(this.onLoaded, this.onProgress, this.onError, this.fileFilter, this.maxFileSize, this.readAs, this.hoverClass);
        this.element.addEventListener('change', this.fileHandler.handleFileSelected, false);
        if (this.allowDrop) {
            this.element.addEventListener('dragover', this.fileHandler.handleFileDrag, false);
            this.element.addEventListener('dragleave', this.fileHandler.handleFileDrag, false);
            this.element.addEventListener('drop', this.fileHandler.handleFileDrag, false);
        }
    }
    detached() {
        this.element.removeEventListener('change', this.fileHandler.handleFileSelected, false);
        if (this.allowDrop) {
            this.element.removeEventListener('dragover', this.fileHandler.handleFileDrag, false);
            this.element.removeEventListener('dragleave', this.fileHandler.handleFileDrag, false);
            this.element.removeEventListener('drop', this.fileHandler.handleFileDrag, false);
        }
    }
};
__decorate([
    bindable()
], FilesAttribute.prototype, "onLoaded", void 0);
__decorate([
    bindable()
], FilesAttribute.prototype, "onProgress", void 0);
__decorate([
    bindable()
], FilesAttribute.prototype, "onError", void 0);
__decorate([
    bindable()
], FilesAttribute.prototype, "fileFilter", void 0);
__decorate([
    bindable()
], FilesAttribute.prototype, "maxFileSize", void 0);
__decorate([
    bindable()
], FilesAttribute.prototype, "readAs", void 0);
__decorate([
    bindable()
], FilesAttribute.prototype, "allowDrop", void 0);
__decorate([
    bindable()
], FilesAttribute.prototype, "hoverClass", void 0);
FilesAttribute = __decorate([
    customAttribute('au-files'),
    autoinject()
], FilesAttribute);
export { FilesAttribute };
