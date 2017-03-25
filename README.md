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
    |   app.js
```

| File / Folder Name | Description
| ------------------ |:--:
| main.js            | Main starting point for the app, creates window etc.