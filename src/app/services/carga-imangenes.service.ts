import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-items';

@Injectable()
export class CargaImangenesService {

	private CARPETA_IMAGENES='img';

  constructor(private db:AngularFirestore) { }

  cargarImagenesFirebase(imagenes:FileItem[]){

  		console.log(imagenes);
  		const storageRef = firebase.storage().ref();
  		for(const item of imagenes){
  			item.estaSubiendo = true;
  			if(item.progreso>= 100){
  				continue;
  			}
  			const uploapTask:firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${ item.nombreArchivo }`).put(item.archivo);

  			uploapTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  				(snapshot:firebase.storage.UploadTaskSnapshot)=>
  				item.progreso = (snapshot.bytesTransferred /snapshot.totalBytes)*100,
  			(error)=>console.error("error al subir" ,  error),
  			()=>{
  				console.log("Imagen cargada correctamente");
  				item.url = uploapTask.snapshot.downloadURL;
  				item.estaSubiendo = false;
  				this.guardarImagen({
  					nombre:item.nombreArchivo,
  					url:item.url
  						});
  			})
  		}

  }

  private guardarImagen(imagen:{nombre:string , url:string}){
  	this.db.collection(`/${ this.CARPETA_IMAGENES }`).add(imagen)
  }

}
