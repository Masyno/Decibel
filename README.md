# Decibel

## Contents

1. [What is Decibel](#what-is-decibel)
2. [Installing Decibel](#installing-decibel)
3. [Building Decibel](#building-decibel)
4. [Useful Commands](#useful-commands)
3. [Current Features](#current-features)
4. [Todo](#todo)
5. [Decibel Folder Structure](#decibel-folder-structure)

## What is Decibel

Decibel is a modern voice chat and messaging application written using Node.js within the electron window.

React is used for rendering the UI within the electron window. Decibel uses web sockets to transmit connection and general information between the client and server. Voice and Video data is transmitted using UDP.

General messages (web sockets) are sent using Googles Protocol Buffer format to save space and bandwidth. Voice data will be sent through a codec which will compress and encrypt the voice data. This codec and compression method has not been decided yet. 

Decibel is split into two main applications, the client (Decibel) and the server (Decibel Server). The client app currently only works on Windows at this time and is located within this repository. The server application is located [here](https://github.com/DominicMaas/Decibel-Server) and works on all Node.js supported platforms.

## Installing Decibel

Coming Soon...

## Building Decibel

Below lies instructions to build Decibel on your system. It is assumed that you have node.js and npm installed on your system and setup correctly.

To build Decibel, follow the instructions below:

1. Create a new directory where you would like to build Decibel.
2. Run `git clone https://github.com/DominicMaas/Decibel.git`.
3. Run `npm install` to install all the required packages.
4. Run `npm run build-all` to compile all the css and java-scripts.
4. Run `electron .` to start Decibel.

It is recommended that you run `npm run watch-all` while developing to make sure any changes made to css or javascript files are compiled on the fly. When developing Decibel will automatically update the UI with the new changes.

Note: When any changes are made the UI will flicker twice. The first time is caused by the saving of a css or javascript file, and the second time is caused by an update of the compiled javascript and css files.

## Useful Commands

Below is listed some commands that you may find useful when developing Decibel.

Building:


* `npm run build-all` - Build all css and javascript files.
* `npm run build-css` - Only build css files.
* `npm run build-js` - Only build javascript files.

Watching:

* `npm run watch-all` - Watch all css and javascript files and compile and changes on the fly.
* `npm run watch-css` - Watch css files for changes and then build.
* `npm run watch-js` - Watch javascript files for changes and then build.

## Current Features

Coming Soon...


## Todo

Coming Soon...

## Decibel Folder Structure

The core folder structure for Decibel can be seen below. Folders are marked with []. For more information about what each file/folder does, take a look at the table below.

```
root
|   main.js
|   package.json
|   webpack.config.js
|
|---bin
|   |   [assets]
|   |   app-style.css
|   |   app-bundle.js
|   |   app.html
|
|---src
    |   [components]
    |   [scripts]
    |   [styles]
    |   style.scss
    |   app.js
```

| File / Folder Name | Description
| ------------------ |---
| `main.js`          | Main starting point for the app, creates window etc.|
| `package.json`     | Used by npm to install packages that we need. Use `npm install` to install the packages.
| `webpack.config.js`  | Used by npm to bundle our scripts into a single file. Use `npm run build-js` to generate the files.
| `[bin]`            | Stores all the compiled items that the running app will use.
| `bin/[assets]`     | Contains images, sounds and fonts used by the app.
| `bin/app-style.css`| The complied and minified css code for the app.
| `bin/app-bundle.js`| The complied and minified javascript code for the app.
| `bin/app.html`     | Main html entry point used by Node.js.
| `[src]`            | Contains raw source files.
| `src/[components]` | Individual components used by the react framework.
| `src/[scripts]`    | All individual scripts used in the app.
| `src/[styles]`     | All individual styles used in the app.
| `src/style.scss`   | Main style source file.
| `src/app.js`       | Main script source file.