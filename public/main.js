const { app, BrowserWindow } = require('electron')

require('@electron/remote/main').initialize()

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 1400,
//     height: 750,
//     webPreferences: {
//       enableRemoteModule: true
//     }
//   })

//   win.loadFile('http://localhost:3000')
// }

function createWindow() {
    const win = new BrowserWindow({
    width: 1400,
    height: 750,
    webPreferences: {
      enableRemoteModule: true
    }
  })

  win.loadFile('http://localhost:3000')
}

app.on('ready', createWindow)

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})