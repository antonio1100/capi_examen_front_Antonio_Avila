import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ApiService } from 'src/app/services/api-service';
import { User } from 'src/app/interface/user';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})


export class TablaUsuariosComponent implements OnInit{
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos:User[];

  @ViewChild(MatTable) tabla1!: MatTable<User>;

  constructor(private service: ApiService){
    this.datos = [];
  
  }

  ngOnInit(): void {

    this.service.getAll().subscribe((data: User[])=>{
      this.datos = data;
      console.log(this.datos);
    })
  }

}

