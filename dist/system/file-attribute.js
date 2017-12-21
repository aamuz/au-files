System.register(["aurelia-framework", "./file-handler"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, file_handler_1, FilesAttribute;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (file_handler_1_1) {
                file_handler_1 = file_handler_1_1;
            }
        ],
        execute: function () {
            FilesAttribute = /** @class */ (function () {
                function FilesAttribute(element) {
                    this.element = element;
                }
                FilesAttribute.prototype.bind = function () {
                    if (!this.onLoaded) {
                        throw new Error("You must specify an onLoaded callbat at minimum");
                    }
                    this.fileHandler = new file_handler_1.FileHandler(this.onLoaded, this.onProgress, this.onError, this.fileFilter, this.maxFileSize, this.readAs, this.hoverClass);
                    this.element.addEventListener('change', this.fileHandler.handleFileSelected, false);
                    if (this.allowDrop) {
                        this.element.addEventListener('dragover', this.fileHandler.handleFileDrag, false);
                        this.element.addEventListener('dragleave', this.fileHandler.handleFileDrag, false);
                        this.element.addEventListener('drop', this.fileHandler.handleFileDrag, false);
                    }
                };
                FilesAttribute.prototype.detached = function () {
                    this.element.removeEventListener('change', this.fileHandler.handleFileSelected, false);
                    if (this.allowDrop) {
                        this.element.removeEventListener('dragover', this.fileHandler.handleFileDrag, false);
                        this.element.removeEventListener('dragleave', this.fileHandler.handleFileDrag, false);
                        this.element.removeEventListener('drop', this.fileHandler.handleFileDrag, false);
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable()
                ], FilesAttribute.prototype, "onLoaded", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], FilesAttribute.prototype, "onProgress", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], FilesAttribute.prototype, "onError", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], FilesAttribute.prototype, "fileFilter", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], FilesAttribute.prototype, "maxFileSize", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], FilesAttribute.prototype, "readAs", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], FilesAttribute.prototype, "allowDrop", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], FilesAttribute.prototype, "hoverClass", void 0);
                FilesAttribute = __decorate([
                    aurelia_framework_1.customAttribute('au-files'),
                    aurelia_framework_1.inject(Element)
                ], FilesAttribute);
                return FilesAttribute;
            }());
            exports_1("FilesAttribute", FilesAttribute);
        }
    };
});
