// String enum with different keys and values
enum TransactionType {
    Deposit = "DEPOSIT",
    Withdrawal = "WITHDRAWAL",
}

// ID can be string or number
type TransactionID = string | number;

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
        const readableType =
            this.type === TransactionType.Deposit ? "Deposit" : "Withdrawal";

        console.log(
            `Transaction #${this.id}: ${readableType} of ₦${this.amount} successful.`
        );
    }
}

// --- Example usage ---
const t1 = new Transaction("TX100", 5000, TransactionType.Deposit);
const t2 = new Transaction("TX101", 12000, TransactionType.Withdrawal);

t1.printSummary();
t2.printSummary();
