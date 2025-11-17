enum TransactionType {
    Deposit = 'DEPOSIT',
    Withdrawal = 'WITHDRAWAL'
}

class Transaction {
    constructor(
        private id: string | number,
        private amount: number,
        private type: TransactionType
    ) {}

    printSummary(): void {
        const formattedAmount = new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(this.amount);

        console.log(
            `Transaction #${this.id}: ${this.type} of ${formattedAmount} successful.`
        );
    }
}

const transactions: Transaction[] = [
    new Transaction('TX100', 5000, TransactionType.Deposit),
    new Transaction('TX101', 2000, TransactionType.Withdrawal),
    new Transaction('TX102', 15000, TransactionType.Deposit)
];

transactions.forEach((transaction) => transaction.printSummary());
