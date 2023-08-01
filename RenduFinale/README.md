# Express Typescript Api

# Install 

``` npm install ```

### init docker mongo 
``` docker-compose up ``` 

# Settings 

```
mongo_uri=@127.0.0.1:27080/
mongo_user= root
mongo_passwd= root
salt_round= 12
jwt_key= hello
port= 3000
limit_find= 10
initialise_data= true

```

``` initialise_data ``` put to false if you to init data **false** as default   
``` limit_find ``` set up limit of a mongo find query **10** as default 

# Build 

### Test, Build And Start 

``` npm run dev:test ```

### Build And Start 

``` npm run dev:build ```

# Routes 

## Swagger

### Doc 

``` http://localhost:3000/api/v1/docs  ```

## Authorization 

### Login 

``` http://localhost:3000/api/v1/login ```

### Register 

``` http://localhost:3000/api/v1/register ```