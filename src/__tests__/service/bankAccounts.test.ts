import { BankAccounts } from "../../service/bankAccounts"
import { Account } from "../../service/account"
import { defaultAccountSamples } from "../../service/state"

let account: Account = 
    { "id": 100, "number": "100-A", "name": "Account A", "creditcard": false, "synthetic": false, "balance": 100 }

let testee: BankAccounts = new BankAccounts()

beforeEach(() => {
    testee.clear()
})

it('The ID of the default account is retreived', () => {
    testee.createAccount(account)

    let accountID: number | undefined = testee.getDefaultAccountID()

    expect(accountID).toBe(account.id)
})

it('Retreiving ID of the default account when no account is available returns the value undefined', () => {
    expect(testee.getDefaultAccountID()).toBeUndefined()
})