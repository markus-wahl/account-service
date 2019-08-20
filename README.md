# account-service

## Preparations Undertaken
`
npm init
npm install --save-dev typescript
npm install --save-dev jest ts-jest @types/jest
`

## Preparations After git clone
`
npm install --save-dev typescript
`

## Execute Unit Test
`
npm test
`

## Build
`
npm run build
`

## Run Server
`
npm start
`

## REST

### List All Accounts
curl http://localhost:3000/bankaccounts

### Retrieve the ID of the Default Account
curl http://localhost:3000/bankaccounts/default

### Retrieve the Default Account
curl http://localhost:3000/bankaccounts/defaultstatement

### Create an Account
curl -H "Content-Type: application/json" -X POST -d '{ "id": 100, "number": "100-A", "name": "Account A", "creditcard": false, "synthetic": false, "balance": 100 }' http://localhost:3000/bankaccounts/create

### Delete All Accounts
curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/bankaccounts/deleteall



