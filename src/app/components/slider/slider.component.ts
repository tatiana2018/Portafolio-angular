import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

	@Input() anchura: number;  /*recoje los parametro del component padre*/
	@Input('etiquetas') captions: boolean;
  @Output() conseguirAutor = new EventEmitter();  /*envia datos al padre - emiter crea eventos*/ 

  public autor: any;

  constructor(){

    this.autor = {
      nombre: "Tatiana Marcela Gallon",
      website: "Email: restrepotatianamarcela@gmail.com",
      youtube: "Git Hub"
    };

  }

  ngOnInit() {
		$("#logo").click(function(e){
  		e.preventDefault();

  		$("header").css("background","green")
  				   .css("height","50px");
  	});

  	$('.galeria').bxSlider({
	    mode: 'fade',
	    captions: this.captions,
	    slideWidth: this.anchura
	  });

    

  }

  lanzar(event){
    this.conseguirAutor.emit(this.autor);
  }

}
