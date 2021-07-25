# Nestjs socket boiler plate
Alot of totorials talking about websocket apis in nestjs do not tacklle on using both restfull api with websocket api. I found no resource talking about this but I managed to make it. 

- What you need is to make your `gateway` injectable and inject it in a controller instead of injecting the usual service. The usual service will be consumed by the gateway.
- Refer to the boiler this boiler plate to check the implementation

## Stacks
- Vuejs (Vuejs CDN) as a websocket client
- [insomenia](https://insomnia.rest/) / [postman](https://www.postman.com/) or any other REST api testing tool to test restfull api
- Nestjs

## Requirements

- Nodejs

## Getting started

### Installing dependencies

- [X] clone the [repo](https://github.com/PatrickNiyogitare28/nestjs-socket-boiler-plate)
- [X] run `npm install` or `yarn install` to add dependencies

### Starting the application

After installing the dependencies, you can run the application using one of the following commands.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing the application

After starting the application, you should see our layout when visiting http://localhost:3000 in your browser. After opening the application in multiple browser windows, you can test the functionality. 

You can also use RESTfull API testing tool like [insomenia](https://insomnia.rest/) or [postman](https://www.postman.com/) to test the functionality

## Author
patrickniyogitare28@gmail.com
