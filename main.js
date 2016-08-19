const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
let debug = true;

function createWindow(){
    mainWindow = new BrowserWindow({ width:1200, height:600});
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    mainWindow.on('closed', function(){
        mainWindow = null;
    });

    if( debug )
        mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
    if( process.platform != 'darwin')
    {
        app.quit();
    }
});

app.on('activate', function(){
    if( mainWindow == null)
    {
        createWindow();
    }
})