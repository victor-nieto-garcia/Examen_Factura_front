import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  productos:Producto[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
      }
      Editar(producto:Producto):void{
        localStorage.setItem("id",producto.id.toString());
        this.router.navigate(["edit"]);

      }
      Delete(producto:Producto){
        this.service.deleteProducto(producto)
        .subscribe(data=>{
          this.productos=this.productos.filter(p=>p!==producto)
          alert("Producto eliminado.")
        })

      }
}
