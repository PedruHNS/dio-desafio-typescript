export abstract class DioAccount {
    private readonly accountNumber: number;
    protected balance: number;
    private readonly name : string;
    protected status : boolean;  // pode ser acessada nas classes filhas

    constructor(accountNumber: number, name: string){
        this.accountNumber = accountNumber
        this.name = name;  
        this.balance = 0;
        this.status  = true
    }
    
    getName =(): string => this.name;
    getBalance = (): number => this.balance;
    getAccountNumber = (): number => this.accountNumber;

    protected setBalance = (value: number) => {
        this.balance = value;
    }


    deposit = (value: number)=>{
        this.balance +=  value;
    }
    withdraw = (value: number)=>{
        if(value > this.balance && this.status){
            console.log('saldo insuficiente');
            return;
        }
        this.balance -=  value;
    }


    
}