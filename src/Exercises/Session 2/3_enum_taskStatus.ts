
// 3. ENUMS AND CONDITIONAL LOGIC

enum TaskStatus {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED"
}

function checkStatus(status: TaskStatus): void {
    switch (status) {
        case TaskStatus.Pending:
            console.log("Task is pending…");
            break;

        case TaskStatus.InProgress:
            console.log("Task is currently in progress…");
            break;

        case TaskStatus.Completed:
            console.log("Task has been completed ✔");
            break;

        default:
            console.log("Unknown task status");
    }
}

checkStatus(TaskStatus.Pending);
checkStatus(TaskStatus.InProgress);
checkStatus(TaskStatus.Completed);
