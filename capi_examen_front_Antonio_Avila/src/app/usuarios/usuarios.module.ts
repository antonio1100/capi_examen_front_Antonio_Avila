import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

// import { MatTableModule } from '@angular/material/table';
// import {FormsModule} from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TablaUsuariosComponent,
    // MatTableModule,
    // MatInputModule,
    // MatButtonModule,
    // FormsModule  
  ],
  exports: [TablaUsuariosComponent],
  imports: [
    CommonModule,
  
  
  ]
})
export class UsuariosModule { }
