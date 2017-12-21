export declare class FileHandler {
    private onLoaded;
    private onProgress;
    private onError;
    private fileFilter;
    private maxFileSize;
    private readAs;
    private hoverClass;
    constructor(onLoaded: any, onProgress: any, onError: any, fileFilter: any, maxFileSize: any, readAs: any, hoverClass?: any);
    readFile: (file: any) => void;
    handleFileDrag: (fileDragEvent: any) => void;
    handleDrop: (fileDropEvent: any) => void;
    handleFileSelected: (fileSelectedEvent: any) => void;
}
