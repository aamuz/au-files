System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FileReaderHelper;
    return {
        setters: [],
        execute: function () {
            FileReaderHelper = /** @class */ (function () {
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
            exports_1("FileReaderHelper", FileReaderHelper);
        }
    };
});
