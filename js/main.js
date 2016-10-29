function validateForm(){
	//Todos los campos son obligatorios, excepto los dos últimos.
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;
    var bicis = document.querySelector("select").value;
	//name
	//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z   
	//Para los campos nombre y apellido la primera letra debe ser mayúscula
    if( name == null || name.length <= 3 || /^\s+$/.test(name) || /^[A-Za-z]*$/.test(name) == false || name.substring(0,1) == name.substring(0,1).toUpperCase() == false ) {
        // alert("Escriba el primer caracter de su nombre en Mayúscula.");
        var contenedor = document.getElementsByClassName('name-container')[0];
        var etiqueta = document.createElement('span');
        var nodoError = document.createTextNode('Escriba el primer caracter de su nombre en Mayúscula.');
        etiqueta.appendChild(nodoError);
	    contenedor.appendChild(etiqueta);
        return false;    
	}
	//lastname
	if( lastName == null || lastName.length <= 3 || /^\s+$/.test(lastName) || /^[A-Za-z]*$/.test(lastName) == false || lastName.substring(0,1) == lastName.substring(0,1).toUpperCase() == false ) { 
        // alert("Escriba el primer caracter de su apellido en Mayúscula."); 
        var contenedor = document.getElementsByClassName('lastname-container')[0];
        var etiqueta = document.createElement('span');
        var nodoError = document.createTextNode('Escriba el primer caracter de su apellido en Mayúscula.');
        etiqueta.appendChild(nodoError);
        contenedor.appendChild(etiqueta);
        return false;   
	}
	//email
	//Validar que el campo email tenga un formato válido. Ej: name@domain.com
    if ( email == null || email.length == 0 || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) != true ) {
        // alert("Dirección de Correo Electrónico No Válido!");
        var contenedor = document.getElementsByClassName('email-container')[0];
        var etiqueta = document.createElement('span');
        var nodoError = document.createTextNode('Dirección de Correo Electrónico No Válido!');
        etiqueta.appendChild(nodoError);
        contenedor.appendChild(etiqueta);
        return false;   
   } 
	//password
	//El campo password debe tener al menos 6 caracteres                      
	//El campo password no puede ser igual a "password" ó "123456" ó "098754"
     if ( password == null || password.length < 6 ) {
        // alert ("Contraseña No Valida, debe tener como mínimo 6 Caracteres!")
        //var contenedor = document.getElementsByClassName('email-container')[0];
        //var etiqueta = document.createElement('span');
        //var nodoError = document.createTextNode('Contraseña No Valida, debe tener como mínimo 6 Caracteres!');
        //etiqueta.appendChild(nodoError);
        //contenedor.appendChild(etiqueta);
        return false;
    } else if ( password == '123456' || password == '098754' || password == 'password' ) {
        // alert ("Su Contraseña No es Segura!");
        return false;
    }
	//campo obligatorio
	//El valor seleccionado de bicis, debe ser una de las opciones presentadas
    if (bicis == 0) {
        // alert("Seleccione su Tipo de Bici!");
        return false;
    }
}
