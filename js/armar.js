contador = 0; // Variable para los elementos clonados.
var codigofinal='';
var codigofinal2='';
var codigofinal3='';
var codigofinal4='';
        function start(e) {
            e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
            e.dataTransfer.setData("Data", e.target.id); // Agarra el elemento que se va a mover
            e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
            e.target.style.opacity = '0.4'; 
        }

        function end(e){
            e.target.style.opacity = ''; // Pone la opacidad del elemento a 1           
            e.dataTransfer.clearData("Data");
        }

        function enter(e) {
            e.target.style.border = '3px dotted #555'; 
        }

        function leave(e) {
            e.target.style.border = ''; 
        }

        function over(e) {
            var elemArrastrable = e.dataTransfer.getData("Data"); // Elemento arrastrado
            var id = e.target.id; // Elemento sobre el que se arrastra
            
            // return false para que se pueda soltar
            if (id == 'cuadro1'){
                return false; // Cualquier elemento se puede soltar sobre el div destino 1
            }

            if  (id == 'recipiente'){
                return false; 
				}   

            if (id == 'diagrama' ){
                return false; 
				}   
            if (id == 'cuadro3')
                return false;
    
            if (id == 'papelera')
                return false;
			
			if (id == 'armar')
				return false;
			   
			
			
				
                
        }
//mover elementos
        function drop(e){

            var elementoArrastrado = e.dataTransfer.getData("Data"); // Elemento arrastrado
            e.target.appendChild(document.getElementById(elementoArrastrado));
            e.target.style.border = '';  // Quita el borde
            tamContX = $('#'+e.target.id).width();
            tamContY = $('#'+e.target.id).height();

            tamElemX = $('#'+elementoArrastrado).width();
            tamElemY = $('#'+elementoArrastrado).height();
    
            posXCont = $('#'+e.target.id).position().left;
            posYCont = $('#'+e.target.id).position().top;

            // Posicion absoluta del raton
            x = e.layerX;
            y = e.layerY;

            // Si parte del elemento que se quiere mover se queda fuera se cambia las coordenadas para que no sea asi
            if (posXCont + tamContX <= x + tamElemX){
                x = posXCont + tamContX - tamElemX;
            }

            if (posYCont + tamContY <= y + tamElemY){
                y = posYCont + tamContY - tamElemY;
            }

            document.getElementById(elementoArrastrado).style.position = "absolute";
            document.getElementById(elementoArrastrado).style.left = x + "px";
            document.getElementById(elementoArrastrado).style.top = y + "px";
        }
    //eliminar elementos
        function eliminar(e){
            var elementoArrastrado = document.getElementById(e.dataTransfer.getData("Data")); // Elemento arrastrado
            elementoArrastrado.parentNode.removeChild(elementoArrastrado); // Elimina el elemento
            e.target.style.border = '';   // Quita el borde
        }
