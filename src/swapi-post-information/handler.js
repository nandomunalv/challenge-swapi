import handler from '../../libs/handler-lib';
import dynamoDb from '../../libs/dynamodb-lib';
import * as uuid from "uuid";


export const main = handler(async (event, context) => {
    const bodyRequest = event.body;
    const itemDb = buildPlanetInformation(bodyRequest);


    const params = {
        TableName: 'planets',
        Item: itemDb
    };
    await dynamoDb.put(params);
    return params.Item;

});

const buildPlanetInformation = (planetInfo) => {
    return {
        id: uuid.v1(),
        clima: planetInfo.clima,
        creado: Date.now(),
        diametro: planetInfo.diametro,
        editado: Date.now(),
        peliculas: planetInfo.peliculas,
        gravedad: planetInfo.gravedad,
        nombre: planetInfo.nombre,
        periodoOrbital: planetInfo.periodoOrbital,
        poblacion: planetInfo.poblacion,
        residentes: planetInfo.residentes,
        periodoRotacion: planetInfo.periodoRotacion,
        superficieAcuatica: planetInfo.superficieAcuatica,
        terreno: planetInfo.terreno,
        url: planetInfo.url,
    };
};
