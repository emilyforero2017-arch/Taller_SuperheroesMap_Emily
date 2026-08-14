# Taller_SuperheroesMap_Emily

Proyecto en JavaScript para practicar el uso de `Map` con datos de superhéroes de Marvel y DC.

## Descripción

Este ejercicio permite almacenar superhéroes como objetos dentro de un `Map` y realizar operaciones comunes sobre la colección:

- agregar superhéroes
- buscar por ID
- buscar por universo
- actualizar la fuerza
- eliminar registros
- mostrar todos los héroes
- obtener el más fuerte
- simular un combate
- mostrar habilidades

## Estructura del proyecto

```bash
taller-gesti-n-de-superh-roes/
├── outputs/
│   ├── README.md
│   └── taller-superheroes-map-comentado.js
└── work/
```

## Datos de cada superhéroe

Cada superhéroe contiene:

- `id`
- `nombre`
- `universo`
- `poder`
- `fuerza`
- `habilidades`

## Funciones disponibles

- `buscarSuperheroePorID(id)`: busca un superhéroe por su ID.
- `buscarPorUniverso(universo)`: filtra los héroes por Marvel o DC.
- `actualizarFuerza(id, nuevaFuerza)`: modifica la fuerza de un superhéroe.
- `eliminarSuperheroe(id)`: elimina un héroe del `Map`.
- `mostrarSuperheroes()`: muestra todos los superhéroes registrados.
- `superheroeMasFuerte()`: devuelve el superhéroe con mayor fuerza.
- `combate(id1, id2)`: compara dos superhéroes y determina el ganador.
- `mostrarHabilidades(id)`: muestra las habilidades de un superhéroe.