//clonar elementos
            
        
        function clonar(e){
			var elementoArrastrado = document.getElementById(e.dataTransfer.getData("Data")); // Elemento arrastrado
            var elementoArrastradop = e.dataTransfer.getData("Data"); // Elemento arrastrado
			if(elementoArrastradop=='pepino')
			{
			codigo = 'pepino ';
			tipo='verdura';
			}			
			if(elementoArrastradop=='lechuga')
			{
			codigo ='lechuga ';
			tipo='verdura';
			}			
			if(elementoArrastradop=='jitomate')
			{
			codigo ='jitomate ';
			tipo='verdura';
			}
if(elementoArrastradop=='aguacate')
			{
			codigo ='aguacate ';
			tipo='verdura';
			}
if(elementoArrastradop=='cebolla')
			{
			codigo ='cebolla ';
			tipo='verdura';
			}
if(elementoArrastradop=='zanahoria')
			{
			codigo ='zanahoria ';
			tipo='verdura';
			}

if(elementoArrastradop=='espinacas')
			{
			codigo ='espinacas ';
			tipo='verdura';
			}
if(elementoArrastradop=='papas')
			{
			codigo ='papas ';
			tipo='verdura';
			}
if(elementoArrastradop=='mango')
			{
			codigo ='mango ';
			tipo='fruta';
			}
if(elementoArrastradop=='naranja')
			{
			codigo ='naranja ';
			tipo='fruta';
			}
if(elementoArrastradop=='durazno')
			{
			codigo ='durazno ';
						tipo='fruta';
			}
if(elementoArrastradop=='fresa')
			{
			codigo ='fresa ';
						tipo='fruta';
			}
if(elementoArrastradop=='kiwi')
			{
			codigo ='kiwi ';
						tipo='fruta';
			}			
if(elementoArrastradop=='pollo')
			{
			codigo ='pollo ';
						tipo='carne';
			}			
			if(elementoArrastradop=='pescado')
			{
		codigo ='pescado ';
						tipo='carne';
		}
			if(elementoArrastradop=='atun')
			{
			codigo ='atun ';
						tipo='carne';
			}
			if(elementoArrastradop=='salmon')
			{
			codigo ='salmon ';
						tipo='carne';
			}
			if(elementoArrastradop=='pastor')
			{
			codigo ='pastor ';
						tipo='carne';
			}
			if(elementoArrastradop=='bistec')
			{
			codigo ='bistec ';
						tipo='carne';
			}
if(elementoArrastradop=='huevo')
			{
			codigo ='huevo ';
						tipo='carne';
			}
			
			if(elementoArrastradop=='ranch')
			{
			codigo ='ranch ';
						tipo='aderezo';
			}
			
			if(elementoArrastradop=='mil-islas')
			{
			codigo ='mil-islas ';
						tipo='aderezo';
			}
			if(elementoArrastradop=='chipotle')
			{
			codigo ='chipotle ';
						tipo='aderezo';
			}
			if(elementoArrastradop=='jalapenio')
			{
			codigo ='jalapenio ';
			tipo='aderezo';
			}			
			if(elementoArrastradop=='aceite')
			{
			codigo ='aceite ';
			tipo='aderezo';
			}		
			if(tipo=='verdura'){
			codigofinal = codigofinal + codigo+'<br></br>';
			document.getElementById('list-verd').innerHTML='Verdura:<br></br>'+codigofinal+'';			
			}
			if(tipo=='aderezo'){
			codigofinal2 = codigofinal2 + codigo+'<br></br>';
			document.getElementById('list-adere').innerHTML='Aderezo:<br></br>'+codigofinal2+'';			
			}
			if(tipo=='fruta'){
			codigofinal3 = codigofinal3 + codigo+'<br></br>';
			document.getElementById('list-fruta').innerHTML='Fruta:<br></br>'+codigofinal3+'';			
			}
			if(tipo=='carne'){
			codigofinal4 = codigofinal4 + codigo+'<br></br>';
			document.getElementById('list-carne').innerHTML='Carne:<br></br>'+codigofinal4+'';			
			}
			elementoArrastrado.style.opacity = ''; // Dejamos la opacidad a su estado anterior para copiar el elemento igual que era antes
            var elementoClonado = elementoArrastrado.cloneNode(true); // Se clona el elemento
            elementoClonado.id = "ElemClonado" + contador; // Se cambia el id porque tiene que ser unico
            var elementoClonadoo = elementoClonado.id; 
			contador += 1;  
            elementoClonado.style.position = "static";  // Se posiciona de forma "normal" (Sino habria que cambiar las coordenadas de la posición)  
			//e.target.appendChild(elementoClonado); // Se añade el elemento clonado
            //e.target.style.border = '';   // Quita el borde del "cuadro clonador"
		//		alert(""+codigofinal+'');
		
			
        }
		    //document.getElementById('codi').innerHTML='#include <stdio.h> <br></br> main()<br></br> {<br></br>';
			
         
			function pagr() {
var contenedor = new String()
document.getElementById("fig").style.fill  =  'red';
document.getElementById("fig0").style.fill  =  'red';
document.getElementById("fig1").style.fill  =  'red';
document.getElementById("fig2").style.fill  =  'red';
document.getElementById("fig3").style.fill  =  'red';
document.getElementById("fig4").style.fill  =  'red';

}

			function pagaz() {
var contenedor = new String()
document.getElementById("fig").style.fill  =  'blue';
document.getElementById("fig0").style.fill  =  'blue';
document.getElementById("fig1").style.fill  =  'blue';
document.getElementById("fig2").style.fill  =  'blue';
document.getElementById("fig3").style.fill  =  'blue';
document.getElementById("fig4").style.fill  =  'blue';
}

			function pagve() {
var contenedor = new String()
document.getElementById("fig").style.fill  =  '#6BD560';
document.getElementById("fig0").style.fill  =  '#6BD560';
document.getElementById("fig1").style.fill  =  '#6BD560';
document.getElementById("fig2").style.fill  =  '#6BD560';
document.getElementById("fig3").style.fill  =  '#6BD560';
document.getElementById("fig4").style.fill  =  '#6BD560';
}

			function pagam() {
var contenedor = new String()
document.getElementById("fig").style.fill  =  '#FAFA58  ';
document.getElementById("fig0").style.fill  =  '#FAFA58  ';
document.getElementById("fig1").style.fill  =  '#FAFA58  ';
document.getElementById("fig2").style.fill  =  '#FAFA58  ';
document.getElementById("fig3").style.fill  =  '#FAFA58  ';
document.getElementById("fig4").style.fill  =  '#FAFA58  ';
}
			function pagmo() {
var contenedor = new String()
document.getElementById("fig").style.fill  =  '#E84BE4';
document.getElementById("fig0").style.fill  =  '#E84BE4';
document.getElementById("fig1").style.fill  =  '#E84BE4';
document.getElementById("fig2").style.fill  =  '#E84BE4';
document.getElementById("fig3").style.fill  =  '#E84BE4';
document.getElementById("fig4").style.fill  =  '#E84BE4';
}
			function pagna() {
var contenedor = new String()
document.getElementById("fig").style.fill  =  '#E19234';
document.getElementById("fig0").style.fill  =  '#E19234';
document.getElementById("fig1").style.fill  =  '#E19234';
document.getElementById("fig2").style.fill  =  '#E19234';
document.getElementById("fig3").style.fill  =  '#E19234';
document.getElementById("fig4").style.fill  =  '#E19234';
}
			
 
var xInic, yInic;
            var estaPulsado = false;
            
            function ratonPulsado(evt) { 
                //Obtener la posición de inicio
                xInic = evt.clientX;
                yInic = evt.clientY;    
                estaPulsado = true;
                //Para Internet Explorer: Contenido no seleccionable
                document.getElementById(e.dataTransfer.getData("Data")).unselectable = true;
            }
            
            function ratonMovido(evt) {
                if(estaPulsado) {
                    //Calcular la diferencia de posición
                    var xActual = evt.clientX;
                    var yActual = evt.clientY;    
                    var xInc = xActual-xInic;
                    var yInc = yActual-yInic;
                    xInic = xActual;
                    yInic = yActual;
                    
                    //Establecer la nueva posición
                    var elemento = document.getElementById(e.dataTransfer.getData("Data"));
                    var position = getPosicion(elemento);
                    elemento.style.top = (position[0] + yInc) + "px";
                    elemento.style.left = (position[1] + xInc) + "px";
                }
            }

            function ratonSoltado(evt) {
                estaPulsado = false;
            }

      /*
             * Función para obtener la posición en la que se encuentra el
             * elemento indicado como parámetro.
             * Retorna un array con las coordenadas x e y de la posición
             */
			 
			             

		    /*
             * Función para obtener la posición en la que se encuentra el
             * elemento indicado como parámetro.
             * Retorna un array con las coordenadas x e y de la posición
             */
            function getPosicion(elemento) {
                var posicion = new Array(2);
                if(document.defaultView && document.defaultView.getComputedStyle) {
                    posicion[0] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("top"))
                    posicion[1] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("left"));
                } else {
                    //Para Internet Explorer
                    posicion[0] = parseInt(elemento.currentStyle.top);             
                    posicion[1] = parseInt(elemento.currentStyle.left);               
                }      
                return posicion;
            }