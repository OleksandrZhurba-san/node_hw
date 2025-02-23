import { Account } from "./Account";

export class SavingsAccount extends Account {
  constructor(balance: number, private interestRate: number) {
    super(balance);
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposite ${amount}. New balance: ${this.balance}`);
  }
  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient found!");
    } else {
      this.balance -= amount;
      console.log(`Withdraw ${amount}. New balance: $${this.balance}`);
    }
  }

  applyInterest(): void {
    const interest = this.balance * (this.interestRate / 100);
    this.balance += interest;
    console.log(`Interest applied (${this.interestRate}%). New balance $${this.balance}`);
  }

}
