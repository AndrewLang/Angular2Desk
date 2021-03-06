//require('bootstrap');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let mainWindow;
let debug = false;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 1200, height: 800 });
    mainWindow.loadURL(`file://${__dirname}/index.html`)
        //mainWindow.setMenu(null);

    mainWindow.on('closed', function() {
        mainWindow = null;
    });

    if (debug) {
        mainWindow.webContents.openDevTools();
        //mainWindow.maximize();
    }

    //Menu.setApplicationMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (mainWindow == null) {
        createWindow();
    }
})