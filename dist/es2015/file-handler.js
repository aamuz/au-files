import { FileReaderHelper } from "./file-reader-helper";
export class FileHandler {
    constructor(onLoaded, onProgress, onError, fileFilter, maxFileSize, readAs, hoverClass = "file-hover") {
        this.onLoaded = onLoaded;
        this.onProgress = onProgress;
        this.onError = onError;
        this.fileFilter = fileFilter;
        this.maxFileSize = maxFileSize;
        this.readAs = readAs;
        this.hoverClass = hoverClass;
        this.readFile = (file) => {
            console.log('readfile', file, this.readAs);
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
                    console.log('default hit');
                    reader.readAsDataURL(file);
                    break;
            }
        };
        this.handleFileDrag = (fileDragEvent) => {
            fileDragEvent.stopPropagation();
            fileDragEvent.preventDefault();
            if (fileDragEvent.type === 'dragover') {
                fileDragEvent.target.classList.add(this.hoverClass);
            }
            else {
                fileDragEvent.target.classList.remove(this.hoverClass);
            }
        };
        this.handleDrop = (fileDropEvent) => {
            this.handleFileDrag(fileDropEvent);
            this.handleFileSelected(fileDropEvent);
        };
        this.handleFileSelected = (fileSelectedEvent) => {
            console.log('handleFileSelected', fileSelectedEvent);
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
                this.readFile(f);
            }
        };
    }
}
