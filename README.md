# CHALLENGE SWAPI PROJECT

1.- Clonar el repositorio en la carpeta de su preferencia.
```
git clone https://github.com/nandomunalv/challenge-swapi.git
```

2.- Instalar las dependencias del proyecto.
```
npm install
``` 

3.- Para probar el método GET de forma local ejecutar el siguiente comando.
```
serverless invoke local --function list-information --path .\mocks\swapi-get-event.json
```

4.- Para probar el método POST de forma local ejecutar el siguiente comando.
```
serverless invoke local --function create-information --path .\mocks\swapi-post-event.json
```
