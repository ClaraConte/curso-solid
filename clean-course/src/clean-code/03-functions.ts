(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: number ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: number ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( actorId: number ) {
        console.log({ actorId });
    }

    // Crear una película
    interface Movie {
        title: string,
        description: string,
        rating: number,
        cast: string[]
    }
    function createMovie( {title, description, rating, cast} : Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..

        // Deberia ser una funcion que verifique el nombre por el principio de responsabilidad única
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;

    }

    const getPayAmountConErrores = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }

        return result;
    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;

        return ( isRetired ) ? 3000 : 40000;
    }

})();
