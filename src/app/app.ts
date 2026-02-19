import { Component,  } from '@angular/core';
import { EditorFiltroComponent } from './editor-filtro/editor-filtro';

@Component({
  selector: 'app-root',
  imports: [EditorFiltroComponent],
  standalone: true,
  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
