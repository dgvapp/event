# event
Trabalho da Faculdade

### Pré-requisitos

```
npm install ionic cordova -g
```

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
