import { FileReaderHelper } from "./file-reader-helper";
var FileHandler = /** @class */ (function () {
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
            console.log('readfile', file, _this.readAs);
            var reader = FileReaderHelper.createReader(file, _this.onLoaded, _this.onProgress, _this.onError);
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
                    console.log('default hit');
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
            console.log('handleFileSelected', fileSelectedEvent);
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
export { FileHandler };
