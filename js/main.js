function validateForm(){
    //Todos los campos son obligatorios, excepto los dos últimos.
    //name
    //Los campos nombre y apellido sólo deben permitir caracteres de la A-Z   
    //Para los campos nombre y apellido la primera letra debe ser mayúscula
    var name = document.getElementById('name').value;
     if( name == null || name.length <= 3 || /^\s+$/.test(name) || /^[A-Za-z]*$/.test(name) == false || name.substring(0,1) == name.substring(0,1).toUpperCase() == false ) {
        // alert("Escriba el primer caracter de su nombre en Mayúscula.");
        var nombreContenedor = document.getElementsByClassName('name-container')[0];
        var etiquetaSpan = document.createElement('span');
        var nodoMensaje = document.createTextNode('Escriba el primer caracter de su nombre en Mayúscula.');
        etiquetaSpan.appendChild(nodoMensaje);
        nombreContenedor.appendChild(etiquetaSpan);
        return false;    
    }
    //lastname
    //Los campos nombre y apellido sólo deben permitir caracteres de la A-Z   
    //Para los campos nombre y apellido la primera letra debe ser mayúscula
    var lastName = document.getElementById('lastname').value;
    if( lastName == null || lastName.length <= 3 || /^\s+$/.test(lastName) || /^[A-Za-z]*$/.test(lastName) == false || lastName.substring(0,1) == lastName.substring(0,1).toUpperCase() == false ) { 
        // alert("Escriba el primer caracter de su apellido en Mayúscula."); 
        var nombreContenedor = document.getElementsByClassName('lastname-container')[0];
        var etiquetaSpan = document.createElement('span');
        var nodoMensaje = document.createTextNode('Escriba el primer caracter de su apellido en Mayúscula.');
        etiquetaSpan.appendChild(nodoMensaje);
        nombreContenedor.appendChild(etiquetaSpan);
        return false;   
    }
    //email
    //Validar que el campo email tenga un formato válido. Ej: name@domain.com
    var email = document.getElementById('input-email').value;
    if ( email == null || email.length == 0 || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) != true ) {
        // alert("Dirección de Correo Electrónico No Válido!");
        var nombreContenedor = document.getElementsByClassName('email-container')[0];
        var etiquetaSpan = document.createElement('span');
        var nodoMensaje = document.createTextNode('Dirección de Correo Electrónico No Válido!');
        etiquetaSpan.appendChild(nodoMensaje);
        nombreContenedor.appendChild(etiquetaSpan);
        return false;   
    } 
    //password
    //El campo password debe tener al menos 6 caracteres                      
    var password = document.getElementById('input-password').value;
    if ( password == null || password.length < 6 ) {
        // alert ("Contraseña No Valida, debe tener como mínimo 6 Caracteres!")
        var etiquetaSpan = document.createElement('span');
        var etiquetaSpan2 = document.getElementById('input-password');
        var padreElemento = etiquetaSpan2.parentNode;
        padreElemento.insertBefore(etiquetaSpan, etiquetaSpan2);
        var nodoMensaje = document.createTextNode('Contraseña No Valida, debe tener como mínimo 6 Caracteres!');
        etiquetaSpan.appendChild(nodoMensaje);
        return false;
    } 
        //El campo password no puede ser igual a "password" ó "123456" ó "098754"
        else if ( password == '123456' || password == '098754' || password == 'password' ) {
            // alert ("Su Contraseña No es Segura!");
            var etiquetaSpan = document.createElement('span');
            var etiquetaSpan2 = document.getElementById('input-password');
            var padreElemento = etiquetaSpan2.parentNode;
            padreElemento.insertBefore(etiquetaSpan, etiquetaSpan2);
            var nodoMensaje = document.createTextNode('Su Contraseña No es Segura!');
            etiquetaSpan.appendChild(nodoMensaje);
            return false;
        }
    //campo obligatorio
    //El valor seleccionado de bicis, debe ser una de las opciones presentadas
    var bicis = document.querySelector("select").value;
    if (bicis == 0) {
        // alert("Seleccione su Tipo de Bici!");
        var etiquetaSpan = document.createElement('span');
        var etiquetaSpan2 = document.querySelector('select');
        var padreElemento = etiquetaSpan2.parentNode;
        padreElemento.insertBefore(etiquetaSpan, etiquetaSpan2);
        var nodoMensaje = document.createTextNode('Seleccione su Tipo de Bici!');
        etiquetaSpan.appendChild(nodoMensaje);
        return false;
    }
}
