
// BONUS CHALLENGE — TRANSACTION SYSTEM

// 1. Enum with different keys and values
enum TransactionType {
    Deposit = "DEPOSIT",
    Withdrawal = "WITHDRAWAL",
}

// 2. Transaction class
class Transaction {
    constructor(
        public id: string | number,
        public amount: number,
        public type: TransactionType
    ) {}

    // Method to print a summary of the transaction
    printSummary(): void {
        console.log(
            `Transaction #${this.id}: ${this.type === TransactionType.Deposit ? "Deposit" : "Withdrawal"} of ₦${this.amount} successful.`
        );
    }
}

// Example usage:

const tx1 = new Transaction("TX100", 5000, TransactionType.Deposit);
const tx2 = new Transaction(2001, 15000, TransactionType.Withdrawal);

tx1.printSummary();
tx2.printSummary();
