import { FileReaderHelper } from "./file-reader-helper";

export class FileHandler {

    constructor(
        private onLoaded: any,
        private onProgress: any,
        private onError: any,
        private fileFilter: any,
        private maxFileSize: any,
        private readAs: any,
        private hoverClass: any = "file-hover"
    ) { }

    public readFile = (file: any) => {
        const reader = FileReaderHelper.createReader(file, this.onLoaded, this.onProgress, this.onError);

        switch (this.readAs) {
            case 'text':
                reader.readAsText(file);
                break;
            case 'array':
                reader.readAsArrayBuffer(file);
                break;
            case 'binary':
                reader.readAsBinaryString(file);
                break;
            default:
                reader.readAsDataURL(file);
        }
    }

    public handleFileDrag = (fileDragEvent: any) => {
        fileDragEvent.stopPropagation();
        fileDragEvent.preventDefault();

        if (fileDragEvent.type === 'dragover') {
            fileDragEvent.target.classList.add(this.hoverClass);
        } else {
            fileDragEvent.target.classList.remove(this.hoverClass);
        }
    }

    public handleDrop = (fileDropEvent: any) => {
        this.handleFileDrag(fileDropEvent);
        this.handleFileSelected(fileDropEvent);
    }

    public handleFileSelected = (fileSelectedEvent: any) => {
        const files = fileSelectedEvent.target.files || fileSelectedEvent.dataTransfer.files;
        for (let i = 0, f; f = files[i]; i++) {
            if (this.fileFilter && !f.type.match(this.fileFilter)) {
                if (this.onError) {
                    this.onError(f, "File type does not match filter");
                }
                continue;
            }

            if (this.maxFileSize && f.size >= this.maxFileSize) {
                if (this.onError) {
                    this.onError(f, 'File exceeds file size limit');
                }
                continue;
            }
        }
    }
}
