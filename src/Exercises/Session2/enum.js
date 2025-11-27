var ManageStatus;
(function (ManageStatus) {
    ManageStatus[ManageStatus["Pending"] = 0] = "Pending";
    ManageStatus[ManageStatus["InProgress"] = 1] = "InProgress";
    ManageStatus[ManageStatus["Completed"] = 2] = "Completed";
})(ManageStatus || (ManageStatus = {}));
function checkStatus(status) {
    if (status === ManageStatus.Pending) {
        console.log("The task is pending.");
    }
    else if (status === ManageStatus.InProgress) {
        console.log("The task is in progress.");
    }
    else if (status === ManageStatus.Completed) {
        console.log("The task is completed.");
    }
}
//Calling the function with different statuses
checkStatus(ManageStatus.Pending);
checkStatus(ManageStatus.InProgress);
checkStatus(ManageStatus.Completed);
/*
Scenario:
You are building a small task manager. Each task can have a status: Pending, InProgress, or Completed.
Use an enum to represent these statuses and write a function that prints a message based on the task’s status.

### Instructions:

Create an enum called TaskStatus.

Write a function checkStatus that takes the enum as a parameter.

Use a switch or if statement to display different messages.
*/
// enum Status {
//     red,
//     blue,
//     green
// }
// let check: Status = Status.blue;
// console.log(check);
