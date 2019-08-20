import { BankAccounts } from "../../service/bankAccounts"
import { Account } from "../../service/account"
import { defaultAccountSamples } from "../../service/state"

let accountA: Account = 
    { "id": 100, "number": "100-A", "name": "Account A", "creditcard": false, "synthetic": false, "balance": 100 }
let accountB: Account = 
    { "id": 101, "number": "101-B", "name": "Account B", "creditcard": true, "synthetic": false, "balance": 101 }

let testee: BankAccounts = new BankAccounts()

beforeEach(() => {
    testee.clear()
})

it('The ID of the default account is retreived', () => {
    testee.createAccount(accountA)

    let accountID: number | undefined = testee.getDefaultAccountID()

    expect(accountID).toBe(accountA.id)
})

it('Retreiving ID of the default account when no account is available returns the value undefined', () => {
    expect(testee.getDefaultAccountID()).toBeUndefined()
})