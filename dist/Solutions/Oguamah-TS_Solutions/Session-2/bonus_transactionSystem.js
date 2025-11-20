//  Session 2 - Bonus Task
//  Topic: Transaction System with Enums and Methods
//  Description: Create a transaction record system.
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "DEPOSIT";
    TransactionType["Withdrawal"] = "WITHDRAWAL";
})(TransactionType || (TransactionType = {}));
class Transaction {
    id;
    amount;
    type;
    constructor(id, amount, type) {
        this.id = id;
        this.amount = amount;
        this.type = type;
    }
    printSummary() {
        const action = this.type === TransactionType.Deposit ? "Deposit of" : "Withdrawal of";
        console.log(`Transaction #TX${this.id}: ${action} ₦${this.amount} successful.`);
    }
}
const t1 = new Transaction("100", 5000, TransactionType.Deposit);
const t2 = new Transaction(200, 2500, TransactionType.Withdrawal);
t1.printSummary();
t2.printSummary();
export {};
//# sourceMappingURL=bonus_transactionSystem.js.map