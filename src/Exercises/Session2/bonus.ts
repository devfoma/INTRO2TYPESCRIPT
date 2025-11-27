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

const type1 = new Transaction("100", 5000, TransactionType.Deposit);
const type2 = new Transaction(200, 2500, TransactionType.Withdrawal);

type1.printSummary();
type2.printSummary();


/*
## 7. Bonus Challenge

### Scenario:
You are creating a Transaction system for a fintech app.

Each transaction should store:

an ID (string or number)

an amount

a transaction type (enum: Deposit | Withdrawal)

a method that prints a summary like:

Transaction #TX100: Deposit of ₦5000 successful.


### Extra:
Use enums where the keys and values are different, for example:

enum TransactionType {
  Deposit = "DEPOSIT",
  Withdrawal = "WITHDRAWAL",
}
*/