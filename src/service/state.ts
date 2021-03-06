import { Account } from "../service/account"
import { Accounts } from "../service/accounts"

let defaultAccountSamples: Account[] = [
    { "id": 1, "number": "1357756", "name": "Personal account", "creditcard": false, "synthetic": false, "balance": 1202.14 },
    { "id": 2, "number": "2446987", "name": "Business account", "creditcard": false, "synthetic": false, "balance": 34057.00 },
    { "id": 3, "number": "9981644", "name": "Credit card", "creditcard": true, "synthetic": false, "balance": -10057.00 },
    { "id": 4, "number": "", "name": "Expense claims", "creditcard": false, "synthetic": true, "balance": 0 }
]
export { defaultAccountSamples }

let state: Accounts = new Accounts(defaultAccountSamples)
export { state }