# Nex shop

To run this app locally, you will the DB

```
docker-compose up -d
```

-   "-d", means **detached**

-   MongoDB local URL

```
MONGO_URL=mongodb://localhost:27017/nexdb
```

## Environment variables configuration

Rename **.env.template.** file to _.env._

## Re build node modules

```
yarn install
yarn dev
```

## Populate the database with test information

call:

```
  http://localhost:3000/api/seed
```
