# event
Trabalho da Faculdade

## Pré-requisitos

Necessario o [Ionic, Cordova](#ionic-e-cordova), [Android Studio](#android-studio) e o [JDK/Java](#jdk--java)
### Ionic e Cordova
```
npm install ionic cordova -g
```

### Android Studio 

1. [Baixar](https://developer.android.com/studio/index.html?hl=pt-br) o Android Studio e descompactar o arquivo `.zip`.
 - Caso seja Linux execute via `terminal` o sh dentro da basta bin: 
```
bin/studio.sh
```
3. No `Wizard` selecione `Custom` para install type e marque todas as opções para instalação.
4. Instalar targets Platforms (24,25,26..27), SDK Tools, Google Play Services

### JDK / Java

1. [Baixar](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) o JDK 1.8.

### Instalação

```
npm install
```

### Execução


#### Navegador

```
npm run start
```
ou
```
ionic serve
```

### Publicação

#### Android

Adicione uma plataforma do tipo android com o comando:
```
cordova platform add android
```

Para testar em versões anteriores do android use apos o comando ```android``` adicione ```@6.3.0``` ou a versão desejada:
```
cordova platform add android@6.3.0
```

Testar o aplicativo no celular:
```
cordova run android --device
```

Gerar o APK:
```
cordova build android --prod --release
```

OBs: Caso de erro ao executar os comandos adicione ```ionic``` na frente dos comandos.
