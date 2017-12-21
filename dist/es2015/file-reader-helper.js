export class FileReaderHelper {
    static createReader(file, onLoaded, onProgress, onError) {
        const reader = new FileReader();
        reader.onload = (fileLoadedEvent) => onLoaded(file, fileLoadedEvent.target.result);
        if (onProgress && typeof onProgress === 'function') {
            reader.onprogress = (fileProgressEvent) => onProgress(file, fileProgressEvent.loaded, fileProgressEvent.total);
        }
        if (onError && typeof onError === 'function') {
            reader.onerror = (fileErrorEvent) => onError(file, fileErrorEvent.target.error);
        }
        return reader;
    }
}
