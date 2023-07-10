const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({ // Crea una nueva ventana de Electron
        width: 800,
        height: 600,
        autoHideMenuBar: true, // Opción adicional para Windows
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.setMenuBarVisibility(false); // Ocultar la barra de menú

    // Carga el archivo index.html de tu aplicación Angular
    win.loadURL(`file://${path.join(__dirname, 'dist/youtube-videos-formating-web-native-tool/index.html')}`);
}

// Evento de Electron: cuando la aplicación está lista
app.whenReady().then(() => {
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
