# au-files

A simple aurelia attribute to allow you to load files into the browser, using the HTML5 FileReader functionality, also supports drag and drop.

This plugin is based on [aurelia-files](https://github.com/grofit/aurelia-files).

## Installing

### With `npm`

`npm install au-files`

### With `yarn`

`yarn add au-files`

then in Aurelia application entry file

`aurelia.use.plugin("au-files");`

## Usage

### Textual Examples

A simple example of allowing a user to load a file and then callback with the (file, data) arguments:
```
<input type="file" id="some-file-element" au-files="on-loaded.bind: SomeFileLoadedCallback" /> 

// some VM
export class SomeVM
{
	SomeFileLoadedCallback(file, data) {
		// Do something with file (js file) and data (content of the file)
	}
	
	// Remember if you need to access the *this* scope use
	// SomeFileLoadedCallback = (file, data) => { ... }
}

```

A more complicated example with custom settings:
```
<input id="some-files-element" au-files="on-loaded.bind: SomeLoadedCallback; on-progress.bind: SomeProgressCallback; on-error.bind: SomeErrorCallback, file-filter.bind: 'image.*', read-as.bind: 'binary' }" />
```

As shown above you can hook into any of the file loading events and get access to the data to display things like progress bars, and custom file filters, which although the accepts attribute should enforce this for you but does not currently work in all browsers. So in this case you can constrain loaded files and just ignore ones that dont match the pattern. Finally it is loading the data as a binary string in the above example, however this can be converted to use other supported types.

The available options for this binding are:

* **on-loaded** - The main callback for when the file has been loaded, returns file object and file data
* **on-progress** - The progress callback which is fired at intervals while loading, returns file object, amountLoaded and totalAmount
* **on-error** - The callback for when things didnt go how you expected...
* **file-filter** - The regex pattern to match the mime types against, e.g (image.*, application.*|text.*), if a file does not meet the filter it will raise an error
* **max-file-size** - The maximum file size for loaded files in bytes, if a file exceeds the file size it will raise an error
* **read-as** - to indicate how you want to read the file, options are (text, image, binary, array), the default behaviour is image
* **allow-drop** - to indicate you want to enable drag and drop functionality for files on this element
* **hover-class** - the class to apply when you are hovering a file over the drag and drop compatible dropzone

## Building

```shell
	npm run build
```

## Publishing

1. Bump the version
```shell
npm run bump-version [<newversion> | major | minor | patch]
```
2. Commit, tag, npm publish (not automated)