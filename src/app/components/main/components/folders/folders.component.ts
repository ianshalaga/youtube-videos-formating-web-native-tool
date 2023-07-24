import { Component } from '@angular/core';

import { dialog } from 'electron';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent {
  // selectDirectory(): void{
  //   alert("Mensaje");
  // }

  async FolderBrowse(): Promise<void> {
    try {
      const { ipcRenderer } = window.require('electron');
      const selectedDirectory = await ipcRenderer.invoke('selectDirectory');
  
      // Aquí puedes realizar las operaciones necesarias con el directorio seleccionado
      console.log(selectedDirectory);
    } catch (error) {
      console.error('Error al seleccionar el directorio', error);
    }
  }
}
