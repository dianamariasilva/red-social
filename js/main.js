/*aquí va tu código*/

function guardarDatos(){
	localStorage.clave = document.getElementById('clave').value;
	localStorage.valor = document.getElementById('valor').value;
}

function guardar(){
	var jsonData = {};

	guardarDatos();
	if ((localStorage.clave != undefined) && (localStorage.valor != undefined)){
		 	// document.getElementById("clave").innerHTML = '';
		 	// document.getElementById("valor").innerHTML = '';
		 	var div = document.createElement('DIV');
	 		div.setAttribute("class", "comentarios");
	 		var div1 = document.createElement('DIV');
	 		div1.setAttribute("class", "div1");
	 		var div2 = document.createElement('DIV');
	 		div2.setAttribute("class", "div2");
	 		var datos = document.getElementById('datos');
	 		var text= document.createTextNode(localStorage.clave);
	 		var text2= document.createTextNode(localStorage.valor);
	 		div1.appendChild(text);
	 		div.appendChild(div1);
	 		datos.appendChild(div);
	 		div2.appendChild(text2);
	 		div.appendChild(div2);
	 		datos.appendChild(div);
			}else
			{
				document.getElementById("datos").innerHTML="No has introducido tu nombre y tu password";
			}
}
// function guardarDatos(){
// 	var clave = document.getElementById("clave").value;
// 	var valor = document.getElementById("valor").value;
// 	localStorage.setItem(clave,valor);	
// }

function recoverData(){
		for( var i=0; i<localStorage.length; i++){
		var clave= localStorage.key(i);
		var valor= localStorage.getItem(clave);
	}
}

// function guardar(){
// 	guardarDatos();
// 	recoverData();
// 	document.getElementById("clave").innerHTML = '';
// 	document.getElementById("valor").innerHTML = '';
// 	var div = document.createElement('DIV');
// 		div.setAttribute("class", "comentarios");
// 		var div1 = document.createElement('DIV');
// 		div1.setAttribute("class", "div1");
// 		var div2 = document.createElement('DIV');
// 		div2.setAttribute("class", "div2");
// 		var datos = document.getElementById('datos');
// 		var text= document.createTextNode(clave);
// 		var text2= document.createTextNode(valor);
// 		div1.appendChild(text);
// 		div.appendChild(div1);
// 		datos.appendChild(div);
// 		div2.appendChild(text2);
// 		div.appendChild(div2);
// 		datos.appendChild(div);
// 		// document.getElementById("datos").innerHTML= "Nombre: "+localStorage.nombre +"<br> Password: " + localStorage.password;
// }

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