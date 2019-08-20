import { Account } from "./account"

export class Accounts {
    private accounts: Account[]

    constructor(accounts: Account[]) {
        this.accounts = this.sort(accounts)
    }

    sort(accounts: Account[]): Account[] {
        return accounts.sort((a, b) => b.balance - a.balance)
    }

    getAccounts(): Account[] {
        return this.accounts
    }

    getDefaultAccount(): Account | undefined {
        function isDefaultCandidate(account: Account) { 
           return !account.synthetic && account.balance >= 0
        } 
        
        let candidates: Account[] = this.accounts.filter(isDefaultCandidate)
        for (let i: number = 0; i < candidates.length; i++) {
            let candidate: Account = candidates[i];
            let lesserCandidate: Account = candidates[i + 1];
                if(lesserCandidate) {
                    if (candidate.balance >= 2 * lesserCandidate.balance) {
                        return candidate
                    }
                    return undefined
                }
                return candidate
        }
        return undefined
    }

    addAccount(account: Account) {
        this.accounts.push(account)
        this.accounts = this.sort(this.accounts)
    }

    clear() {
        this.accounts = []
    }
}