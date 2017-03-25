# Decibel

## What is Decibel

Decibel is a modern voice chat and messaging application for gamers and other users written within the Node.js enviroment. For a more detailed explanation of the Decibel backend, see the `Structure` section below.

Decibel is split into two main modules, the client (Decibel) and the server (Decibel Server) modules. The client module currently only works on Windows at this time and is located within this repo. The server module is located [here](https://github.com/DominicMaas/Decibel-Server) and works on all Node.js supported platforms.

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
    |   style.css
    |   app.js
```

| File / Folder Name | Description
| ------------------ |---
| `main.js`          | Main starting point for the app, creates window etc.|
| `package.json`     | Used by nmp to install packages that we need. Use `npm install` to install the packages.
| `webpack.config.js`  | Used by nmp to bundle our scripts into a single file. Use `npm run dev` to generate the files.
| `[bin]`            | Stores all the compiled items that the running app will use.
| `bin/[assets]`     | Contains images, sounds and fonts used by the app.
| `bin/app-style.css`| The complied and minified css code for the app.
| `bin/app-bundle.js`| The complied and minified javascript code for the app.
| `bin/app.html`     | Main html entry point used by Node.js.
| `[src]`            | Contains raw source files.
| `src/[components]` | Individual components used by the react framework.
| `src/[scripts]`    | All individual scripts used in the app.
| `src/[styles]`     | All individual styles used in the app.
| `src/style.css`     | All individual styles used in the app.
| `src/app.js`     | All individual styles used in the app.