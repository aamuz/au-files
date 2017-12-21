System.register(["./file-reader-helper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var file_reader_helper_1, FileHandler;
    return {
        setters: [
            function (file_reader_helper_1_1) {
                file_reader_helper_1 = file_reader_helper_1_1;
            }
        ],
        execute: function () {
            FileHandler = /** @class */ (function () {
                function FileHandler(onLoaded, onProgress, onError, fileFilter, maxFileSize, readAs, hoverClass) {
                    if (hoverClass === void 0) { hoverClass = "file-hover"; }
                    var _this = this;
                    this.onLoaded = onLoaded;
                    this.onProgress = onProgress;
                    this.onError = onError;
                    this.fileFilter = fileFilter;
                    this.maxFileSize = maxFileSize;
                    this.readAs = readAs;
                    this.hoverClass = hoverClass;
                    this.readFile = function (file) {
                        var reader = file_reader_helper_1.FileReaderHelper.createReader(file, _this.onLoaded, _this.onProgress, _this.onError);
                        switch (_this.readAs) {
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
                                break;
                        }
                    };
                    this.handleFileDrag = function (fileDragEvent) {
                        fileDragEvent.stopPropagation();
                        fileDragEvent.preventDefault();
                        if (fileDragEvent.type === 'dragover') {
                            fileDragEvent.target.classList.add(_this.hoverClass);
                        }
                        else {
                            fileDragEvent.target.classList.remove(_this.hoverClass);
                        }
                    };
                    this.handleDrop = function (fileDropEvent) {
                        _this.handleFileDrag(fileDropEvent);
                        _this.handleFileSelected(fileDropEvent);
                    };
                    this.handleFileSelected = function (fileSelectedEvent) {
                        var files = fileSelectedEvent.target.files || fileSelectedEvent.dataTransfer.files;
                        for (var i = 0, f = void 0; f = files[i]; i++) {
                            if (_this.fileFilter && !f.type.match(_this.fileFilter)) {
                                if (_this.onError) {
                                    _this.onError(f, "File type does not match filter");
                                }
                                continue;
                            }
                            if (_this.maxFileSize && f.size >= _this.maxFileSize) {
                                if (_this.onError) {
                                    _this.onError(f, 'File exceeds file size limit');
                                }
                                continue;
                            }
                            _this.readFile(f);
                        }
                    };
                }
                return FileHandler;
            }());
            exports_1("FileHandler", FileHandler);
        }
    };
});
