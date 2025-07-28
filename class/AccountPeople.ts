import { DioAccount } from "./DioAccount";

export class AccountPeople extends DioAccount{
    documentID: string

    constructor(documentID: string, name: string, accountNumber: number) {
        super(accountNumber, name)
        this.documentID = documentID
    }
}