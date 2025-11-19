"use strict";
//   Session 2 - Task 3
//   Topic: Enums and Conditional Logic 
//  Description: Use enum to represent task status and print messages.
Object.defineProperty(exports, "__esModule", { value: true });
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Pending"] = 0] = "Pending";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Completed"] = 2] = "Completed";
})(TaskStatus || (TaskStatus = {}));
function checkStatus(status) {
    switch (status) {
        case TaskStatus.Pending:
            console.log("Task is pending. Please start soon.");
            break;
        case TaskStatus.InProgress:
            console.log("Task is currently in progress...");
            break;
        case TaskStatus.Completed:
            console.log("Task has been completed successfully!");
            break;
        default:
            console.log("Unknown task status.");
    }
}
checkStatus(TaskStatus.Pending);
checkStatus(TaskStatus.Completed);
//# sourceMappingURL=enum_taskStatus.js.map