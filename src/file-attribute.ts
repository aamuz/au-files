import { inject, customAttribute, bindable } from 'aurelia-framework';
import { FileHandler } from './file-handler';

@customAttribute('au-files')
@inject(Element)
export class FilesAttribute {

    @bindable() onLoaded: Function;
    @bindable() onProgress: Function;
    @bindable() onError: Function;
    @bindable() fileFilter: any;
    @bindable() maxFileSize: any;
    @bindable() readAs: string;
    @bindable() allowDrop: boolean;
    @bindable() hoverClass: string;

    private fileHandler : FileHandler;

    constructor(public element: Element) { }

    public bind() {
        if (!this.onLoaded) {
            throw new Error("You must specify an onLoaded callbat at minimum");
        }

        this.fileHandler = new FileHandler(
            this.onLoaded,
            this.onProgress,
            this.onError,
            this.fileFilter,
            this.maxFileSize,
            this.readAs,
            this.hoverClass
        );

        this.element.addEventListener('change', this.fileHandler.handleFileSelected, false);

        if(this.allowDrop){
            this.element.addEventListener('dragover', this.fileHandler.handleFileDrag, false);
            this.element.addEventListener('dragleave', this.fileHandler.handleFileDrag, false);
            this.element.addEventListener('drop', this.fileHandler.handleFileDrag, false);  
        }
    }

    public detached(){
        this.element.removeEventListener('change', this.fileHandler.handleFileSelected, false);
        if(this.allowDrop){
            this.element.removeEventListener('dragover', this.fileHandler.handleFileDrag, false);
            this.element.removeEventListener('dragleave', this.fileHandler.handleFileDrag, false);
            this.element.removeEventListener('drop', this.fileHandler.handleFileDrag, false);  
        }
    }
}