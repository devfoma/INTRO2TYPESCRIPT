//  Session 2 - Bonus Task
//  Topic: Transaction System with Enums and Methods
//  Description: Create a transaction record system.
 

enum TransactionType {
  Deposit = "DEPOSIT",
  Withdrawal = "WITHDRAWAL",
}

type TransactionID = string | number;

class Transaction {
  constructor(
    public id: TransactionID,
    public amount: number,
    public type: TransactionType
  ) {}

  printSummary(): void {
    const action =
      this.type === TransactionType.Deposit ? "Deposit of" : "Withdrawal of";
    console.log(
      `Transaction #TX${this.id}: ${action} ₦${this.amount} successful.`
    );
  }
}

const t1 = new Transaction("100", 5000, TransactionType.Deposit);
const t2 = new Transaction(200, 2500, TransactionType.Withdrawal);

t1.printSummary();
t2.printSummary();
