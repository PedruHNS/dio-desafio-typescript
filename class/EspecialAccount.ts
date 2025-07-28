import { DioAccount } from "./DioAccount";

export class EspecialAccount extends DioAccount{

    constructor(accountNumber: number, name: string){
        super(accountNumber, name)
    }

    deposit = (value: number) =>{
        this.setBalance(value + 10)
    };
}