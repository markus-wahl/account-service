import * as express from "express"
import {Server} from "typescript-rest"
import {BankAccounts} from "../service/bankAccounts"

let server: express.Application = express()
Server.buildServices(server, BankAccounts)
 
server.listen(3000, function() {
  console.log("Bank Accounts server listening on port 3000")
})