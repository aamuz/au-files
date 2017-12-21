export class FileReaderHelper {
    public static createReader(file: any, onLoaded: Function, onProgress: Function, onError: Function) {
        const reader = new FileReader();
        reader.onload = (fileLoadedEvent: any) => onLoaded(file, fileLoadedEvent.target.result);

        if (onProgress && typeof onProgress === 'function') {
            reader.onprogress = (fileProgressEvent: ProgressEvent) => onProgress(file, fileProgressEvent.loaded, fileProgressEvent.total)
        }

        if (onError && typeof onError === 'function') {
            reader.onerror = (fileErrorEvent: any) => onError(file, fileErrorEvent.target.error);
        }

        return reader;
    }
}