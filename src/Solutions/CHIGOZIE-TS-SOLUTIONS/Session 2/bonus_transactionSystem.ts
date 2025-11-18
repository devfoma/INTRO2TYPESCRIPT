// Enum for Transaction Types
enum TransactionType {
  Deposit = "DEPOSIT",
  Withdrawal = "WITHDRAWAL",
}

class Transaction {
  id: string | number;
  amount: number;
  type: TransactionType;
  accountName: string;

  constructor(
    id: string | number,
    amount: number,
    type: TransactionType,
    accountName: string
  ) {
    this.id = id;
    this.amount = amount;
    this.type = type;
    this.accountName = accountName;
  }

  printSummary(): void {
    const typeLabel =
      this.type === TransactionType.Deposit ? "Deposit" : "Withdrawal";
    console.log(
      `Transaction #${this.id}: ${typeLabel} of ₦${this.amount} successful.`
    );
    console.log(`Account Name: ${this.accountName}`);
  }
}

const transaction1 = new Transaction(
  "TX100",
  50000,
  TransactionType.Deposit,
  "Okorie Chigozie"
);
const transaction2 = new Transaction(
  "TX101",
  95000,
  TransactionType.Withdrawal,
  "Okorie Chigozie"
);

transaction1.printSummary();
console.log("");
transaction2.printSummary();
