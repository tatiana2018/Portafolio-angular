import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService{
	public url: string;

	constructor(){
		this.url = Global.url;
	}

	//metodo para subir archivos 

	makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
		return new Promise(function(resolve, reject){
			var formData:any = new FormData();  //simula formulario en un objeto
			var xhr = new XMLHttpRequest();     //objeto para peticiones asincronax
 
			//array de archivos que me llega
			for(var i = 0; i < files.length; i++){     
				formData.append(name, files[i], files[i].name);  //añade el archivo que me llega y su nombre tambien
			}


            //peticion ajax cuando hay algun cambio
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			}

            //peticion ajax por port
			xhr.open('POST', url, true);
			xhr.send(formData); //envia el formulario
		});
	}

}