import { Account } from "../../service/account"
import { Accounts } from "../../service/accounts"

let account200: Account = createAccount(1, false, 200)
let account400: Account = createAccount(2, false, 400)
let accountNegative: Account = createAccount(3, false, -10)
let accountSynthetic: Account = createAccount(4, true, 200)
let account410Synthetic: Account = createAccount(5, true, 410)
let account410: Account = createAccount(6, false, 410)
let account820: Account = createAccount(7, false, 820)
let account800Synthetic: Account = createAccount(8, true, 800)

function createAccount(id: number, synthetic: boolean, balance: number) : Account {
    return { "id": id, "number": "The account number of account ID " + id, "name": "Account " + id, "creditcard": false, "synthetic": synthetic, "balance": balance }
}

let testee: Accounts

beforeEach(() => {
    testee = new Accounts([])
})

it('Added account can be retrieved', () => {
    testee.addAccount(account200)

    let accounts: Account[] = testee.getAccounts()

    expect(accounts.length).toBe(1)
    expect(accounts[0]).toBe(account200)
})

it('Added accounts can be retrieved', () => {
    testee.addAccount(account200)
    testee.addAccount(account400)

    let accounts: Account[] = testee.getAccounts().sort((a, b) => a.balance - b.balance)

    expect(accounts.length).toBe(2)
    expect(accounts[0]).toBe(account200)
    expect(accounts[1]).toBe(account400)
})

it('All accounts can be removed', () => {
    testee.addAccount(account200)
    testee.addAccount(account400)
    testee.clear()

    expect(testee.getAccounts().length).toBe(0)

})

it('The only account is the default account', () => {
    testee.addAccount(account200)

    expect(testee.getDefaultAccount()).toBe(account200)

})

it('The only account is not default account if it has a negative balance', () => {
    testee.addAccount(accountNegative)

    expect(testee.getDefaultAccount()).toBeUndefined()

})

it('The only account is not default account if it is synthetic', () => {
    testee.addAccount(accountSynthetic)

    expect(testee.getDefaultAccount()).toBeUndefined()

})

it('The account with the twice highest balance is not default account if it is synthetic', () => {
    testee.addAccount(account200)
    testee.addAccount(account800Synthetic)
    testee.addAccount(account400)

    expect(testee.getDefaultAccount()).toBe(account400)

})

it('If no account is twice as big as all other, no account is default', () => {
    testee.addAccount(account200)
    testee.addAccount(account400)
    testee.addAccount(account410)

    expect(testee.getDefaultAccount()).toBeUndefined()
    
})

it('No account is default if the biggest ones have equal balance', () => {
    testee.addAccount(account200)
    testee.addAccount(account400)
    testee.addAccount(account400)

    expect(testee.getDefaultAccount()).toBeUndefined()
    
})

it('The account with the twice highest balance is default account', () => {
    testee.addAccount(account200)
    testee.addAccount(account400)

    expect(testee.getDefaultAccount()).toBe(account400)

})

it('The account with the globally twice highest balance is default account', () => {
    testee.addAccount(account200)
    testee.addAccount(account400)
    testee.addAccount(account410)
    testee.addAccount(account820)

    expect(testee.getDefaultAccount()).toBe(account820)
    
})