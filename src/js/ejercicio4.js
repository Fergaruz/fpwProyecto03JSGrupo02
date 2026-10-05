//DECLARACIÓN DE VARIABLES
const filtroGenero= document.getElementById("filtroGenero")
const botonFiltrar=document.getElementById("btnFiltrar")
const lista=document.getElementById("listaPeliculas")
const peliculas = [
    { titulo: "Rápidos y Furiosos", genero: "Acción", puntaje: 8 },
    { titulo: "Son como niños", genero: "Comedia", puntaje: 6 },
    { titulo: "El Padrino", genero: "Drama", puntaje: 10 },
    { titulo: "Jhon Wick", genero: "Acción", puntaje: 9 }
];

botonFiltrar.addEventListener("click", () => {
    const genero = filtroGenero.value;  //variable que almacena el genero
    lista.innerHTML = "";   //limpia la lista
    if (genero==="todos"){  //Si la opcion seleccionada es "todos":
        peliculas.forEach((pelicula) =>{ //recorre las peliculas y cada vuelta devuelve una
            const li = document.createElement("li");    //Crea un li
            li.textContent = pelicula.titulo; //declara el contenido del li
            lista.appendChild(li); //se agrega el li al ul
        })
    } else {    //Si no
        const peliculasFiltradas = peliculas.filter((pelicula)=>{
            return pelicula.genero === genero 
        });
    peliculasFiltradas.forEach((pelicula)=>{
        const li = document.createElement("li");
        li.textContent = pelicula.titulo;
        lista.appendChild(li);
    });
    }
})