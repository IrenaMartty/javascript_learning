let mensaje = 'Hola chicas, esto es un mensaje';
let telefono = 245354355;

// Para ver el largo de mi cadena de caracteres
console.log(mensaje.length); 
// Devuelve un NUMERO

// Para cambiar a mayusculas mi cadena de caracteres
console.log(mensaje.toUpperCase());

// Para cambiar a minusculas mi cadena de caracteres
console.log(mensaje.toLowerCase());

// Para cortar una Cadena
console.log(mensaje.slice(0,10));
console.log(mensaje.slice(5));
console.log(mensaje.slice(5,-1));
console.log(mensaje.slice(-5,-1));
// Devuelve una copia recortada de la cadena

// Si quiero saber si mi cadene de caracteres incluye algun caracter especifico
console.log(mensaje.includes('z'));
console.log(mensaje.includes('@'));
console.log(mensaje.includes('chica'));
console.log(mensaje.includes('a'));
// Devuelve un BOOLEANO true/false

// indexOf devuelve el NUMERO de posicion de la primera coincidencia que encuentra
console.log(mensaje.indexOf('a'));

// replace recibe 2 parametros, el primero es la palabra o caracter a reemplazar y el segundo la palabra o caracter con la que quiero reemplazar.
// Reemplaza la primer coincindencia
// replaceAll reemplaza todas las coincidencias
console.log(mensaje.replace('chicas','chiques'))
console.log(mensaje.replaceAll('a','i'))

// toString
console.log(typeof(telefono)) ;
// Number
console.log(typeof(telefono.toString()));
// String
console.log(telefono, telefono.toString());
