# OREID + Vue + Vuex + Router Sample Application

## Features

Uses the current route to send as 'state' parameter to ORE ID, which gets returned to the callback and routes the user back to where they were when they signed the transaction.

Saves the OreID and UserInfo objects in Vuex.

Once routed back from signing a transaction, a section is displayed that presents a link to the block explorer for that transaction.

A profile page to view the parameters made available by OAuth and ORE ID.

Uses the ORE ID Local Storage key to determine if the user is logged in.

## Limitations / Not Tested
Have not tested with other signature providers, such as Scatter

Hard-coded to a sample transaction on Kylin (edit store.js)

Only tested with Google login provider 

Supports only one permission (rather than an array)

## Issues

Prompts the user to select Google account every time is signs a transaction


## Project setup
```
yarn install
```

Modify ```config.example.js``` to add your ORE ID appId and apiKey, and save file as ```config.js```

### Compiles and hot-reloads for development
```
yarn run serve
```
