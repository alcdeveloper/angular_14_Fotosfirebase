import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-items';
import { CargaImangenesService } from '../../services/carga-imangenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

	estaSobreElemento:boolean= false;
	archivos:FileItem[]=[];

  constructor(public _cargaImangenes:CargaImangenesService) { }

  ngOnInit() {
  }

  cargarImagenes(){
  		this._cargaImangenes.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos(){
  	this.archivos = [];
  }

  pruebaSobreElemento(event){
  	console.log(event);
  }

}
