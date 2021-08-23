const { BrowserWindow, app } = require("electron");

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Get initiated folder path",
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile(`${__dirname}/app/index.html`);

  mainWindow.webContents.on("did-finish-load", function () {
    const exePath = process.argv;
    const folderPath = "???"; // This is what I'm trying to know
    mainWindow.webContents.send("paths", { exePath, folderPath });
  });
}

app.on("ready", createMainWindow);
