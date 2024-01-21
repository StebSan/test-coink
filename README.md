# Prueba Coink

Proyecto Prueba Coink

## Inconvenientes presentados

- El endPoint [genders](https://api.bancoink.biz/qa/signup/genders?apiKey=030106) que parece ser información de los generos, regresa un json encriptado el cual no podria mostrar en el input correspondiente.
- Se sustituyo por un mock la información de generos.

## Prerrequisitos

- node v18.x
- Android Studio (Opcional generar APK)

## Comenzando

Estas instrucciones te darán una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

- Abrir terminal en el directorio de la carpeta
- Ejecutar el comando
- npm i
- Levantar servidor local con el comando
- ionic serve -o

## Generar APK

- Abrir terminal en el directorio de la carpeta
- Ejecutar los comandos
- ionic capacitor add android
- ionic capacitor copy android
- ionic capacitor build android --prod
- Si Android Studio no se abrio automaticamente, arrastrar la carpeta android a Adroid Studio
- Adroid Studio > Build > Build Bundle(s) / APK(s) > Build APK(s)

## Demo APK

Encontraras el demo APK en el directorio:

- ./test-coink.apk


## Autor

- [Esteban Sandoval](https://github.com/stebsan)
