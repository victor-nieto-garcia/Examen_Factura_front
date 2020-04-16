import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarComponent } from './Producto/listar/listar.component';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

 constructor (private router:Router){}

 Listar(){
   this.router.navigate(["listar"]);
 }
 Nuevo(){
   this.router.navigate(["add"]);
 }
}
