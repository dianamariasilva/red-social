/*aquí va tu código*/

mostrarComentarios();

function guardarDatos(){
	localStorage.setItem ( document.getElementById('clave').value="", 
							document.getElementById('valor').value="");
}

function guardar(){
	var jsonData = {};
	localStorage.setItem ( document.getElementById('clave').value, 
							document.getElementById('valor').value);
	mostrarComentarios();
	guardarDatos();
}

function mostrarComentarios () {
		if(document.getElementById('clave').value != null && document.getElementById('clave').value!=null){

		for (var clave in localStorage){
			 var comentario = localStorage[clave];

			var div = document.createElement('DIV');
			div.setAttribute("class", "comentarios");
			var div1 = document.createElement('DIV');
			div1.setAttribute("class", "div1");
			var div2 = document.createElement('DIV');
			div2.setAttribute("class", "div2");
			var datos = document.getElementById('datos');
			var text= document.createTextNode( clave);
			var text2= document.createTextNode( comentario );
			div1.appendChild(text);
			div.appendChild(div1);
			datos.appendChild(div);
			div2.appendChild(text2);
			div.appendChild(div2);
			datos.appendChild(div);
		}
	}
}

function recoverData(){
		for( var i=0; i<localStorage.length; i++){
		var clave= localStorage.key(i);
		var valor= localStorage.getItem(clave);
	}
}

function cleanData(){
	document.getElementById("datos").innerHTML = '';
}

function borrarTodo(){
	cleanData();
	localStorage.clear();
	recoverData();

}


$(document).ready(function() {
   $('.photos').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('.photos').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('.photos').click(function() {
       $(this).toggle(1000);
   }); 
});