// Transaction type enum
enum TransactionType {
    Deposit = "Deposit",
    Withdrawal = "Withdrawal"
}

// ID can be string or number
type TransactionID = string | number;

// Transaction class
class Transaction {
    private id: TransactionID;
    private amount: number;
    private type: TransactionType;

    constructor(id: TransactionID, amount: number, type: TransactionType) {
        this.id = id;
        this.amount = amount;
        this.type = type;
    }

    printSummary() {
        console.log(
            `Transaction #${this.id}: ${this.type} of ₦${this.amount} successful.`
        );
    }
}


// ---- Example usage ----
const t1 = new Transaction("TX100", 5000, TransactionType.Deposit);
const t2 = new Transaction(232, 12000, TransactionType.Withdrawal);

t1.printSummary();
t2.printSummary();
