const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const Config =  require('electron-config');
require('electron-reload')(__dirname);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

const AppConfig = new Config({
  defaults: {
    // 1280x720 is the default size of our window
    windowBounds: { width: 1280, height: 720 }
  }
});

console.log(AppConfig.path);

function createWindow () 
{
  let { width, height } = AppConfig.get("windowBounds");

  // Create the browser window.
  win = new BrowserWindow({
    width: width, 
    height: height, 
    frame : false, 
    title : "Decibel",
    titleBarStyle: 'hidden',
    backgroundColor: '#232323',
    show: false,
    webPreferences: {
      experimentalFeatures: true
    }
  });

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'bin/app.html'),
    protocol: 'file:',
    slashes: true
  }));

 win.once('ready-to-show', () => {
     win.show();
 });

  // This is used to save the window resize state
  // so when the user opens the app again, the
  // window will be on last resize.
  win.on('resize', () => {
    let { width, height } = win.getBounds();
    AppConfig.set("windowBounds", { width, height});
  });

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.