var TaskStatus;
(function (TaskStatus) {
    TaskStatus["pending"] = "pending";
    TaskStatus["inProgress"] = "in progress";
    TaskStatus["completed"] = "completed";
    TaskStatus["failed"] = "failed";
})(TaskStatus || (TaskStatus = {}));
function checkTaskStatus(status) {
    if (TaskStatus.pending === "pending") {
        console.log("Task is currently pending.");
    }
    else if (TaskStatus.inProgress === "in progress") {
        console.log("Task is in progress.");
    }
    else if (TaskStatus.completed === "completed") {
        console.log("Task has been completed.");
    }
    else {
        console.log("Task has failed.");
    }
}
checkTaskStatus(TaskStatus.pending);
export {};
//# sourceMappingURL=enum_taskStatus.js.map