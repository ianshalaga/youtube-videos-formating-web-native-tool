const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({ // Crea una nueva ventana de Electron
        // titleBarStyle: 'hidden', // Oculta la barra de título
        icon: "src/favicon.ico",
        width: 1024,
        height: 768,
        autoHideMenuBar: true, // Opción adicional para Windows
        webPreferences: {
            nodeIntegration: true,
        }
    });
    win.maximize(); // Iniciar maximizada
    win.setMenuBarVisibility(false); // Ocultar la barra de menú

    // Carga el archivo index.html de tu aplicación Angular
    win.loadURL(`file://${path.join(__dirname, 'dist/youtube-videos-formating-web-native-tool/index.html')}`);
}

// Evento de Electron: cuando la aplicación está lista
app.whenReady().then(() => {
    // app.setName("Seyfer Studios: YouTube's Videos Formating Web Native Tool");
    createWindow();

    // Cierra la aplicación cuando todas las ventanas están cerradas
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
});

// Evento de Electron: cuando se activa la aplicación (macOS)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});



ipcMain.handle('selectDirectory', async () => {
    const result = await dialog.showOpenDialog({
        properties: ['openDirectory']
    });

    // if (!result.canceled && result.filePaths.length > 0) {
    //     return result.filePaths[0];
    // } else {
    //     throw new Error('No se ha seleccionado ningún directorio');
    // }
});