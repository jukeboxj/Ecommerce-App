### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:2000) & backend (:1000)
npm run dev

# Run backend only
npm run server
```

### Seed Database

The following commands can be used to seed the database as well as destroy all data
Local mongodb server would be required - https://www.mongodb.com/try/download/community

```
# Import data
npm run data

# Destroy data
npm run data:destroy
```
