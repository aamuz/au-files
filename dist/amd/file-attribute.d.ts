export declare class FilesAttribute {
    element: Element;
    onLoaded: Function;
    onProgress: Function;
    onError: Function;
    fileFilter: any;
    maxFileSize: any;
    readAs: string;
    allowDrop: boolean;
    hoverClass: string;
    private fileHandler;
    constructor(element: Element);
    bind(): void;
    detached(): void;
}
