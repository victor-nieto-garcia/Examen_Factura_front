import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit()  {
    
  } 

  Guardar(producto:Producto){
    this.service.createProducto(producto)
    .subscribe(data=>{
      alert("Se agrego con exito el producto!");
      this.router.navigate(["listar"]);
    })
  }

}
