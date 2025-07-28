import { AccountPeople } from "./class/AccountPeople";
import { CompanyAccount } from "./class/CompanyAccount";
import { EspecialAccount } from "./class/EspecialAccount";



const account = new AccountPeople('1777.222.982-10', 'Pedro', 1111);

account.deposit(50)

account.withdraw(15);

const test =account.getBalance();
console.log(test);

const company = new CompanyAccount(123131312, 'nexxus', '231.312/0001-10')

company.getLoan()
company.deposit(10)
const saldo = company.getBalance()
console.log(saldo)


const especial = new EspecialAccount(223213, 'especial')

especial.deposit(200)

console.log(especial.getBalance())