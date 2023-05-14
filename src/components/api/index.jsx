const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=20af584b7818bee60afb7d99aee36867"
    );

    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
    } else if (respuesta.status === 401) {
      console.log("la llave esta mal");
    } else if (respuesta.status === 404) {
      console.log("La pelicula no existe");
    } else {
      console.log("algo paso no sabemos el error");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();

export default cargarPeliculas;
