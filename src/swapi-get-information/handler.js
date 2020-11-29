import handler from '../../libs/handler-lib';
import dynamoDb from '../../libs/dynamodb-lib';
import search from './integration/search-swapi-information';


export const main = handler(async (event, context) => {
    const planetId = event.pathParameters.id;
    const params = {
        TableName: 'planets',
        Key: {id: planetId}
    };

    const result = await dynamoDb.get(params);


    if (!result.Item) {
        console.info('El planeta no se encuentra disponible, se procede a crearlo.');
        const planetInfo = await search.getPlanetInformation(planetId);
        return await addPlanetDb(planetInfo, planetId);
    } else {
        console.info('El planeta fue encontrado en la BD.');
        return result.Item;
    }
});

const addPlanetDb = async (planetInfo, identifier) => {
    const params = {
        TableName: 'planets',
        Item: {
            id: identifier,
            clima : planetInfo.data.climate,
            creado : planetInfo.data.created,
            diametro : planetInfo.data.diameter,
            editado : planetInfo.data.edited,
            peliculas : planetInfo.data.films,
            gravedad : planetInfo.data.gravity,
            nombre : planetInfo.data.name,
            periodoOrbital : planetInfo.data.orbital_period,
            poblacion : planetInfo.data.population,
            residentes : planetInfo.data.residents,
            periodoRotacion : planetInfo.data.rotation_period,
            superficieAcuatica : planetInfo.data.surface_water,
            terreno : planetInfo.data.terrain,
            url : planetInfo.data.url
        }
    };

    await dynamoDb.put(params);

    return params.Item;
};
