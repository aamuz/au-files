"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileReaderHelper = /** @class */ (function () {
    function FileReaderHelper() {
    }
    FileReaderHelper.createReader = function (file, onLoaded, onProgress, onError) {
        var reader = new FileReader();
        reader.onload = function (fileLoadedEvent) { return onLoaded(file, fileLoadedEvent.target.result); };
        if (onProgress && typeof onProgress === 'function') {
            reader.onprogress = function (fileProgressEvent) { return onProgress(file, fileProgressEvent.loaded, fileProgressEvent.total); };
        }
        if (onError && typeof onError === 'function') {
            reader.onerror = function (fileErrorEvent) { return onError(file, fileErrorEvent.target.error); };
        }
        return reader;
    };
    return FileReaderHelper;
}());
exports.FileReaderHelper = FileReaderHelper;
