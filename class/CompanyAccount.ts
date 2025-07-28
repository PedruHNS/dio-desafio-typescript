import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    documentCoop: string
    constructor(accountNumber:number,name:string, documentCoop: string) {
        super(accountNumber,name)
        this.documentCoop = documentCoop
    }
    getLoan = ()=>{
     
        if (this.status) {
           console.log('você pode pegar R$ 1000.00 de emprestimo.')      
         this.setBalance(this.balance + 1000)
        } else {
            console.log('Conta inativa. Empréstimo negado.');
        }
    }
}