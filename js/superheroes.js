/// Taller Gestion de Superheroes con Map en JavaScript 

// Creamos el Map principal para almacenar los superhéroes, guarda claves y valores, en este caso la clave sera el ID
const superheroes = new Map();

// Set funciona para agregar un elemento en el Map creado. 
// Las claves en este caso son el primer numero y el valor es el objeto con la informacion del superheroe.
// El arreglo dentro de habilidades es para guardar avrios valores dentro de una sola variable. 

superheroes.set(1, {
    id: 1,
    Nombre: "Iron Man",
    Universo: "Marvel",
    Poder: "Tecnologia Avanzada",
    Fuerza: 85,
    Habilidades: ["Inteligencia superior", "Vuelo", "Armadura de combate"]
})

superheroes.set(2, {
    id: 2,
    Nombre: "Superman",
    Universo: "DC",
    Poder: "Fuerza sobrehumana",
    Fuerza: 98,
    Habilidades: ["Vuelo", "Visión láser", "Invulnerabilidad"],
});

superheroes.set(3, {
    id: 3,
    Nombre: "Batman",
    Universo: "DC",
    Poder: "Estrategia y gadgets",
    Fuerza: 75,
    Habilidades: ["Investigación", "Arte marcial", "Tecnología"],
});

superheroes.set(4, {
    id: 4,
    Nombre: "Hulk",
    Universo: "Marvel",
    Poder: "Fuerza ilimitada",
    Fuerza: 100,
    Habilidades: ["Súper fuerza", "Regeneración", "Resistencia extrema"],
});

superheroes.set(5, {
    id: 5,
    Nombre: "Wonder Woman",
    Universo: "DC",
    Poder: "Fuerza y combate divino",
    Fuerza: 95,
    Habilidades: ["Lazo de la verdad", "Escudo", "Combate cuerpo a cuerpo"],
});

superheroes.set(6, {
    id: 6,
    Nombre: "Spider-Man",
    Universo: "Marvel",
    Poder: "Sentido arácnido",
    Fuerza: 82,
    Habilidades: ["Trepar paredes", "Lanzar telarañas", "Agilidad"],
});

//Funcion para buscar un superheroe por su ID.
// Crea la funcion y recibe un parametro, en ese caso, el ID del superheroe que queremos buscar.

function buscarSuperheroePorId(id) {
    // Preguntamos con el has si el mapa contiene el ID que estamos buscando.
    // has devuelve true o false, si existe o no. 
    if (superheroes.has(id)) {
        return superheroes.get(id); // Si lo contiene, devuelve el objeto del superheroe.
    }
    return `No se encontró un superhéroe con el ID ${id}`;
    // Si no lo contiene, devuelve un mensaje indicando que no se encontró.
}

//Funcion para buscar superheroes por universo.
// Crea la funcion y recibe un parametro, en ese caso, el universo del superheroe que queremos buscar.
function buscarSuperheroesPorUniverso(universo) {
    return Array.from(superheroes.values()).filter(
        //arrat.from convierte el Map en un arreglo
        // filter filtra los elementos del arreglo que cumplan con la condicion que le pasamos.
        (superheroe) =>superheroe.universo.toLowerCase() === universo.toLowerCase()
    )
}

//Funcion para actualizar la fuerza de un superheroe.
//Crea la funcion y recibe dos parametros, el ID del superheroe que queremos actualizar y la nueva fuerza que queremos asignarle.
function actualizarFuerza(id, nuevaFuerza) {
    //validamos si el superheroe existe 
    if (!superheroes.has(id)) {
        return `No se encontró un superhéroe con el ID ${id}`;
    }
    // Si existe, obtenemos el superheroe y actualizamos su fuerza.
    //get me permite obtener los datos del superheroe.
    const superheroe = superheroes.get(id);
    superheroe.fuerza = nuevaFuerza;

    superheroes.set(id, superheroe); // Actualizamos el Map con el nuevo valor de fuerza.
    // Devolvemos un mensaje indicando que la fuerza ha sido actualizada con interpolacion de variables.
    return `La fuerza de ${superheroe.nombre} ha sido actualizada a ${nuevaFuerza}`;

}

//Funcion para eliminar un superheroe 
function eliminarSuperheroe(id) {
  // Si el ID no existe, devolvemos un mensaje de error
  if (!superheroes.has(id)) {
    return `No se encontró un superhéroe con el ID ${id}`;
  }

  // Guardamos el nombre antes de eliminarlo para mostrar un mensaje más claro
  const nombre = superheroes.get(id).nombre;
  superheroes.delete(id); //Elimina en elemento del map cuya clave sea el ID.

  return `El superhéroe con ID ${id} ha sido eliminado. (${nombre})`;
}

// Función para mostrar todos los superhéroes
function mostrarSuperheroes() {
  // Creamos un arreglo para guardar la lista final
  const lista = [];

  // Recorremos el Map y armamos cada línea con ID y nombre
  for (const [id, superheroe] of superheroes) {
    lista.push(`ID: ${id}, Nombre: ${superheroe.nombre}`);
  }

  return lista;
}

// Función para encontrar el superhéroe con más fuerza
function superheroeMasFuerte() {
  // Pasamos los valores del Map a un arreglo
  const listaSuperheroes = Array.from(superheroes.values());

  // Si no hay superhéroes, avisamos
  if (listaSuperheroes.length === 0) {
    return "No hay superhéroes registrados.";
  }

  // Buscamos el superhéroe con mayor fuerza
  const masFuerte = listaSuperheroes.reduce((anterior, actual) =>
    actual.fuerza > anterior.fuerza ? actual : anterior
  );

  return `El superhéroe más fuerte es ${masFuerte.nombre} con una fuerza de ${masFuerte.fuerza}.`;
}


// Pruebas del taller
console.log(buscarSuperheroePorID(1));
console.log(buscarPorUniverso("Marvel"));
console.log(actualizarFuerza(1, 90));
console.log(eliminarSuperheroe(2));
console.log(mostrarSuperheroes());
console.log(superheroeMasFuerte());




