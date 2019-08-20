import { Server, Path, GET, POST, DELETE, PathParam } from "typescript-rest"
import { state } from "./state"
import { Account } from "../service/account"

@Path("/bankaccounts")
export class BankAccounts {
    @GET
    getAccounts(): Account[] {
        return state.getAccounts()
    }

    @Path("default")
    @GET
    getDefaultAccountID(): number | undefined {
        let defaultAccount: Account | undefined = this.getDefaultAccountStatement()
        if (defaultAccount) {
            return defaultAccount.id
        }
        return undefined
    }

    @Path("defaultstatement")
    @GET
    getDefaultAccountStatement(): Account | undefined {
        return state.getDefaultAccount()
    }

    @Path("create")
    @POST
    createAccount(account: Account) {
        state.addAccount(account)
    }

    @Path("deleteall")
    @DELETE
    clear() {
        return state.clear()
    }
}